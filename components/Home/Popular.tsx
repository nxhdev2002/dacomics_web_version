import BookCard from "../Comic/BookCard";

const PopularPost = () => {
  return (
    <div className="md: container mx-auto">
      <h1 className="mb-4 text-2xl font-medium">Popular Books</h1>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-5">
        <BookCard
          thumbnail="https://st.nettruyenvt.com/data/comics/32/vo-luyen-dinh-phong.jpg"
          title="The Great Gatsby"
          url={"http://localhost:3000/af6f72d6-af16-4974-ac72-c8ca8cb6db58"}
        />
        <BookCard
          thumbnail="https://st.nettruyenvt.com/data/comics/32/vo-luyen-dinh-phong.jpg"
          title="To Kill a Mockingbird To Kill a Mockingbird To Kill a Mockingbird"
          url={"http://localhost:3000/af6f72d6-af16-4974-ac72-c8ca8cb6db58"}
        />
        <BookCard
          thumbnail="https://st.nettruyenvt.com/data/comics/32/vo-luyen-dinh-phong.jpg"
          title="1984"
          url={"http://localhost:3000/af6f72d6-af16-4974-ac72-c8ca8cb6db58"}
        />
        <BookCard
          thumbnail="https://st.nettruyenvt.com/data/comics/32/vo-luyen-dinh-phong.jpg"
          title="1984"
          url={"http://localhost:3000/af6f72d6-af16-4974-ac72-c8ca8cb6db58"}
        />
        <BookCard
          thumbnail="https://st.nettruyenvt.com/data/comics/32/vo-luyen-dinh-phong.jpg"
          title="1984"
          url={"http://localhost:3000/af6f72d6-af16-4974-ac72-c8ca8cb6db58"}
        />
        <BookCard
          thumbnail="https://st.nettruyenvt.com/data/comics/32/vo-luyen-dinh-phong.jpg"
          title="1984"
          url={"http://localhost:3000/af6f72d6-af16-4974-ac72-c8ca8cb6db58"}
        />
      </div>
    </div>
  );
};
export default PopularPost;
