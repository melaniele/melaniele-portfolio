import { myEducations } from "@/app/lib/data";
import Image from "next/image";
import Tooltip from "../tooltip";

export default function Educations() {
  return (
    <div className="w-full">
      {myEducations.map((item, index) => (
        <div key={index} className="mb-9">
          <div className="flex flex-col md:flex-row items-start md:items-center mb-2">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Tooltip text={item.school}>
                <Image
                  src={item.logo.src}
                  alt={item.logo.alt}
                  width={item.logo.width}
                  height={item.logo.height}
                  className="mr-4 mb-2 md:mb-0"
                />
              </Tooltip>
            </a>
            <div>
              <h2 className="text-2xl text-red-400 font-bold">{item.degree}</h2>
              <p className="text-slate-500 italic">
                {`${item.location}`} ({item.duration})
              </p>
            </div>
          </div>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            {item.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
