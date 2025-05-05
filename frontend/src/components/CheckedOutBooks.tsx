import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMyBooks, returnBook } from "../api";
import BookCard from "./BookCard";
import { useCallback } from "react";

interface ICheckedOutBooksProps {
  card: string;
  pin: string;
}

function CheckedOutBooks({ card, pin }: ICheckedOutBooksProps) {
  const { data } = useQuery({
    queryFn: () => getMyBooks(card, pin),
    queryKey: ["my-books", card, pin],
  });

  const queryClient = useQueryClient();

  const handleReturnBook = useCallback(
    async (id: number) => {
      const response = await returnBook(id, card, pin);
      if (response.status === 200) {
        queryClient.invalidateQueries({ queryKey: ["my-books", card, pin] });
      } else {
        alert(`Recieved error: ${response.status}`);
      }
    },
    [card, pin],
  );

  return (
    <div>
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {data.map((b, i) => (
            <BookCard
              key={i}
              id={b.copy_id}
              name={b.name}
              author={b.author}
              dueDate={b.due_date}
              cta="Return"
              onCTA={handleReturnBook}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CheckedOutBooks;
