import dayjs from "dayjs";
import { Link } from "react-router";

interface IBookCardProps {
  name: string;
  author: string;
  id: number;
  cta: string;
  ctaPath?: string;
  onCTA?: (id: number) => void;
  dueDate?: string;
}

function BookCard({
  name,
  author,
  id,
  cta,
  ctaPath,
  onCTA,
  dueDate,
}: IBookCardProps) {
  return (
    <div className="flex justify-center" data-testid="book-card">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col w-[240px]">
        <div className="bg-gradient-to-b from-blue-600 to-cyan-600 h-[200px]"></div>
        <div className="p-4 grow flex flex-col">
          <h4 className="font-semibold grow">{name}</h4>
          <div className="mt-4">{author}</div>
          {dueDate && (
            <div className="mt-4">
              Due: {dayjs(dueDate).format("MM/DD/YYYY")}
            </div>
          )}
          <div className="mt-4 text-right">
            {ctaPath && (
              <Link to={`${ctaPath}${id}`}>
                <button>{cta}</button>
              </Link>
            )}
            {onCTA && <button onClick={() => onCTA(id)}>{cta}</button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
