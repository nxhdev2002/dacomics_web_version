import Head from "next/head";
import Layout from "@/components/Layout";
import PopularPost from "@/components/Home/Popular";
import { getPopularComic } from "@/libs/MangaDex";
import { useEffect, useState } from "react";
import { Comic } from "@/types/comic";

const IndexPage = () => {
  const [posts, setPosts] = useState<Comic[]>([]);
  useEffect(() => {
    getPopularComic().then((res) => {
      if (res) setPosts(res);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Trang chủ</title>
      </Head>
      <Layout title={"Trang chủ"}>
        <PopularPost posts={posts} />
      </Layout>
    </>
  );
};

export default IndexPage;
