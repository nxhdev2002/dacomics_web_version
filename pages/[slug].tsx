import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Image from "next/image";
import { Comic } from "@/types/comic";
import Layout from "@/components/Layout";
import ChapterList from "@/components/Comic/ChapterList";
import { getMangaById } from "@/libs/MangaDex";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";

interface BookDetailProps {
  book: Comic;
}

const BookDetail: React.FC<BookDetailProps> = ({ book }) => {
  return (
    <Layout title={book.name}>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:w-1/3">
            <Image
              src={book.thumbnail}
              alt={book.name}
              width={300}
              height={400}
            />
          </div>
          <div className="mt-4 md:ml-4 md:mt-0 md:w-2/3">
            <h2 className="text-3xl font-extrabold text-gray-900">
              {book.name}
            </h2>
            <p className="mt-2 text-sm text-gray-500">Tác giả: {book.author}</p>
            <p className="mt-2 text-gray-700">{book.description}</p>
            <p className="mt-2 text-gray-700">Số chương: {book.numChapters}</p>
          </div>
        </div>
        <div className="mt-12">
          <ChapterList chapters={book.chapters} />
        </div>
      </div>
    </Layout>
  );
};

export default function BookPage() {
  const [comic, setComic] = useState<Comic | null>();
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    console.log(slug);
    if (slug) {
      getMangaById(slug as string).then((res) => {
        setLoading(false);
        res ? setComic(res) : setComic(null);
      });
    }
    setLoading(true);
  }, [slug]);

  if (isLoading) return <p>Loading...</p>;
  if (!comic) return <p>No profile data</p>;
  return (
    <>
      <BookDetail book={comic} />
    </>
  );
}
