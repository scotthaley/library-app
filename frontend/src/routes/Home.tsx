import { useCallback, useState } from "react";
import FeaturedBooks from "../components/FeaturedBooks";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router";
import PurpleBar from "../components/PurpleBar";

function Home() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = useCallback(() => {
    navigate(`/search?query=${searchInput}`);
  }, [searchInput]);

  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <div className="max-w-[1000px] w-full">
        <PurpleBar title="Discover Your Next Adventure">
          <div className="md:w-1/2 mt-6">
            <form className="flex items-center" action={handleSearch}>
              <input
                className="bg-white"
                type="text"
                placeholder="Title, Keyword, or ISBN"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button className="ml-4 mt-2" type="submit">
                Search
              </button>
            </form>
          </div>
        </PurpleBar>
        <FeaturedBooks />
      </div>
    </div>
  );
}

export default Home;
