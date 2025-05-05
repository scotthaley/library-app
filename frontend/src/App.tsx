import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./routes/Home";
import Checkout from "./routes/Checkout";
import MyBooks from "./routes/MyBooks";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/my-books" element={<MyBooks />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
