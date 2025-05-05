import { useCallback, useState } from "react";
import NavBar from "../components/NavBar";
import SearchResults from "../components/SearchResults";
import { useNavigate, useSearchParams } from "react-router";

function Search() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState(
    searchParams.get("query") || "",
  );

  const handleSearch = useCallback(() => {
    navigate(`/search?query=${searchInput}`);
  }, [searchInput]);

  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <div className="max-w-[1000px] w-full">
        <div className="my-16 bg-gradient-to-r from-violet-600 to-fuchsia-400 rounded-xl p-8">
          <h2 className="text-white text-2xl font-bold">
            Discover Your Next Adventure
          </h2>
          <div className="w-1/2 mt-6">
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
        </div>
        <SearchResults search={searchParams.get("query") || ""} />
      </div>
    </div>
  );
}

export default Search;
