import { Link } from "react-router";

function NavBar() {
  return (
    <div className="bg-blue-600 text-white py-4 px-8 shadow-lg w-full">
      <Link to="/">
        <h1 className="text-lg text-white">The Library</h1>
      </Link>
    </div>
  );
}

export default NavBar;
