
import ImageSearchresults from "@/components/ImageSearchresults";
import Link from "next/link";
import React from "react";

async function ImageSearchpage({ searchParams }) {
  const startIndex = searchParams.start || 1;
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
  );
  if (!response.ok) throw new Error("Something went wrong");
  const data = await response.json();
  const results = data.items;
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          No results found for {searchParams.searchTerm}
        </h1>
        <p className="text-lg">
          Try searching with something else, or{" "}
          <Link href="/" className="text-blue-500 underline italic">
            go to home
          </Link>
        </p>
      </div>
    );
  }
  return (
    <div>{results && <ImageSearchresults results={data}/>}</div>
  );
}

export default ImageSearchpage;
