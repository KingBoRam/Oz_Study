"use client";

import {useRouter} from "next/navigation";
import React, {useState} from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleCreate = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({title, content}),
    });
    setTitle("");
    setContent("");
    router.push("/posts");
    router.refresh();
  };

  return (
    <form onSubmit={handleCreate}>
      <input
        type="text"
        name="title"
        id="titld"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}></input>
      <textarea
        name="content"
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}></textarea>
      <button type="submit">포스트 생성하기</button>
    </form>
  );
};

export default page;
