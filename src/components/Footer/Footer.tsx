import {
  FaLocationArrow,
  FaMobile,
  FaInstagram,
  FaTwitter,
  FaTwitch,
  FaFacebook,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div
      className="bg-gray-100 dark:bg-darkBackgroundAlt 
    dark:text-darkText"
    >
      <div className="container">
        <div className="grid md:grid-cols-3 py-5">
          <div className="py-8 px-4">
            <h1
              className="text-xl sm:text-3xl font-bold
            sm:text-left text-justify mb-3"
            >
              Car Rental
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              provident modi ipsum aliquam!
            </p>
            <br />
            <div className="flex items-center gap-2">
              <FaLocationArrow />
              <p>Bangalore, India</p>
            </div>
            <div className="flex items-center gap-2">
              <FaMobile />
              <p>(+91)-3737373737</p>
            </div>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-1 py-8">
            <a
              href="#"
              className="px-4 flex items-center gap-4 hover:text-darkTextHover duration-300"
            >
              <FaInstagram className="text-3xl" />
              <p className="text-xl">Instagram</p>
            </a>
            <a
              href="#"
              className="px-4 flex items-center gap-4 hover:text-darkTextHover duration-300"
            >
              <FaTwitter className="text-3xl" />
              <p className="text-xl">Twitter</p>
            </a>
            <a
              href="#"
              className="px-4 flex items-center gap-4 hover:text-darkTextHover duration-300"
            >
              <FaFacebook className="text-3xl" />
              <p className="text-xl">Facebook</p>
            </a>
            <a
              href="#"
              className="px-4 flex items-center gap-4 hover:text-darkTextHover duration-300"
            >
              <FaTwitch className="text-3xl" />
              <p className="text-xl">Twitch</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
