"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "./themeonte";

export default function Home() {
  const useTheme = useContext(ThemeContext);
  return (
    <div>
      <ThemeContext.Provider value={"theme"}>
        <h1>Notetaker</h1>
        <Link href="/notes">
          <button> Go to interact</button>
        </Link>
      </ThemeContext.Provider>
    </div>
  );
}
