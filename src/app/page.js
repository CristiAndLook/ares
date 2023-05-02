"use client";
import { useState } from "react";
const HomePage = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      console.log(res);

      if (res.ok) {
        console.log("File uploaded successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Upload file</label>

        <input type="file" onChange={handleChange} />

        <button>Upload</button>
      </form>
    </div>
  );
};

export default HomePage;
