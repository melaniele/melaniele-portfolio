import { myHobbies } from "@/app/lib/data";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { Card } from "@nextui-org/react";
import Image from "next/image";

export default function Hobbies() {
  return (
    <div>
      <p className="text-2xl font-bold pb-5 text-rose dark:text-white">
        {"As an adventurer at heart, I find joy in..."}
      </p>
      <div className="flex flex-row gap-4 overflow-y-auto space-x-5">
        {myHobbies.map((hobby, index) => (
          <div key={index} className="flex-shrink-0 snap-center m-4">
            <Card
              isFooterBlurred={true}
              radius="lg"
              className="rounded-lg shadow-lg hover:scale-105 ease-in-out duration-500"
            >
              <Image
                alt={`${hobby.name} pic`}
                className="object-cover rounded-lg"
                height={350}
                width={300}
                src={hobby.pic}
              />
              <div className="absolute flex flex-row space-x-2 bottom-2 right-2 text-center">
                <div className="opacity-90 bg-red-400 text-white font-bold text-base rounded-full px-4 py-1.5">
                  {hobby.name}
                </div>
                <div className="flex opacity-90 bg-slate-200 text-slate-500 font-semibold text-base rounded-full px-4 py-1.5">
                  <MapPinIcon width={20} />
                  <span className="pl-1">{hobby.event}</span>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
