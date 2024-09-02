"use client";
import { useState, useTransition } from "react";
import { aboutTabs } from "../lib/data";
import Educations from "../ui/about/educations";
import Hobbies from "../ui/about/hobbies";
import MyStory from "../ui/about/my-story";
import TabButton from "../ui/about/tab-button";

export default function About() {
  const [tab, setTab] = useState(aboutTabs[0].id); // The first
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const renderContentComponent = () => {
    const currentTab = aboutTabs.find((section) => section.id === tab);
    if (!currentTab) return null;
    switch (tab) {
      case "myStory":
        return <MyStory />;
      case "educations":
        return <Educations />;
      case "hobbies":
        return <Hobbies />;
    }
  };

  return (
    <section
      className="flex-1 py-10 lg:py-20 h-full min-h-[700px] items-center"
      id="about"
    >
      <div className="mt-4 md:mt-0 text-left h-full">
        <p className="text-5xl font-bold text-rose pb-10">About Me</p>
        {/* Tab section */}
        <div className="flex flex-row justify-start mt-2">
          {aboutTabs.map((section, index) => (
            <TabButton
              key={index}
              selectTab={() => handleTabChange(section.id)}
              active={tab === section.id}
            >
              {section.title}
            </TabButton>
          ))}
        </div>

        {/* Content section */}
        <div className="mt-8 text-md sm:text-lg leading-relaxed dark:text-white">
          {renderContentComponent()}
        </div>
      </div>
    </section>
  );
}
