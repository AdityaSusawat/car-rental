import carPng from "../../assets/car1.png";

export default function About() {
  return (
    <div
      className="dark:bg-darkBackgroundAlt 
    dark:text-darkText 
    duration-300 min-h-[600px] flex"
    >
      <div className="container">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 
        place-items-center"
        >
          <div>
            <img src={carPng} alt="" />
          </div>
          <div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold font-serif">
                About Us
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
