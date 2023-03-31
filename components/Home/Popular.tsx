import BookCard from "../Comic/BookCard";

const PopularPost = () => {
  return (
    <div className="md: container mx-auto">
      <h1 className="mb-4 text-2xl font-medium">Popular Books</h1>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-5">
        <BookCard
          thumbnail="https://st.nettruyenvt.com/data/comics/32/vo-luyen-dinh-phong.jpg"
          title="The Great Gatsby"
        />
        <BookCard
          thumbnail="https://st.nettruyenvt.com/data/comics/32/vo-luyen-dinh-phong.jpg"
          title="To Kill a Mockingbird To Kill a Mockingbird To Kill a Mockingbird"
        />
        <BookCard
          thumbnail="https://st.nettruyenvt.com/data/comics/32/vo-luyen-dinh-phong.jpg"
          title="1984"
        />
        <BookCard
          thumbnail="https://st.nettruyenvt.com/data/comics/32/vo-luyen-dinh-phong.jpg"
          title="1984"
        />
        <BookCard
          thumbnail="https://st.nettruyenvt.com/data/comics/32/vo-luyen-dinh-phong.jpg"
          title="1984"
        />
        <BookCard
          thumbnail="https://st.nettruyenvt.com/data/comics/32/vo-luyen-dinh-phong.jpg"
          title="1984"
        />
      </div>
    </div>
  );
};
export default PopularPost;
