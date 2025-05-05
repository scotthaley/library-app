import { useQuery } from "@tanstack/react-query";
import { getFeaturedBooks } from "../api";
import BookCard from "./BookCard";

function FeaturedBooks() {
  const { data } = useQuery({
    queryFn: getFeaturedBooks,
    queryKey: ["featured-books"],
  });

  return (
    <div className="mx-4 lg:mx-0">
      <h3 className="text-lg font-bold">Featured Books</h3>
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {data.slice(0, 4).map((b, i) => (
            <BookCard
              key={i}
              id={b.id}
              name={b.name}
              author={b.author}
              cta="Checkout"
              ctaPath="checkout/"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FeaturedBooks;
