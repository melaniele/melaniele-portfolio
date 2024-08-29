import Image from "next/image";
import { experiences } from "../lib/data";
import Tooltip from "../ui/tooltip";

export default function Experience() {
  return (
    <div id="experience" className="flex-1 w-full mx-0 pt-20 dark:text-white">
      <p className="text-5xl font-bold text-rose pb-5"> Experience </p>
      {experiences.map((item, index) => (
        <div
          key={index}
          className="shadow-lg rounded-lg p-6 w-full mx-auto mb-5
                    dark:shadow-white dark:shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center my-3">
            <div className="flex flex-col md:flex-row items-start md:items-center md:w-2/3">
              <a
                href={item.company.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Tooltip text={item.company.name}>
                  <Image
                    src={item.company.logo.src}
                    alt={item.company.logo.alt}
                    width={100}
                    height={10}
                    className="mr-4 mb-2 md:mb-0"
                  />
                </Tooltip>
              </a>
              <div>
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="text-gray-600">{`${item.company.name} - ${item.company.location}`}</p>
              </div>
            </div>
            <p className="mt-2 md:mt-0 md:ml-auto text-gray-500 italic">
              {item.duration}
            </p>
          </div>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            {item.tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center justify-start space-x-3 mt-4">
            <p className="text-2xl font-bold">Tech Stack:</p>
            {item.tech.map((tech, index) => (
              <Tooltip text={tech.alt} key={index}>
                <Image src={tech.src} alt={tech.alt} width={30} height={20} />
              </Tooltip>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
