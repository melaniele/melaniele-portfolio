import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { SkillCardProps } from "../lib/definitions";
import Tooltip from "./tooltip";

const SkillCard: React.FC<SkillCardProps> = ({ skillSet }) => {
  return (
    <Card
      className="my-4 shadow-lg rounded-2xl
                  transition ease-in-out duration-500
                  hover:scale-105
                dark:shadow-white dark:shadow-sm"
    >
      <div className="font-bold text-2xl px-10 py-4 bg-rose text-white rounded-t-2xl shadow-md">
        {skillSet.name}
      </div>
      <CardBody className="grid grid-cols-4 gap-4 px-6 py-6">
        {skillSet.tech.map((tech, index) => (
          <div key={index} className="flex items-center justify-center">
            <Tooltip text={tech.alt}>
              <Image alt={tech.alt} src={tech.src} width={50} height={50} />
            </Tooltip>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default SkillCard;
