"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center  ">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            Welcome to <span className="font-semibold hover:underline">Amaan Blogs</span>
            <br className="hidden lg:block" /> Your go-to destination for
            insightful articles on{" "}
            <span className="font-semibold underline decoration-primary">
              <Typewriter
                options={{
                  strings: ["AI", "Education", "Web3 & Metaverse"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>{" "}
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Stay informed and inspired with expert perspectives{" "}
            <br className="hidden lg:block" /> and cutting-edge trends.
          </p>{" "}
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20"></div>
        </div>{" "}
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image
            src={require("../../public/photos/blogwebsite.png")}
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
