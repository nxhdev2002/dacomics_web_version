import { getMangaById } from "@/libs/MangaDex";
import { Comic } from "@/types/comic";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Comic>
) {
  if (req.query.id) {
    let comicId = req.query.id;
    let comic = await getMangaById(comicId as string);
    res.status(200).json(comic as Comic);
  }
}
