"use client";

import { useSearchParams } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();

  const search = searchParams.get("ref");

  // This will not be logged on the server when using static rendering
  console.log(search);

  return search;
}
