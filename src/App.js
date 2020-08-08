import React, { useState } from "react";
import Nav from "./components/Nav";
import { Title } from "./components/Title";
import { UploadForm } from "./components/UploadForm";
import { ImageGrid } from "./components/ImageGrid";

function App() {
  const [url, setUrl] = useState(null);

  return (
    <div className="App">
      <Nav />
      <Title />
      <UploadForm setUrl={setUrl} />
      <ImageGrid url={url} />
    </div>
  );
}

export default App;
