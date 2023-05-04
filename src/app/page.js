"use client";
import { useState } from "react";
import Image from "next/image";

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
      <div className="bg-zinc-950 p-5">
        <h1 className="text-4xl text-center my-4">Upload a file</h1>
        <form onSubmit={handleSubmit}>
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

        {file && (
          <Image
            width={250}
            height={250}
            className="w-64 h-64 object-cover mx-auto"
            src={URL.createObjectURL(file)}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
