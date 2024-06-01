import Link from "next/link";
import React from "react";

const Layout = () => {
  return (
    <>
      <Link style={{margin: "5px"}} href={"/"}>
        홈페이지
      </Link>
      <Link style={{margin: "5px"}} href={"/posts"}>
        포스트목록
      </Link>
    </>
  );
};

export default Layout;
