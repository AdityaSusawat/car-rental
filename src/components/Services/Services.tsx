import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

interface Skill {
  name: string;
  icon: () => JSX.Element;
  link: string;
  description: string;
  aosDelay: string;
}

const skillsData: Skill[] = [
  {
    name: "Best Price",
    icon: () => <FaCameraRetro />,
    link: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quae nostrum animi suscipit possimus, est error minima enim blanditiis adipisci, rem autem quaerat velit ut. Quisquam reiciendis ducimus molestiae adipisci!",
    aosDelay: "0",
  },
  {
    name: "Reliable",
    icon: () => <GiNotebook />,
    link: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quae nostrum animi suscipit possimus, est error minima enim blanditiis adipisci, rem autem quaerat velit ut. Quisquam reiciendis ducimus molestiae adipisci!",
    aosDelay: "300",
  },
  {
    name: "100% insured",
    icon: () => <SlNote />,
    link: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quae nostrum animi suscipit possimus, est error minima enim blanditiis adipisci, rem autem quaerat velit ut. Quisquam reiciendis ducimus molestiae adipisci!",
    aosDelay: "600",
  },
];

export default function Services() {
  return (
    <div
      className="py-16 sm:min-h-[600px]
     dark:bg-darkBackground dark:text-darkText
     sm:grid sm:place-items-center"
    >
      <div className="container">
        <div className="pb-10">
          <h1
            className="text-3xl font-semibold
          text-center font-serif sm:text-4xl"
          >
            Why Us?
          </h1>
        </div>
        <div
          className="grid grid-cols-1 gap-6  sm:gap-24
        sm:grid-cols-2 lg:grid-cols-3
        place-items-center text-center sm:text-xl"
        >
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={skill.aosDelay}
              className="flex flex-col 
          justify-center items-center space-y-6 bg-slate-100
          dark:bg-darkBackgroundAlt border-2 dark:border-darkText 
          dark:text-darkText px-4 py-5 sm:py-20 rounded-lg"
            >
              <div className="text-4xl text-primary dark:text-darkTextHover">
                {skill.icon()}
              </div>
              <h1 className="text-3xl">{skill.name}</h1>
              <p className="sm:mx-4">{skill.description}</p>
              <a
                href={skill.link}
                className="dark:text-darkTextHover text-primary"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
