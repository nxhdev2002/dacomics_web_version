import { Comic } from "@/types/comic";
import { FC } from "react";

import Image from "next/image";

type BookCardProps = {
  thumbnail: string;
  title: string;
};

const BookCard: React.FC<BookCardProps> = ({ thumbnail, title }) => {
  return (
    <div className="relative max-w-xs overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="relative">
        <Image
          src={thumbnail}
          alt={`Thumbnail of ${title}`}
          width={300}
          height={450}
        />
      </div>
      <div className="flex flex-col p-4">
        <h3 className="mt-2 line-clamp-2 self-center overflow-ellipsis text-lg font-medium text-gray-900">
          {title}
        </h3>
        <p className="absolute bottom-0 text-gray-700">1</p>
      </div>
    </div>
  );
};

export default BookCard;
