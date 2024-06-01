import Link from "next/link";
import React from "react";
import CreatePost from "./CreatePost";

const PostsPage = async () => {
  const posts = await getPosts();
  return (
    <div>
      <h1>Posts</h1>
      {posts?.map((post) => {
        return <PostItem key={post.id} post={post}></PostItem>;
      })}
      <CreatePost></CreatePost>
    </div>
  );
};

async function getPosts() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/posts/records",
    {cache: "no-store"}
  );
  const data = await res.json();
  return data?.items as any[];
}

export default PostsPage;

export const PostItem = ({post}: any) => {
  const {id, title, created} = post || {};
  return (
    <Link href={"/posts/" + id}>
      <div>
        <h3>{title}</h3>
        <p>{created}</p>
      </div>
    </Link>
  );
};
