import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { MenuIcon } from "../components/icons/MenuIcon";
import { SunIcon } from "../components/icons/SunIcon";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { MoonIcon } from "../components/icons/MoonIcon";
import { X } from "../components/icons/X";

export default function Home() {
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

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="pdf">
      <title>portfolio</title>
      <div className=" bg-white p-4 flex justify-between items-center relative lg:px-20 py-4 dark:bg-[#030712]">
        <a href="/">
          <span className="text-[#111827] text-3xl font-bold dark:text-white">
            {"<SS />"}
          </span>
        </a>

        <div className="lg:hidden" onClick={() => setOpen((prev) => !prev)}>
          {!open ? <MenuIcon /> : <X />}
        </div>

        <div
          className={
            "hidden absolute bg-white left-0 top-[68px] w-full dark:bg-[#030712]"
          }
        >
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
            <div className="flex justify-between items-center">
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
            <div className="flex items-center justify-center w-9 h-9">
              <button type="button" onClick={handleThemeSwitch}>
                {theme === "light" ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>

            <button
              className="text-gray-50 font-medium px-4 py-[6px] bg-gray-900 rounded-xl dark:text-[#111827] dark:bg-white"
              onClick={downloadPDF}
              disabled={!(loader === false)}
            >
              {loader ? <span>Downloading</span> : <span>Download CV</span>}
            </button>
          </div>
        </div>
      </div>
      <Main />
      <Footer />
    </div>
  );
}
