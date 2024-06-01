import Link from "next/link";
import React from "react";

const Post = ({id, title, content}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>포스트 번호 : {id}</p>
      <div>{content}</div>
      <Link href={"/posts/" + id}>상세페이지로 이동</Link>
    </div>
  );
};

export default Post;
