"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects, projectTags } from "../lib/data";
import ProjectCard from "../ui/projects/project-card";
import ProjectTag from "../ui/projects/project-tag";

export default function Projects() {
  const [tag, setTag] = useState(projectTags[0]); // All
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projects.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="container pt-20">
      <p className="text-5xl font-bold text-rose"> Projects </p>
      <div className="text-dark-rose flex flex-row justify-center items-center gap-4 py-6">
        {projectTags.map((currTag, index) => (
          <ProjectTag
            key={index}
            handleOnClick={handleTagChange}
            tag={currTag}
            isSelected={tag === currTag}
          />
        ))}
      </div>

      {/* Change grid here when having more projects */}
      <ul ref={ref} className="my-4 grid md:grid-cols-2 gap-8 md:gap-10">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard project={project} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
