import { chapter } from "./chapter";

export interface Comic {
  id: string;
  name: string;
  thumbnail: string;
  author: string;
  description: string;
  numChapters: string;
  chapters: chapter[];
}
