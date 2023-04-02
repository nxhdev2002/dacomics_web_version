import Image from "next/image";
import { Comic } from "@/types/comic";
import Layout from "@/components/Layout";
import ChapterList from "@/components/Comic/ChapterList";
import {
  getChapterById,
  getMangaById,
  getPictureByChapterId,
} from "@/libs/MangaDex";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { convertImage, toBase64 } from "@/utils/helpers";
import axios from "axios";
interface BookDetailProps {
  book: Comic;
}

const BookDetail: React.FC<BookDetailProps> = ({ book }) => {
  return (
    <>
      <Head>
        <title>{book.name}</title>
      </Head>
      <Layout title={book.name}>
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:w-1/3">
              <Image
                src={book.thumbnail}
                alt={book.name}
                width={300}
                height={400}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  convertImage(700, 475)
                )}`}
              />
            </div>
            <div className="mt-4 md:ml-4 md:mt-0 md:w-2/3">
              <h2 className="text-3xl font-extrabold text-gray-900">
                {book.name}
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Tác giả: {book.author}
              </p>
              <p className="mt-2 text-gray-700">{book.description}</p>
              <p className="mt-2 text-gray-700">
                Số chương: {book.numChapters}
              </p>
              <div className="flex gap-4">
                <button className="flex items-center justify-center rounded bg-gradient-to-r from-slate-900 to-slate-700 px-4 py-2 font-bold text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Đọc từ đầu</span>
                </button>

                <button className="flex items-center justify-center rounded bg-gradient-to-b from-slate-500 to-orange-500 px-4 py-2 font-bold text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                  <span>Đọc tiếp</span>
                </button>

                <button className="flex items-center justify-center rounded bg-gradient-to-b from-slate-500 to-blue-500 px-4 py-2 font-bold text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                  <span>Lưu truyện</span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <ChapterList chapters={book.chapters} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default function BookPage() {
  const [images, setImages] = useState<string[] | null>([]);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    setLoading(true);
    if (slug) {
      axios.get("/api/picture?id=" + (slug as string)).then((res) => {
        setImages(res.data);
        setLoading(false);
      });
    }
  }, [slug]);

  if (isLoading) return <p>Loading...</p>;
  if (!images) return <p>No profile data</p>;
  return (
    <>
      <Layout title={"Đọc truyện"}>
        <div className="container relative mx-auto overflow-scroll md:max-w-lg">
          <div className="relative">
            {images.map((val, i) => {
              return (
                <div className="h-full w-full">
                  <Image
                    src={val}
                    width={200}
                    height={160}
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    style={{ height: "100%", width: "100%" }} //The point is right there!
                    alt={"Picture for " + i}
                    key={i}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}
