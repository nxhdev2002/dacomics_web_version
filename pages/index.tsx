import Head from "next/head";
import Layout from "@/components/Layout";
import PopularPost from "@/components/Home/Popular";
import { getPopularComic } from "@/libs/MangaDex";
import { useEffect, useState } from "react";
import { Comic } from "@/types/comic";
import Link from "next/link";
import axios from "axios";

const IndexPage = () => {
  const [posts, setPosts] = useState<Comic[]>([]);
  useEffect(() => {
    axios.get("/api/popular").then((res) => {
      if (res) setPosts(res.data);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Trang chủ</title>
      </Head>
      <Layout
        title={"Trang chủ"}
        headerRight={
          <Link href={"/search"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </Link>
        }
      >
        <PopularPost posts={posts} />
      </Layout>
    </>
  );
};

export default IndexPage;
