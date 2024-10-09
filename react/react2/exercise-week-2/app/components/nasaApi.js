"use client";

import { useEffect, useState } from "react";

const API_KEY = "BWwu25J88FDuPyMWRheREe70MKHObzBYb2N0Sgfu";

export default function FetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
        );
        const result = await res.json();
        setData(result); // Store fetched data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <p className="mx-60 text-3xl">Loading...</p>;
  }

  if (!data) {
    return (
      <p className="mx-60 text-3xl">No data available</p>
    );
  }

  return (
    <div className="mt-44">
      <p className="mx-60 text-3xl">{data.title}</p>
      <img
        src={data.url}
        alt={data.title}
        className="w-96 mx-60 rounded-lg outline-2"
      />
    </div>
  );
}
