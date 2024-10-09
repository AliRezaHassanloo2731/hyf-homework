"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Notes() {
  const [data, setData] = useState({
    notetaker: "",
    noteId: "",
  });
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const router = useRouter();
  function handleClick() {
    router.push(
      `/notes/${data.noteId}?notetaker=${data.notetaker}`
    );
  }
  return (
    <>
      <main>
        <h1>My Notes</h1>
        <label> Notetaker</label>
        <input
          type="text"
          name="notetaker"
          id="notetaker"
        />
        <label> Note Id</label>
        <input type="text" name="noteId" value={data} />
      </main>

      <button onClick={handleClick}>Add Note</button>
    </>
  );
}
