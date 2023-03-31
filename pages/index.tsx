import Head from "next/head";
import Layout from "@/components/Layout";
import Comic from "@/components/Comic/BookCard";
import BookCard from "@/components/Comic/BookCard";
import PopularPost from "@/components/Home/Popular";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Trang chủ</title>
      </Head>
      <Layout title={"Trang chủ"}>
        <PopularPost />
      </Layout>
    </>
  );
};

export default IndexPage;
