const API_KEY = "BWwu25J88FDuPyMWRheREe70MKHObzBYb2N0Sgfu";
import Image from "next/image";
export default async function NasaApiiPicture() {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  );
  const data = await res.json();

  return (
    <div>
      <p>{data.title}</p>
      <img src={data.url} alt={data.title} />;
    </div>
  );
}
