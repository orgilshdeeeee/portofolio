import React from "react";
import { LocationIcon } from "./icons/LocationIcon";
import { GitHub } from "./icons/GitHub";
import { Twitter } from "./icons/Twitter";
import { Figma } from "./icons/Figma";
import { Skills } from "./skills/Skills";
import { Content } from "./experienceCard/Content";
import { Work } from "./Work";

export const Main = () => {
  return (
    <div className="bg-white text-black dark:bg-[#030712]">
      <div className="flex flex-col gap-12 py-14 px-4 items-center lg:py-24 lg:px-20 lg:flex-row-reverse">
        <img
          className="w-[240px] h-[280px] lg:w-[280px] lg:h-[320px]"
          src="/mainFirstImage.jpeg"
          alt="image"
        />

        <div className="w-full flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <span className="text-4xl text-[#111827] font-semibold dark:text-white">
              Hi, I’m Sagar 👋
            </span>

            <span className="text-[#4B5563] lg:w-[768px] dark:text-[#D1D5DB]">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <LocationIcon />

              <span className="text-[#4B5563] dark:text-[#D1D5DB]">
                Ahmedabad, India
              </span>
            </div>

            <div className="flex">
              <div className="w-6 h-6 flex justify-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              </div>

              <span className="text-[#4B5563] ml-[7px] dark:text-[#D1D5DB]">
                Available for new projects
              </span>
            </div>
          </div>

          <div className="flex gap-[12px]">
            <GitHub />
            <Twitter />
            <Figma />
          </div>
        </div>
      </div>

      <div className="bg-[#F9FAFB] py-14 px-4 flex flex-col gap-6 lg:px-20 lg:py-24 lg:gap-12 dark:bg-[#111827]">
        <div className="flex flex-col items-center">
          <span className="px-5 bg-[#E5E7EB] font-medium text-[#4B5563] text-sm py-1 rounded-xl dark:text-[#D1D5DB] dark:bg-[#374151]">
            About me
          </span>
        </div>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between lg:items-start">
          <img
            className="w-[240px] h-[280px] lg:w-[400px] lg:h-[480px]"
            src="/mainSeconImg.jpeg"
            alt="image"
          />

          <div className="flex flex-col gap-6 lg:w-[584px]">
            <span className="text-2xl font-semibold dark:text-white">
              Curious about me? Here you have it:
            </span>

            <div className="flex flex-col gap-4">
              <span className="text-[#4B5563] dark:text-[#D1D5DB]">
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </span>

              <span className="text-[#4B5563] dark:text-[#D1D5DB]">
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </span>

              <span className="text-[#4B5563] dark:text-[#D1D5DB]">
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </span>

              <span className="text-[#4B5563] dark:text-[#D1D5DB]">
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </span>

              <span className="text-[#4B5563] dark:text-[#D1D5DB]">
                Finally, some quick bits about me.
              </span>

              <div className="flex ml-4 gap-5">
                <ul className="list-disc flex flex-col gap-[10px] text-[#4B5563] dark:text-[#D1D5DB]">
                  <li>B.E. in Computer Engineering</li>

                  <li>Full time freelancer</li>
                </ul>

                <ul className="list-disc flex flex-col gap-[10px] text-[#4B5563] dark:text-[#D1D5DB]">
                  <li>Avid learner</li>

                  <li>Aspiring indie hacker</li>
                </ul>
              </div>

              <span className="text-[#4B5563] dark:text-[#D1D5DB]">
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-black py-14 px-4 flex flex-col gap-6 lg:px-20 lg:py-24 lg:gap-12 dark:bg-[#030712]">
        <div className="flex flex-col gap-4 items-center">
          <span className="text-[#4B5563] px-5 py-1 bg-[#E5E7EB] rounded-xl dark:text-[#D1D5DB] dark:bg-[#374151]">
            Skills
          </span>

          <span className="text-center text-[#4B5563] text-lg dark:text-[#D1D5DB]">
            The skills, tools and technologies I am really good at:
          </span>
        </div>

        <Skills />
      </div>

      <div className="bg-[#F9FAFB] px-4 py-14 flex flex-col gap-6 lg:px-20 lg:py-24 lg:gap-12 dark:bg-[#111827]">
        <div className="flex flex-col gap-4 items-center">
          <span className="px-5 py-1 bg-[#E5E7EB] w-fit text-[#4B5563] rounded-xl text-sm dark:text-[#D1D5DB] dark:bg-[#374151]">
            Experience
          </span>

          <span className="text-center text-lg text-[#4B5563] dark:text-[#D1D5DB]">
            Here is a quick summary of my most recent experiences:
          </span>
        </div>

        <Content />
      </div>

      <div className="bg-white px-4 py-14 flex flex-col gap-6 lg:px-20 lg:py-24 lg:items-center dark:bg-[#030712] lg:gap-12">
        <div className="flex flex-col gap-4 items-center">
          <span className="px-5 py-1 bg-[#E5E7EB] w-fit text-[#4B5563] rounded-xl text-sm dark:text-[#D1D5DB] dark:bg-[#374151]">
            Work
          </span>

          <span className="text-center text-lg text-[#4B5563] dark:text-[#D1D5DB]">
            Some of the noteworthy projects I have built:
          </span>
        </div>

        <Work />
      </div>
    </div>
  );
};
