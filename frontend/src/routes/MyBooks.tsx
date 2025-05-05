import { useState } from "react";
import CheckedOutBooks from "../components/CheckedOutBooks";
import NavBar from "../components/NavBar";
import PurpleBar from "../components/PurpleBar";

function MyBooks() {
  const [card, setCard] = useState("");
  const [pin, setPin] = useState("");

  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <div className="max-w-[1000px] w-full">
        <PurpleBar title="Here's Your Checked Out Books">
          <div className="grid grid-cols-2 gap-4">
            <input
              className="bg-white"
              type="text"
              placeholder="Card (12345)"
              value={card}
              onChange={(e) => setCard(e.target.value)}
            />
            <input
              className="bg-white"
              type="text"
              placeholder="Pin (678)"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
          </div>
        </PurpleBar>
        <CheckedOutBooks card={card} pin={pin} />
      </div>
    </div>
  );
}

export default MyBooks;
