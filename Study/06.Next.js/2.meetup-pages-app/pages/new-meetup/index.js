import React from "react";
import Head from "next/head";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import {useRouter} from "next/router";

const NewMeetup = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>모임 생성하기</title>
      </Head>
      <NewMeetupForm router={router}></NewMeetupForm>
    </>
  );
};

export default NewMeetup;
