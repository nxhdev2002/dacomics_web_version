import Head from "next/head";
import Layout from "@/components/Layout";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Trang chủ</title>
      </Head>
      <Layout title={"Trang chủ"}>
        <h1>Xin chào!</h1>
        <p>Đây là trang chủ của ứng dụng của bạn.</p>
      </Layout>
    </>
  );
};

export default IndexPage;
