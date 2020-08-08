import React, { useState } from "react";
import Upload from "./Upload";
// import { motion } from "framer-motion";

export const UploadForm = ({ setUrl }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const uploadHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (
      selectedFile &&
      (selectedFile.type === "image/png" ||
        selectedFile.type === "image/jpg" ||
        selectedFile.type === "image/jpeg")
    ) {
      setFile(selectedFile);
      setError(null);
    } else {
      setError("please select a valid image file (jpg/jpeg or png).");
      setFile(null);
    }
  };

  return (
    <div className="upload-form-wrapper">
      <p>Upload Your Image</p>
      <form action="" className="upload-form">
        <label>
          <input type="file" onChange={uploadHandler} />
          <span>+</span>
        </label>
      </form>
      {file && (
        <Upload file={file} setFile={setFile} error={error} setUrl={setUrl} />
      )}
    </div>
  );
};
