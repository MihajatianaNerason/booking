import CardUser from "./CardUser";
import NavUser from "./NavUser";
import Anchor from "../../components/Anchor";
import { useEffect, useState } from "react";
import Axios from "axios";

interface Comment {
  user: string;
  comment: string;
}
interface CardUserType {
  id: number;
  imgProps: string;
  roomName: string;
  description: string;
  price: number;
  rating: number;
  comments: Comment[];
}

export default function User() {
  const [data, setData] = useState<CardUserType[] | null>(null);

  useEffect(() => {
    Axios.get("http://localhost:8080/bedroom")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <NavUser />
      <div className="h-full flex flex-wrap justify-around items-center mt-[80px]">
        {data ? (
          data.map((index, key) => {
            return (
              <CardUser
                key={key}
                id={index.id}
                imgProps={index.imgProps}
                roomName={index.roomName}
                description={index.description}
                price={index.price}
                rating={index.rating}
                comments={index.comments}
              />
            );
          })
        ) : (
          <h3 className="bg-red-400 w-full text-center text-xl">
            Pas de data :(
          </h3>
        )}
      </div>
      <Anchor />
    </>
  );
}
