import React, { useState } from "react";
import { firebaseFirestore, firebaseStorage } from "../firebase/config";
import { motion } from "framer-motion";

const Upload = ({ file, setFile, error, setUrl }) => {
  const [uploadStage, setUploadStage] = useState("Upload");
  const [progress, setProgress] = useState(0);
  const [err, setErr] = useState(null);

  const uploadHandler = (e) => {
    setUploadStage("Uploading...");
    e.target.style.pointerEvents = "none";
    const storageRef = firebaseStorage.ref(file.name);
    const collectionRef = firebaseFirestore.collection("images");
    let createdAt = new Date();

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setErr(error);
      },
      () => {
        storageRef.getDownloadURL().then((link) => {
          setUrl(link);
          collectionRef.add({ createdAt, url: link });
          setUploadStage("Completed");

          setTimeout(() => {
            document.querySelector(".upload").classList.add("fadeOut");
          }, 500);

          setTimeout(() => {
            setFile(null);
          }, 1000);
        });
      }
    );
  };

  return (
    <motion.div className="upload">
      <div className="output-message">
        {file && (
          <p className="file-name">
            Selected-file: <span>{file.name}</span>
          </p>
        )}

        {error && (
          <p className="error-message">
            Error: <span>{error}</span>
          </p>
        )}
      </div>
      <div className="upload-btn">
        {file && <button onClick={uploadHandler}>{uploadStage}</button>}
      </div>
      <motion.div
        className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: progress + "%" }}
      ></motion.div>
      {err && <p>{err}</p>}
    </motion.div>
  );
};

export default Upload;
