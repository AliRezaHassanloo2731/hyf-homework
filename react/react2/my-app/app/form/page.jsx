"use client";
import { useRef } from "react";

export default function SubmitNote() {
  const formRef = useRef({
    title: null,
    content: null,
    authpr: null,
    date: null,
  });

  const clickTitle = () => {
    formRef.current.title.focus();
  };

  return (
    <form>
      <h1>Take a Note</h1>
      <label onClick={clickTitle}>Note Title: </label>
      <input
        type="text"
        name="title"
        id="title"
        ref={formRef.current.title}
      />
      <br className="formbr" />
      <label>Note Content: </label>
      <textarea
        type="text"
        name="content"
        id="content"
        rows={10}
        cols={50}
      />
      <br className="formbr" />
      <label>Note Author: </label>
      <input type="text" name="author" id="author" />
      <br className="formbr" />
      <label htmlFor="date">Note Date: </label>
      <input type="date" name="date" id="date" />
      <br className="formbr" />
      <button type="submit">Submit Note</button>
    </form>
  );
}
