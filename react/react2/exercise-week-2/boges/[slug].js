import { useRouter } from "next/router";
import { useEffect } from "react";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const title = slug ? slug.replace(/-/g, " ") : "";

  return (
    <div>
      <h1>
        {title
          ? title.charAt(0).toUpperCase() + title.slice(1)
          : "Loading..."}
      </h1>
    </div>
  );
}
