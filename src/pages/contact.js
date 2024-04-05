import React from "react";
import { MenuIcon } from "../components/icons/MenuIcon";
import { SunIcon } from "../components/icons/SunIcon";
import { useState } from "react";
import { CopyIcon } from "../components/icons/CopyIcon";
import { MailIcon } from "../components/icons/MailIcon";
import { PhoneIcon } from "../components/icons/PhoneIcon";
import { GitHub } from "../components/icons/GitHub";
import { Twitter } from "../components/icons/Twitter";
import { Figma } from "../components/icons/Figma";
import { Copyright } from "../components/icons/Copyright";

export default function contact() {
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

      <div className="px-4 py-14 bg-white flex flex-col items-center gap-6 lg:py-24 lg:px-20 lg:gap-12 dark:bg-[#030712]">
        <div className="flex flex-col items-center gap-4">
          <span className="text-[#4B5563] text-sm font-medium px-5 py-1 bg-[#E5E7EB] rounded-xl dark:text-[#D1D5DB] dark:bg-[#374151]">
            Get in touch
          </span>

          <span className="text-[#4B5563] text-xl text-center dark:text-[#D1D5DB]">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </span>
        </div>

        <div className="lg:flex lg:flex-col lg:gap-4">
          <div className="flex gap-4 items-center">
            <MailIcon />

            <span className="text-lg font-semibold text-black lg:text-4xl dark:text-white">
              reachsagarshah@gmail.com
            </span>

            <CopyIcon />
          </div>

          <div className="flex gap-4 justify-center items-center">
            <PhoneIcon />

            <span className="text-lg font-semibold text-black lg:text-4xl dark:text-white">
              +91 8980500565
            </span>

            <CopyIcon />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[#4B5563] dark:text-[#D1D5DB]">
            You may also find me on these platforms!
          </span>

          <div className="flex gap-3 justify-center">
            <GitHub />
            <Twitter />
            <Figma />
          </div>
        </div>
      </div>

      <div className="flex gap-2 py-6 justify-center bg-[#F9FAFB] items-center dark:bg-[#111827]">
        <Copyright />

        <span className="text-sm text-black dark:text-[#D1D5DB]">
          2023 | Designed and coded with ❤️️ by Sagar Shah
        </span>
      </div>
    </>
  );
}
