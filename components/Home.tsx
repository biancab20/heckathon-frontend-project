import {IBookData} from "../utils/interfaces";
import BookCard from "./BookCard";
import Image from "next/image";
import { prisma } from "../src/lib/prisma";


const books = await prisma.book.findMany();
  const members = await prisma.member.findMany();

export default function Home() {
    return (
        <div className={`flex flex-row justify-between gap-x-4`}>
            <div className={`flex flex-col`}>
                <h1 className={`text-5xl font-bold`}>
                    My Bookclub
                </h1>
                <p className={`mt-4 text-gray-700 flex`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="size-6 mx-2">
                        <path fillRule="evenodd"
                              d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                              clipRule="evenodd"/>
                        <path
                            d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z"/>
                    </svg>
                    12 Members
                </p>
                <div className={`mt-32`}>
                    <div className={`text-2xl uppercase font-thin`}>
                        Club description
                    </div>
                    <div className={`mt-4 text-wrap`}>
                        This is the description of the book club. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
            <div className={`flex flex-col`}>
                <h1 className={`text-5xl font-bold`}>
                    My Bookclub
                </h1>
                <p className={`mt-4 text-gray-700 flex`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="size-6 mx-2">
                        <path fillRule="evenodd"
                              d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                              clipRule="evenodd"/>
                        <path
                            d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z"/>
                    </svg>
                    12 Members
                </p>
                <ul className="space-y-4 w-full">
          {books.map((book) => (
                <div>
              {book.image && (
                <Image
                  src={book.image}
                  alt={book.name}
                  width={150}
                  height={100}
                  className="rounded"
                  unoptimized // remove if domain is whitelisted in next.config.js
                />
              )}
              
                <h2 className="font-semibold">{book.name}</h2>
                <p className="text-sm text-gray-600">by {book.author}</p>
                <p className="text-xs text-gray-500">{book.status}</p>
              </div>
          ))}
        </ul>

            </div>
        </div>
    );
}