const navLinks = [
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

export default function Navbar() {
  return (
    <nav className="shadow-sm">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-serif">Rentkar</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((e) => {
                return (
                  <li key={e.id} className="py-4">
                    <a
                      className="inline-block
                      py-2 text-base font-medium
                      border-b-transparent
                      hover:border-b-2 //! Causing resizing of navbar on hover
                      hover:text-primary
                      hover:border-primary
                      transition-colors
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
        </div>
      </div>
    </nav>
  );
}
