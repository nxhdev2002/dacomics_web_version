// import các module và components cần thiết
import Head from 'next/head'
import Layout from '@/components/Layout'

// tạo component IndexPage là trang chủ của ứng dụng
const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Trang chủ</title>
      </Head>
      <Layout>
        <h1>Xin chào!</h1>
        <p>Đây là trang chủ của ứng dụng của bạn.</p>
      </Layout>
    </>
  )
}

export default IndexPage
