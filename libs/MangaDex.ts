import { chapter } from "@/types/chapter";
import { Comic } from "@/types/comic";
import instance from "./api";

export const getMangaById = async (id: string): Promise<Comic | null> => {
  try {
    let request = await instance.get(
      `/manga/${id}?includes[]=artist&includes[]=author&includes[]=cover_art`
    );
    let data = request.data;
    let thumbnail_name = data.data.relationships.filter(
      (obj: { type: string }) => obj.type === "cover_art"
    )[0].attributes.fileName;
    let author = data.data.relationships.filter(
      (obj: { type: string }) => obj.type === "author"
    )[0].attributes.name;
    let chapters = await getChapterById(id);
    return {
      id: id,
      name: data.data.attributes.title.en,
      thumbnail: `https://mangadex.org/covers/${id}/${thumbnail_name}.512.jpg`,
      author: author,
      description:
        typeof data.data.attributes.description.en === "undefined"
          ? "Không có mô tả về bộ truyện này"
          : data.data.attributes.description.en,
      numChapters: "99",
      chapters: chapters ? chapters : [],
    };
  } catch {
    return null;
  }
};

export const getChapterById = async (id: string): Promise<chapter[] | null> => {
  try {
    let request = await instance.get(
      `/manga/${id}/feed?limit=10&includes[]=scanlation_group&includes[]=user&order[volume]=desc&order[chapter]=desc&offset=0&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&contentRating[]=pornographic&translatedLanguage%5B%5D=en`
    );
    let data = request.data;
    let result: chapter[] = [];
    data.data.forEach((chap: any) => {
      result.push({
        id: chap.id,
        title: chap.attributes.title
          ? `Chapter ${chap.attributes.chapter} - ${chap.attributes.title}`
          : `Chapter ${chap.attributes.chapter}`,
        createdAt: chap.attributes.createdAt,
        updatedAt: chap.attributes.updatedAt,
      });
    });
    return result;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getPictureByChapterId = async (id: string): Promise<string[]> => {
  let request = await instance.get(`/at-home/server/${id}?forcePort443=false`);
  let data = request.data;
  let baseUrl = data.baseUrl;
  let result: string[] = [];
  data.chapter.data.forEach((picture: any) => {
    result.push(`${baseUrl}/data/${data.chapter.hash}/${picture}`);
  });
  return result;
};
