import { Link } from "react-router";

function NavBar() {
  return (
    <div className="bg-blue-600 text-white py-4 px-8 shadow-lg w-full">
      <div className="flex">
        <div className="grow">
          <Link to="/">
            <h1 className="text-lg text-white">The Library</h1>
          </Link>
        </div>
        <div>
          <Link to="/my-books">
            <span className="text-lg text-white">My Books</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
