import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

export default function CardUser({
  id,
  imgProps,
  roomName,
  description,
}: CardUserType) {
  return (
    <div className="mt-4 mb-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-md hover:shadow-green-300 flex flex-col justify-between">
      <img className="rounded-t-lg" src={imgProps} alt={roomName} />
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {roomName}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Link
          to={`/card-details/${id}`}
          className={buttonVariants({ variant: "default" })}
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
