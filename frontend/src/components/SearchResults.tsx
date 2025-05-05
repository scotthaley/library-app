import { useQuery } from "@tanstack/react-query";
import { searchBooks } from "../api";
import BookCard from "./BookCard";

interface ISearchResultsProps {
  search: string;
}

function SearchResults({ search }: ISearchResultsProps) {
  const { data } = useQuery({
    queryFn: () => searchBooks(search),
    queryKey: ["search-books", search],
  });

  return (
    <div>
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {data.map((b, i) => (
            <BookCard
              key={i}
              id={b.id}
              name={b.name}
              author={b.author}
              cta="Checkout"
              ctaPath="/checkout/"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
