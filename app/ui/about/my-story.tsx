import { myStory } from "@/app/lib/data";

export default function MyStory() {
  return (
    <div className="w-full">
      {myStory.map((element, index) => (
        <p
          key={index}
          className="text-lg sm:text-2xl tracking-wide leading-relaxed my-14"
        >
          {element}
        </p>
      ))}
    </div>
  );
}
