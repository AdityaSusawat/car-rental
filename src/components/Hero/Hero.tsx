import carPng from "../../assets/car.png";

interface SectionProps {
  theme: string;
}

export default function Hero({ theme }: SectionProps) {
  return (
    <div
      className="dark:bg-darkBackground 
    dark:text-darkText 
    duration-300
    relative
    -z-20"
    >
      <div className="container min-h-[600px] flex">
        <div
          className="grid place-items-center 
        grid-cols-1 sm:grid-cols-2"
        >
          <div className="order-2 sm:order-1 space-y-4 sm:pr-6">
            <p className="dark:text-darkTextHover text-2xl font-serif">
              Like what you see?
            </p>
            <h1
              className="text-5xl lg:text-7xl
             font-semibold font-serif"
            >
              Rent-a-kar
            </h1>
            <p className="text-lg">
              I hate the color scheme of this website. I wish I had the time to
              research for better images.
            </p>
            <button
              className="btn bg-primary
             text-black px-6 py-3 rounded-md
              hover:bg-primary/80 duration-300"
            >
              Get Started
            </button>
          </div>
          <div className="order-1 sm:order-2">
            <img
              className="relative -z-10 max-h-[600px] sm:scale-125
              drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] "
              src={carPng}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
