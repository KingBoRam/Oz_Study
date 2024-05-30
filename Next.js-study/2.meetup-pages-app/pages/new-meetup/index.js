import React from "react";
import Head from "next/head";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";

const NewMeetup = () => {
  return (
    <>
      <Head>
        <title>모임 생성하기</title>
      </Head>
      <NewMeetupForm></NewMeetupForm>
    </>
  );
};

export default NewMeetup;
