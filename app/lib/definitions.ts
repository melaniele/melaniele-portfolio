import { ReactNode } from "react";

export type SkillCardProps = {
  skillSet: {
    name: string;
    tech: {
      src: string;
      alt: string;
    }[];
  };
};

export type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    image: ReactNode;
    links: {
      demo: string;
      github: string;
    };
    tech: {
      src: string;
      alt: string;
    }[];
  };
};
