import {
  getMangaById,
  getPictureByChapterId,
  getPopularComic,
} from "@/libs/MangaDex";
import { Comic } from "@/types/comic";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Comic[]>
) {
  let popular = await getPopularComic();
  res.status(200).json(popular as Comic[]);
}
