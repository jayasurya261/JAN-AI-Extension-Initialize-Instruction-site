import React from "react";
import { Timeline } from "../components/ui/timeline";
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import { GlowingEffect } from "../components/ui/glowing-effect";
import { GlowingEffectDemoSecond } from "../components/ui/GlowingEffectDemoSecond";
import { FloatingDockDemo } from "../components/ui/FloatingDockDemo";
import { HeroHighlight } from "../components/ui/hero-highlight";
import { HeroHighlightDemo } from "../components/ui/HeroHighlightDemo";
import { OsCards } from "../components/ui/os-cards";

const Home = () => {
  const [copied, setCopied] = useState(false);
  const [copied1, setCopied1] = useState(false);
  // const textToCopy = 'ollama run deepseek-r1:7b';

  const handleCopy = async (textToCopy) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      // setCopied(true);
      if (textToCopy === "ollama run deepseek-r1:7b") {
        setCopied1(true);
      } else if (textToCopy === "ollama run deepseek-r1:1.5b") {
        setCopied(true);
      }
      setTimeout(() => setCopied(false), 2000);
      setTimeout(() => setCopied1(false), 2000);
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  const data = [
    {
      title: "STEP : 1",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <div>
              <p className="font-bold text-5xl">For Windows</p>
              <br />
              <div>
                <p className="lg:text-xl sm:text-md">
                  1. Download: Go to the official Olammba website and click on
                  the "Download" button for{" "}
                  <span className="ml-5">Windows.</span>
                </p>
                <br />
                <p className="lg:text-xl sm:text-md">
                  2. Save the installer: Save the downloaded file
                  (Olammba_Setup.exe) to your computer.
                </p>
                <br />
                <p className="lg:text-xl sm:text-md">
                  3. Run the installer: Double-click on the downloaded file to
                  run the installer.
                </p>
                <br />
                <p className="lg:text-xl sm:text-md">
                  4. Follow the prompts: Follow the installation prompts to
                  install Olammba. For Linux
                </p>
                <br />
              </div>
            </div>
            <div>
              <p className="font-bold text-5xl">For Linux</p>
              <br />
              <div>
                <p className="lg:text-xl sm:text-md">
                  1. Download: Go to the official Olammba website and click on
                  the "Download" button for <span className="ml-5">Linux.</span>
                </p>
                <br />
                <p class="lg:text-xl sm:text-md">
                  2. Save the package: Save the downloaded file (
                  <code>olammba_&lt;version&gt;.deb</code> or{" "}
                  <span className="ml-5">
                    {" "}
                    <code>olammba_&lt;version&gt;.rpm</code>) to your computer.
                  </span>
                </p>
                <br />
                <p class="lg:text-xl sm:text-md">
                  3. Install the package: Open a terminal and navigate to the
                  directory where you saved the{" "}
                  <span className="ml-5">
                    {" "}
                    package. Run the command{" "}
                    <code>sudo dpkg -i olammba_&lt;version&gt;.deb</code> (for
                    Debian-based
                  </span>{" "}
                  <span className="ml-5">
                    systems) or{" "}
                    <code>sudo rpm -i olammba_&lt;version&gt;.rpm</code> (for
                    RPM-based systems).
                  </span>
                </p>
                <br />
                <p className="lg:text-xl sm:text-md">
                  4. Verify installation: Run the command olammba --version to
                  verify that Olammba has been{" "}
                  <span className="ml-5">installed successfully.</span>
                </p>
                <br />
              </div>
            </div>
            <div>
              <p className="font-bold text-5xl">For macOS</p>
              <br />
              <div>
                <p className="lg:text-xl sm:text-md">
                  1. Download: Go to the official Olammba website and click on
                  the "Download" button for <span className="ml-5">macOS.</span>
                </p>
                <br />
                <p class="lg:text-xl sm:text-md">
                  2. Save the installer: Save the downloaded file (
                  <code>Olammba_&lt;version&gt;.dmg</code>) to your computer.
                </p>
                <br />
                <p className="lg:text-xl sm:text-md">
                  3. Open the installer: Double-click on the downloaded file to
                  open the installer.
                </p>
                <br />
                <p className="lg:text-xl sm:text-md">
                  4. Drag and drop: Drag the Olammba icon to the Applications
                  folder to install it.
                </p>
                <br />
                <p className="lg:text-xl sm:text-md">
                  5. Verify installation: Open a terminal and run the command
                  olammba --version to verify that{" "}
                  <span className="ml-5">
                    Olammba has been installed successfully.
                  </span>
                </p>
                <br />
                <div></div>
                <a
                  href="https://ollama.com/"
                  target="_blank"
                  className="text-blue-400 text-4xl"
                >
                  <div className="flex underline">
                    <p className="mr-5 ">Download Link </p>
                    <FaExternalLinkAlt />
                  </div>
                </a>
              </div>
            </div>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738603556/njeogdjc4nfgdfzcbt5m.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738603583/far9t2u7nmugvwybqote.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738603979/wxfhwklwhf9b97sjxngq.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "STEP : 2",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <div>
              <p className="font-bold text-5xl">Running Ollama</p>
              <br />
              <div className="ml-10 text-2xl">
                <p>1. deepseek-r1</p>
                <p>2. deepseek-r1:1.5b</p>
              </div>
              <br />
              <p className="lg:text-xl sm:text-md">
                To run Olammba, open Command Prompt (Cmd) or Terminal and run
                one of the following commands:
              </p>
            </div>
            <br></br>
            <div>
              <div className=" w-full p-3 rounded-2xl">
                <p className="bg-gray-800 p-3 rounded-t-xl">shell</p>
                <div className="flex justify-between bg-gray-700  rounded-b-xl p-3">
                  <p className="">ollama run deepseek-r1:1.5b</p>
                  <button
                    onClick={() => handleCopy("ollama run deepseek-r1:1.5b")}
                  >
                    {copied ? (
                      "Copied"
                    ) : (
                      <div className="scale-125 opacity-55 hover:opacity-100">
                        <MdContentCopy />
                      </div>
                    )}
                  </button>
                </div>
              </div>
              <br></br>
              <div className=" w-full p-3 rounded-2xl">
                <p className="bg-gray-800 p-3 rounded-t-xl">shell</p>
                <div className="flex justify-between bg-gray-700  rounded-b-xl p-3">
                  <p className="">ollama run deepseek-r1:7b</p>
                  <button
                    onClick={() => handleCopy("ollama run deepseek-r1:7b")}
                  >
                    {copied1 ? (
                      "Copied"
                    ) : (
                      <div className="scale-125 opacity-55 hover:opacity-100">
                        <MdContentCopy />
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738605046/tlh4jmy8qtcaekrdkf52.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738605035/avlbfkq0zcvkr8lbnrdk.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738605033/hdrjr3j5rf0jskwtmzpv.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />

            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738640599/rhjrirhqfqxodrhiimqw.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738640591/boblhz893lseb6rphrxg.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "STEP : 3",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 lg:text-2xl sm:text-xl font-normal mb-4">
            Steps to run extension
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Search JAN AI Extension on Visual Code Extension Marketplace
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Install JAN AI Extension
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Open Extension by the Command of{" "}
              <span className="pl-2 pr-2 pt-1 pb-1 rounded-2xl bg-gray-600 ">
                ctrl+shift+P
              </span>{" "}
              search for the extension and open
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Choose model R1:1.5B or R1:7B
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Ask questions to the model! it will give the response
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ ENJOY!
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738695790/vlrqsanem0phqvbb5xzi.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738695790/ld1ervxfxw6xjjghsv9i.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738695791/c3rcsh5gnvhmpfgc6i7e.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738695790/yl18doqfa18jzeku6ahc.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738695791/lpu7zzfzrqiph45lpoc2.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <BackgroundBeamsWithCollision>
        <h2 className="text-xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          Think Performance & Security!{" "}
          <div className="lg:text-8xl sm:text-4xl">
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Think JAN AI</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="">Think JAN AI</span>
              </div>
            </div>
          </div>
        </h2>
      </BackgroundBeamsWithCollision>

      <div className="flex flex-col items-center justify-center pl-6 pr-6 bg-[#0a0a0a] pb-4">
        <GlowingEffectDemoSecond />
      </div>
      <HeroHighlightDemo />
      <div className="flex items-center justify-center pl-6 pr-6 bg-[#0a0a0a] ">
        <OsCards name="window" />
        <OsCards name="macos" />
        <OsCards name="linux" />
      </div>
      <a href="https://forms.gle/RxCJeaYEsB3CxcAw7" target="_blank" rel="noopener noreferrer">
        <div className="flex items-center justify-center pl-6 pr-6 pb-24 bg-[#0a0a0a]">
        <div class="flex items-center justify-center mt-20">
          <div class="relative group">
            <button class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
              <span class="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                <div class="relative z-10 flex items-center space-x-2">
                  <span class="transition-all duration-500 group-hover:translate-x-1">
                    Feed Back Form - Your feed Back is valuable
                  </span>
                  <svg
                    class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                    data-slot="icon"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>
      </a>
     
     <div className="z-100 relative">
       <FloatingDockDemo />
     </div>
    </div>
  );
};

export default Home;
