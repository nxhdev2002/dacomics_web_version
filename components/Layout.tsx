import React from "react";

// import các component cần thiết
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// định nghĩa kiểu props cho component Layout
type LayoutProps = {
  title: string;
  children: React.ReactNode; // children là các component con được truyền vào Layout
};

// tạo component Layout
const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Header title={title} />
      <main className="py-20">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
