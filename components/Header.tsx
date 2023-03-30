import React from "react";
import Link from "next/link";

// định nghĩa kiểu props cho component Header
type HeaderProps = {
  title: string; // title là tiêu đề của header
};

// tạo component Header
const Header = ({ title }: HeaderProps) => {
  return (
    <header>
      <nav className="w-full bg-gray-800 p-4 font-normal text-white">
        {title}
      </nav>
    </header>
  );
};

export default Header;
