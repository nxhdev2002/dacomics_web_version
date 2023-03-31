import { Comic } from "@/types/comic";
import instance from "./api";

export const getMangaById = async (id: string): Promise<Comic | null> => {
  try {
    let data = await instance.get(
      `/manga/${id}?includes[]=artist&includes[]=author&includes[]=cover_art`
    );
    data = data.data;
    return {
      id: id,
      name: data.data.attributes.title.en,
      thumbnail: "/",
      author: "Hoang DZ",
      description:
        typeof data.data.attributes.description.en === "undefined"
          ? "Không có mô tả về bộ truyện này"
          : data.data.attributes.description.en,
      numChapters: "99",
      chapters: [],
    };
  } catch {
    return null;
  }
};
