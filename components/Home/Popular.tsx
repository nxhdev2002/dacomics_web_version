import { Comic } from "@/types/comic";
import BookCard from "../Comic/BookCard";

interface PopularPostParams {
  posts: Comic[];
}
const PopularPost = ({ posts }: PopularPostParams) => {
  return (
    <div className="md: container mx-auto">
      <h1 className="mb-4 text-2xl font-medium">Popular Books</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {posts.map((post: Comic) => {
          return <BookCard comic={post} key={post.id} />;
        })}
      </div>
    </div>
  );
};
export default PopularPost;
