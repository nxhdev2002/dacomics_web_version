import { chapter } from "@/types/chapter";
import Link from "next/link";
import React from "react";

interface ChapterListProps {
  chapters: chapter[];
}

const ChapterList: React.FC<ChapterListProps> = ({ chapters }) => {
  return (
    <div className="mx-auto my-6 max-w-2xl">
      <h2 className="mb-2 text-lg font-medium">Chapters:</h2>
      <ul className="divide-y divide-gray-300 rounded-md border border-gray-300">
        {chapters.map((chapter) => (
          <li
            key={chapter.id}
            className="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
          >
            <div className="flex w-0 flex-1 items-center">
              <span className="ml-2 w-0 flex-1 truncate">{chapter.title}</span>
            </div>
            <div className="ml-4 flex-shrink-0">
              <Link href={`/chapter/${chapter.id}`}>Read</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChapterList;
