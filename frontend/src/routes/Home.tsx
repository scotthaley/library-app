import FeaturedBooks from "../components/FeaturedBooks";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <div className="max-w-[1000px] w-full">
        <div className="my-16 bg-gradient-to-r from-violet-600 to-fuchsia-400 rounded-xl p-8">
          <h2 className="text-white text-2xl font-bold">
            Discover Your Next Adventure
          </h2>
        </div>
        <FeaturedBooks />
      </div>
    </div>
  );
}

export default Home;
