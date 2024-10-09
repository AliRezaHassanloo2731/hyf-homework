import Image from "next/image";
import FetchData from "./components/nasaApi";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FetchData />
      <ul>
        <li>
          <Link href="my-new-post">My New Post</Link>
        </li>
        <li>
          <Link href="another-post">Another Post</Link>
        </li>
      </ul>
    </div>
  );
}
