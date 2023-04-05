import React from "react";

// định nghĩa kiểu props cho component Header
type HeaderProps = {
  title: string; // title là tiêu đề của header
  components?: React.ReactNode;
};

// tạo component Header
const Header = ({ title, components }: HeaderProps) => {
  return (
    <header className="fixed top-0 z-10 w-full">
      <nav className="flex w-full justify-between bg-gray-800 p-4 font-normal text-white">
        <h1 className="overflow-ellipsis">{title}</h1>
        {components}
      </nav>
    </header>
  );
};

export default Header;
