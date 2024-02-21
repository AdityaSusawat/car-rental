import "../index.css";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Tmp from "./components/Tmp/Tmp";

export default function App() {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      {/* <Tmp /> */}
    </>
  );
}
