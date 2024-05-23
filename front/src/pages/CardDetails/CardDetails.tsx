import React from "react";
import { buttonVariants } from "@/components/ui/button";

interface CardDetailsType {
  imgProps: string;
  roomName: string;
  description: string;
  price: string;
  rating: number;
  comments: Array<{ user: string; comment: string }>;
}

const CardDetails: React.FC<CardDetailsType> = ({
  imgProps,
  roomName,
  description,
  price,
  rating,
  comments,
}) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          aria-hidden="true"
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.809a1 1 0 00.95.69h5.05c.969 0 1.371 1.24.588 1.81l-4.081 2.971a1 1 0 00-.364 1.118l1.563 4.809c.3.921-.755 1.688-1.54 1.118L10 14.347l-4.081 2.971c-.784.57-1.839-.197-1.54-1.118l1.562-4.809a1 1 0 00-.364-1.118L1.636 10.236c-.784-.57-.381-1.81.588-1.81h5.05a1 1 0 00.95-.69l1.562-4.809z"></path>
        </svg>,
      );
    }
    return stars;
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="w-full rounded-t-lg" src={imgProps} alt={roomName} />
        <div className="p-5">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {roomName}
          </h1>
          <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <p className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            {price}
          </p>
          <div className="flex items-center mb-4">
            {renderStars(rating)}
            <span className="ml-2 text-gray-700 dark:text-gray-400">
              ({rating} out of 5)
            </span>
          </div>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Comments
          </h2>
          <ul className="mb-4 space-y-4">
            {comments.map((comment, index) => (
              <li key={index} className="border-b border-gray-200 pb-2">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {comment.user}
                </p>
                <p className="text-gray-700 dark:text-gray-400">
                  {comment.comment}
                </p>
              </li>
            ))}
          </ul>
          <button className={buttonVariants({ variant: "default" })}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
