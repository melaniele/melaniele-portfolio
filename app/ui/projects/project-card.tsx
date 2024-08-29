import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { ProjectCardProps } from "../../lib/definitions";
import Tooltip from "../tooltip";

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div>
      <div
        className="h-52 md:h-80 rounded-t-xl relative group"
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "fit",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-dark-gray bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 group-hover:rounded-t-xl transition-all duration-500">
          {project.links.demo !== "" && (
            <Link
              href={project.links.demo}
              target="_blank"
              className="h-14 w-14 mr-4 border-2 relative rounded-full border-gray hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
          {project.links.github !== "" && (
            <Link
              href={project.links.github}
              target="_blank"
              className="h-14 w-14 border-2 relative rounded-full border-gray hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-dark-gray py-6 px-4">
        <h5 className="font-xl font-semibold mb-2">{project.title}</h5>
        <p className="text-gray">{project.description}</p>
        <div className="flex flex-wrap items-center justify-start space-x-3 mt-4">
          {project.tech.map((tech, index) => (
            <Tooltip text={tech.alt} key={index}>
              <Image src={tech.src} alt={tech.alt} width={30} height={20} />
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
