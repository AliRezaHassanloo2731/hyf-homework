"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  // Create a Clock component (15 minutes)
  // Use useEffect to update time every second
  //
  const [counter, setCouter] = useState(0);
  const [time, setTime] = useState(new Date());

  //   . Build a DataFetcher component (15 minutes)
  // Fetch data from a public API using useEffect
  // Display loading and error states

  // 3. Develop a WindowResizer component (15 minutes)
  // Track and display window size using useEffect
  // Ensure proper event listener cleanup

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date() + 1);
    }, 1000);
    // Add cleanup function to clear interval when component unmounts

    // Implement proper cleanup
    return () => clearInterval(timerID);
  }, [time]);
  // Build a DataFetcher component
  // Fetch data from a public API using useEffect
  // Display loading and error states

  // 3. Develop a WindowResizer component
  // Track and display window size using useEffect
  // Ensure proper event listener cleanup

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // 4. Implement a DarkModeToggle component (15 minutes)
  // Create a toggle component that toggles the dark mode theme
  // Use useState to keep track of the theme state
  // Use CSS variables to change the theme styles
  // Ensure proper event listener cleanup
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const themeToggle = () => {
      setIsDarkMode(!isDarkMode);
    };
    window.addEventListener("keydown", themeToggle);
    return () =>
      window.removeEventListener("keydown", themeToggle);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode? styles.dark : styles.light}>
      <div>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </div>
      <p>Current Time: {time.toLocaleTimeString()}</p>
      <div>
        <button onClick={toggleDarkMode}>Togg Available </button>

  return (
    <div style={{ padding: "2rem", fontSize: "2rem" }}>
      <p>Current Time: {time.toLocaleTimeString()}</p>
    </div>
  );
}
