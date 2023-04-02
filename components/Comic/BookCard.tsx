import { Comic } from "@/types/comic";
import { toBase64, convertImage } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";

type BookCardProps = {
  comic: Comic;
};

const BookCard: React.FC<BookCardProps> = ({ comic }) => {
  return (
    <div className="relative max-w-xs overflow-hidden rounded-lg bg-white shadow-lg">
      <Link href={"/comic/" + comic.id}>
        <div className="relative">
          <Image
            src={comic.thumbnail}
            alt={`Thumbnail of ${comic.name}`}
            width={300}
            height={450}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              convertImage(700, 475)
            )}`}
          />
        </div>
        <div className="flex flex-col p-4">
          <h3 className="mt-2 line-clamp-2 self-center overflow-ellipsis text-center text-lg font-medium text-gray-900">
            {comic.name}
          </h3>
          <p className="-p-4 absolute bottom-0 w-3/4 text-center text-gray-700">
            {comic.author}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
