import {
  getMangaById,
  getMangaByKeyWord,
  getPictureByChapterId,
} from "@/libs/MangaDex";
import { Comic } from "@/types/comic";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Comic[]>
) {
  if (req.query.keyword) {
    let keyword = req.query.keyword;
    let manga = await getMangaByKeyWord(keyword as string);
    res.status(200).json(manga as Comic[]);
  }
}
