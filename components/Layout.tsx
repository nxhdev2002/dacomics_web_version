import React from 'react'

// import các component cần thiết
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// định nghĩa kiểu props cho component Layout
type LayoutProps = {
  children: React.ReactNode // children là các component con được truyền vào Layout
}

// tạo component Layout
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header title={'headr'} />
        <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
