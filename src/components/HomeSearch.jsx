"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

function HomeSearch() {
  const [searchInput, setSearchInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    router.push(`search/web?searchTerm=${searchInput}`);
  };

  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const response = await fetch(
      `https://random-word-api.vercel.app/api?words=1`
    )
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full mt-5 mx-auto max-w-[90%] border border-gray-200 rounded-full px-5 py-3 hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row sm:space-x-4 mt-8">
        <button
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-200 hover:shadow-md transition-shadow w-36 h-10"
          onClick={handleSubmit}
        >
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-200 hover:shadow-md transition-shadow w-36 h-10 disabled:opacity-50 disabled:shadow-sm"
          onClick={randomSearch}
        >
          {randomSearchLoading ? "Loading..." : "I am Feeling Lucky"}
        </button>
      </div>
    </>
  );
}

export default HomeSearch;
