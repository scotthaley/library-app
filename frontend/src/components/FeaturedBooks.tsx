import { useQuery } from "@tanstack/react-query";
import { getFeaturedBooks } from "../api";
import { Link } from "react-router";

function FeaturedBooks() {
  const { data } = useQuery({
    queryFn: getFeaturedBooks,
    queryKey: ["featured-books"],
  });

  return (
    <div>
      <h3 className="text-lg font-bold">Featured Books</h3>
      {data && (
        <div className="grid grid-cols-4 gap-4 mt-6">
          {data.slice(0, 4).map((b, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col"
            >
              <div className="bg-gradient-to-b from-blue-600 to-cyan-600 h-[200px]"></div>
              <div className="p-4 grow flex flex-col">
                <h4 className="font-semibold grow">{b.name}</h4>
                <div className="mt-4">{b.author}</div>
                <div className="mt-4 text-right">
                  <Link to={`checkout/${b.id}`}>
                    <button>Checkout</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FeaturedBooks;
