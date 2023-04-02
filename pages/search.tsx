import React, { useState } from "react";
import Layout from "@/components/Layout";
import { getMangaByKeyWord } from "@/libs/MangaDex";
import { Comic } from "@/types/comic";
import BookCard from "@/components/Comic/BookCard";
import axios from "axios";

const Search = () => {
  const [results, setResults] = useState<Comic[] | null>(null);
  const handleSearch = async (event: { target: { value: string } }) => {
    const response = await axios.get(
      "/api/search?keyword=" + event.target.value
    );
    setResults(response.data);
  };

  return (
    <Layout title={"Tìm kiếm"}>
      <div className="md: container mx-auto flex flex-col items-center">
        <div className="mb-4">
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Nhập tên truyện cần tìm"
            className="mr-0 w-80 rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-800"
            autoFocus
          />
        </div>
        {results ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {results.map((result) => (
              <BookCard comic={result} key={result.id} />
            ))}
          </div>
        ) : (
          <p className="text-gray-700">Chưa có kết quả tìm kiếm</p>
        )}
      </div>
    </Layout>
  );
};

export default Search;
