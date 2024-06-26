import Post from "@/components/Post";
import Link from "next/link";
import React from "react";

const Posts = async () => {
  const data = await getPosts();
  console.log(data);
  return (
    <div>
      <div style={{marginTop: "30px"}}>
        <Link href={"/posts/create-post"}>새로운 포스트 생성</Link>
      </div>
      {data.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}></Post>
        );
      })}
    </div>
  );
};

async function getPosts() {
  const res = await fetch("http://localhost:3001/posts", {cache: "no-store"});
  const data = await res.json();
  return data;
}

export default Posts;
