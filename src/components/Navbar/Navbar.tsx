import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { useEffect } from "react";

interface NavLinks {
  id: number;
  name: string;
  link: string;
}

const navLinks: NavLinks[] = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Cars",
    link: "/cars",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
  {
    id: 4,
    name: "Bookings",
    link: "/bookings",
  },
];

interface NavbarProps {
  theme: string;
  setTheme: (newTheme: string) => void;
}

export default function Navbar({ theme, setTheme }: NavbarProps) {
  const element = document.documentElement;
  useEffect(() => {
    if (theme == "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <nav
      className="shadow-md 
    bg-white 
    dark:bg-dark dark:text-darkText duration-300"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h1
              className="text-3xl 
            font-bold
            font-serif
            hover:text-darkTextHover
            duration-300
            cursor-pointer"
            >
              Rentkar
            </h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((e) => {
                return (
                  <li key={e.id} className="py-4">
                    <a
                      className="
                      py-2 text-base font-medium
                      hover:text-darkTextHover
                      duration-300"
                      href={e.link}
                    >
                      {e.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            {theme == "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl 
                hover:text-darkTextHover 
                cursor-pointer duration-300"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl
                cursor-pointer
                hover:text-darkTextHover
                duration-300"
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
