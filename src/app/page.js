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
    <div className="flex h-screen justify-center items-center">
      <form className="bg-zinc-950 p-5" onSubmit={handleSubmit}>
        <h1 className="text-4xl text-center my-4">Upload a file</h1>

        <input
          className="bg-zinc-900 text-zinc-100 p-2 rounded block mb-2"
          type="file"
          onChange={handleChange}
        />

        <button
          className="bg-green-400 text-zinc-100 p-2 rounded block w-full disabled:opacity-50"
          disabled={!file}
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default HomePage;
