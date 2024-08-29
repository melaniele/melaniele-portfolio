import { skills } from "../lib/data";
import SkillCard from "../ui/skill-card";

export default function Skills() {
  return (
    <div id="skills" className="pt-20">
      <p className="text-5xl font-bold text-rose"> Skills </p>
      <div className="my-4 grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-10">
        {skills.map((skillSet, index) => (
          <SkillCard skillSet={skillSet} key={index} />
        ))}
      </div>
    </div>
  );
}
