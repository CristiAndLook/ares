"use client";
import { useState } from "react";
const HomePage = () => {
  const [file, setFile] = useState(null);

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          if (!file) return;

          const form = new FormData();
          form.set("file", file);

          const res = await fetch("/api/upload", {
            method: "POST",
            body: form,
          });
          const data = await res.json();
          console.log(data);
        }}
      >
        <label>Upload file</label>

        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />

        <button>Upload</button>
      </form>
    </div>
  );
};

export default HomePage;
