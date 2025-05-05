import { Link } from "react-router";

interface IBookCardProps {
  name: string;
  author: string;
  id: number;
  cta: string;
  ctaPath?: string;
  onCTA?: (id: number) => void;
}

function BookCard({ name, author, id, cta, ctaPath, onCTA }: IBookCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col">
      <div className="bg-gradient-to-b from-blue-600 to-cyan-600 h-[200px]"></div>
      <div className="p-4 grow flex flex-col">
        <h4 className="font-semibold grow">{name}</h4>
        <div className="mt-4">{author}</div>
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
  );
}

export default BookCard;
