"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Button from "../ui/button";

export default function Overview() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        id="overview"
        className="grid grid-cols-1 sm:grid-cols-12 py-24 h-full min-h-[700px] justify-center items-center my-20"
      >
        <div className="flex flex-col col-span-7 place-self-center text-center">
          {/* Greeting */}
          <div className="py-5">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl my-10 font-bold dark:text-white">
              Hello, I&apos;m
              <br />
              <TypeAnimation
                sequence={[1000, "Melanie! 👋🏻", 1500, "an API Engineer", 1000]}
                wrapper="span"
                speed={50}
                style={{ color: "#FF7575", paddingTop: 20 }}
                repeat={Infinity}
              />
            </h1>
          </div>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row gap-5 justify-center items-center content-center">
            {/* Contact button */}
            <a href="#contacts">
              <Button
                btnName="Let's Connect!"
                style="bg-white text-rose hover:bg-rose hover:text-white hover:border-white"
              />
            </a>
            {/* Resume button */}
            <a
              href="/files/Melanie's Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                btnName="My Résume"
                style="bg-rose text-white hover:bg-dark-rose"
              />
            </a>
          </div>
        </div>

        {/* Profile picture */}
        <div className="col-span-5 flex justify-center">
          <div
            className="w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] drop-shadow-xl
                    transition ease-in-out duration-700
                    hover:scale-110 flex items-center justify-center"
          >
            <Image
              width={500}
              height={500}
              className="rounded-lg"
              alt="Melanie's portrait"
              src="/pics/portrait.JPG"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
