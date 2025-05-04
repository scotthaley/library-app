import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FeaturedBooks from "./components/FeaturedBooks";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col items-center">
        <div className="bg-blue-600 text-white py-4 px-8 shadow-lg w-full">
          <h1 className="text-lg">The Library</h1>
        </div>
        <div className="max-w-[1000px] w-full">
          <div className="my-16 bg-gradient-to-r from-violet-600 to-fuchsia-400 rounded-xl p-8">
            <h2 className="text-white text-2xl font-bold">
              Discover Your Next Adventure
            </h2>
          </div>
          <FeaturedBooks />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
