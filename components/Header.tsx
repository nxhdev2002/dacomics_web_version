import React from 'react'
import Link from 'next/link'

// định nghĩa kiểu props cho component Header
type HeaderProps = {
  title: string // title là tiêu đề của header
}

// tạo component Header
const Header = ({ title }: HeaderProps) => {
  return (
    <header>
      <nav>
        <Link href="/">
          {title}
        </Link>
      </nav>
    </header>
  )
}

export default Header
