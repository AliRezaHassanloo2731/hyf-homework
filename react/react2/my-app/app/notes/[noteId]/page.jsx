"use client";
import {
  usePathName,
  useSearchParams,
} from "next/navigation";

export default function Note({ params }) {
  const path = usePathName;
  const query = useSearchParams;
  // const allQuery = Object.fromEntries(query.entries());
  return (
    <main>
      <h2>Current Path: {path}</h2>
      <p>{JSON.stringify(params)}</p>

      {/* <p>{query.get("notetaker")}</p> */}
    </main>
  );
}
