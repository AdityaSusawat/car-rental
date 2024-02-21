import carPng from "../../assets/car1.png";

export default function About() {
  return (
    <div
      className="dark:bg-darkBackgroundAlt bg-slate-100
    dark:text-darkText 
    duration-300 min-h-[600px] sm:grid  sm:place-items-center"
    >
      <div className="container">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 
        place-items-center"
        >
          <div
            data-aos="slide-right"
            data-aos-duration="1800"
            data-aos-once="false"
          >
            <img
              src={carPng}
              alt=""
              className="sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.5)]"
            />
          </div>
          <div>
            <div className="space-y-4 sm:pl-8">
              <h1 className="text-3xl sm:text-4xl font-bold font-serif">
                About Us
              </h1>
              <p className="text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                quaerat eius rerum quas doloribus voluptatum aut sint sequi
                iure?
              </p>
              <button className="button-outline">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
