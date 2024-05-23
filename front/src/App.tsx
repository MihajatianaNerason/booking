import { Route, Routes } from "react-router-dom";
import "./App.css";
import User from "./pages/User/User";
import CardDetails from "./pages/CardDetails/CardDetails";

export default function App() {
  const cardDetailsProps = {
    imgProps: "img/2.jpg",
    roomName: "Deluxe Room",
    description: "A luxurious room with all amenities.",
    price: "$299 per night",
    rating: 3.5,
    comments: [
      { user: "Alice", comment: "Great room, very comfortable!" },
      { user: "Bob", comment: "Had a wonderful stay, highly recommend!" },
    ],
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<User />} />
        <Route
          path="/card-details/:id"
          element={<CardDetails {...cardDetailsProps} />}
        />
      </Routes>
    </>
  );
}
