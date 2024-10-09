const API_KEY = "BWwu25J88FDuPyMWRheREe70MKHObzBYb2N0Sgfu";
import Image from "next/image";
export default async function NasaApiiPicture() {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  );
  const data = await res.json();

  return (
    <div>
      <p className="mx-60 text-3xl">{data.title}</p>
      <img
        src={data.url}
        alt={data.title}
        className="w-96 mx-60 rounded-lg outline-2"
      />
    </div>
  );
}
