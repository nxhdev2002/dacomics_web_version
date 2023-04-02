import { getMangaById, getPictureByChapterId } from "@/libs/MangaDex";
import { Comic } from "@/types/comic";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  if (req.query.id) {
    let chapterId = req.query.id;
    let pictures = await getPictureByChapterId(chapterId as string);
    res.status(200).json(pictures as string[]);
  }
}
