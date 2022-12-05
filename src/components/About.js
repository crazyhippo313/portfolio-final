import React from "react";
import {ArrowDownIcon} from "@heroicons/react/solid";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hi, I'm [___],
            <br className="hidden lg:inline-block" />
            a Computer Science & Economics student from Brown University.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am interested in Machine Learning, and Technology consulting. I was a software engineering intern at <strong>Agoda</strong>, and project manager at <strong>Tamid @ Brown</strong>. In my free time, I play soccer, 8-ball pool, and watch a broad range of classic films. Have I mentioned that I have 2 shiba dogs?
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:text-white rounded text-lg">
              My projects
              <ArrowDownIcon className="w-5 h-5 ml-1 mt-1" />
            </a>
            <a
              href="#resume"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:text-white rounded text-lg">
              My resume
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={require("./avatar.png")}
          />
        </div>
      </div>
    </section>
  );
}
