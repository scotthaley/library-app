import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getBookById } from "../api";

function Checkout() {
  let { id } = useParams();
  const { data } = useQuery({
    queryFn: () => getBookById(id ? parseInt(id) : 0),
    queryKey: ["get-book", id],
  });

  return (
    <div className="flex flex-col items-center">
      <div className="bg-blue-600 text-white py-4 px-8 shadow-lg w-full">
        <h1 className="text-lg">The Library</h1>
      </div>
      <div className="max-w-[1000px] w-full">
        <div className="my-16 bg-gradient-to-r from-violet-600 to-fuchsia-400 rounded-xl p-8">
          <h2 className="text-white text-2xl font-bold">Checkout</h2>
        </div>
        {data && (
          <div className="bg-white rounded-xl grid grid-cols-2 p-4">
            <div>
              <div className="flex flex-col">
                <div className="flex">
                  <div className="bg-gradient-to-b from-blue-600 to-cyan-600 h-[200px] w-[150px] rounded-lg"></div>
                  <div className="ml-4">
                    <h4 className="font-bold text-xl">{data.name}</h4>
                    <div className="mt-2">by {data.author}</div>
                    <div className="text-sm bg-green-200 rounded-md px-2 py-1 inline-block mt-6">
                      <b>{data.count}</b> Copies Available
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="font-bold">Book Information</div>
                  <div className="flex">
                    <div className="grow">
                      <div className="mt-6">
                        <div>ISBN:</div>
                        <div>{data.isbn}</div>
                      </div>
                      <div className="mt-6">
                        <div>Genre:</div>
                        <div>{data.genre.join(", ")}</div>
                      </div>
                    </div>
                    <div className="grow">
                      <div className="mt-6">
                        <div>Publisher:</div>
                        <div>{data.publisher}</div>
                      </div>
                      <div className="mt-6">
                        <div>Pages:</div>
                        <div>{data.pages}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-md">Checkout Details</h4>
              <form>
                <label htmlFor="checkout-date">Checkout Date</label>
                <input
                  id="checkout-date"
                  readOnly
                  type="text"
                  value="05/03/2025"
                />
                <label htmlFor="due-date">Due Date</label>
                <input id="due-date" readOnly type="text" value="05/23/2025" />
                <label htmlFor="library-card">Library Card Number</label>
                <input id="library-card" type="text" placeholder="12345" />
                <label htmlFor="pin">Pin Number</label>
                <input id="pin" type="text" placeholder="123" />
                <button type="submit" className="mt-8 w-full">
                  Confirm Checkout
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
