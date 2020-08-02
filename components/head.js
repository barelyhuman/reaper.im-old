import _Head from "next/head";

const Head = ({ children }) => {
  return (
    <>
      <_Head>
        <title>Blog | Reaper</title>
        <link rel="icon" href="logo.svg" />
        {children}
      </_Head>
    </>
  );
};

export default Head;
