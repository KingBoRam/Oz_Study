"use client";

import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";

const page = ({params}) => {
  const [data, setData] = useState({});
  const [update, setUpdate] = useState(false);

  const [title, setTitle] = useState(data.title);
  const [content, setContent] = useState(data.content);

  const router = useRouter();

  useEffect(() => {
    const getPost = async () => {
      const res = await fetch(`http://localhost:3001/posts/${params.slug}`, {});
      const data = await res.json();
      setData(data);
      setTitle(data.title);
      setContent(data.content);
    };
    getPost();
  }, [update]);

  const handleDelete = async () => {
    await fetch("http://localhost:3001/posts/" + params.slug, {
      method: "DELETE",
    });
    router.push("/posts");
    router.refresh();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3001/posts/" + params.slug, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        ...data,
        title,
        content,
      }),
    });
    setUpdate(false);
    router.refresh();
  };

  return (
    <>
      {!update ? (
        <>
          <h1>{data.title}</h1>
          <p>포스트 번호 : {data.id}</p>
          <div>{data.content}</div>
          <button onClick={handleDelete}>포스트 삭제</button>
          <button
            onClick={() => {
              setUpdate(true);
            }}>
            포스트 수정
          </button>
        </>
      ) : (
        <form onSubmit={handleUpdate}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}></input>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}></textarea>
          <button onClick={() => setUpdate(false)}>취소</button>
          <button type="submit">수정하기</button>
        </form>
      )}
    </>
  );
};

export default page;
