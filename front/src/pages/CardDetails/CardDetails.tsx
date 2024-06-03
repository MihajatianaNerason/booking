import { buttonVariants } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import NavUser from "../User/NavUser";

interface Comment {
  user: string;
  comment: string;
}

interface BedroomData {
  imgProps: string;
  roomName: string;
  description: string;
  price: string;
  rating: number;
  comments: Comment[];
}

export default function CardDetails() {
  const { id } = useParams();
  const [data, setData] = useState<BedroomData | null>(null);

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

  useEffect(() => {
    Axios.get(`http://localhost:8080/bedroom/${id}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <>
      <NavUser />

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-[80px]">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Bedroom image
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Rate
            </th>
            <th scope="col" className="px-6 py-3">
              <button className={buttonVariants({ variant: "default" })}>
                Book Now
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                src={`/${data?.imgProps}`}
                alt={data?.roomName}
                className="w-60"
              />
            </th>
            <td className="px-6 py-4">{data?.roomName}</td>
            <td className="px-6 py-4">{data?.description}</td>
            <td className="px-6 py-4">{data?.price}</td>
            <td className="px-6 py-4">
              <div className="flex items-center mb-4">
                {data && renderStars(data.rating)}
                {data && (
                  <span className="ml-2 text-gray-700 dark:text-gray-400">
                    ({data.rating} out of 5)
                  </span>
                )}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <ul className="mb-4 space-y-4">
        {data?.comments.map((comment, index) => (
          <li
            key={index}
            className="border border-gray-300 rounded-lg shadow-sm p-4 bg-white dark:bg-gray-800 dark:border-gray-700"
          >
            <div className=" flex items-center mb-2">
              <div className="flex-shrink-0 mr-3">
                <svg
                  className="w-8 h-8 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 100 20A10 10 0 0010 0zm0 3a3 3 0 110 6 3 3 0 010-6zm0 14c-3.866 0-7-3.134-7-7 0-.221.015-.439.042-.654C4.178 10.835 6.517 12 10 12c3.482 0 5.822-1.165 6.958-2.654.028.215.042.433.042.654 0 3.866-3.134 7-7 7z"></path>
                </svg>
              </div>
              <p className="font-semibold text-gray-900 dark:text-white">
                {comment.user}
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-400">
              {comment.comment}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
