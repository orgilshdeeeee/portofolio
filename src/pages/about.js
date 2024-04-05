import React from "react";
import { MenuIcon } from "../components/icons/MenuIcon";
import { SunIcon } from "../components/icons/SunIcon";
import { useState } from "react";

export default function about() {
  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector(".pdf");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("portfolio.pdf");
    });
  };

  return (
    <>
      <div className=" bg-white p-4 flex justify-between items-center relative lg:px-20 py-4 dark:bg-[#030712]">
        <a href="/">
          <span className="text-[#111827] text-3xl font-bold dark:text-white">
            {"<SS />"}
          </span>
        </a>

        <div className="lg:hidden">
          <MenuIcon />
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href="/about"
            className="font-medium text-[#4B5563] dark:text-[#D1D5DB]"
          >
            About
          </a>

          <a
            href="/work"
            className="font-medium text-[#4B5563] dark:text-[#D1D5DB]"
          >
            Work
          </a>

          <a
            href="/testimonials"
            className="font-medium text-[#4B5563] dark:text-[#D1D5DB]"
          >
            Testimonials
          </a>

          <a
            href="/contact"
            className="font-medium text-[#4B5563] dark:text-[#D1D5DB]"
          >
            Contact
          </a>

          <span className="text-[#F3F4F6]">|</span>

          <div className="flex items-center gap-4">
            <button>
              <SunIcon />
            </button>

            <button
              className="text-gray-50 font-medium px-4 py-[6px] bg-gray-900 rounded-xl dark:text-[#111827] dark:bg-white"
              onClick={downloadPDF}
              disabled={!(loader === false)}
            >
              {loader ? <span>Downloading</span> : <span>Download CV</span>}
            </button>
          </div>
        </div>

        <div className="hidden absolute bg-white left-0 top-[68px] w-full dark:bg-[#030712]">
          <div className="flex flex-col gap-4 items-start p-4">
            <a
              href="/about"
              className="font-medium text-[#4B5563] dark:text-[#D1D5DB]"
            >
              About
            </a>

            <a
              href="/work"
              className="font-medium text-[#4B5563] dark:text-[#D1D5DB]"
            >
              Work
            </a>

            <a
              href="/testimonials"
              className="font-medium text-[#4B5563] dark:text-[#D1D5DB]"
            >
              Testimonials
            </a>

            <a
              href="/contact"
              className="font-medium text-[#4B5563] dark:text-[#D1D5DB]"
            >
              Contact
            </a>
          </div>

          <div className="p-4 flex flex-col gap-4">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-[#D1D5DB]">
                Switch Theme
              </span>

              <SunIcon />
            </div>

            <button
              className="text-gray-50 font-medium px-4 py-[6px] bg-gray-900 rounded-xl w-full dark:bg-white dark:text-[#111827]"
              onClick={downloadPDF}
              disabled={!(loader === false)}
            >
              {loader ? <span>Downloading</span> : <span>Download CV</span>}
            </button>
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
    </>
  );
}
