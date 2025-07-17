// src/pages/Windows.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { LampDemo } from "../components/ui/LampDemo";
import { Timeline } from "../components/ui/timeline";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

function Windows() {
  const { os } = useParams();
  console.log(os);

  const [copied, setCopied]     = useState(false);
  const [copied1, setCopied1]   = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    if (text === "ollama run deepseek-r1:1.5b") {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } else if (text === "ollama run deepseek-r1:7b") {
      setCopied1(true);
      setTimeout(() => setCopied1(false), 1500);
    }
  };

  /* ------------------------------------------------------------------ */
  /*  time-line data                                                    */
  /* ------------------------------------------------------------------ */
  const data = [
    /* ------------------------------- STEP 1 ------------------------- */
    {
      title: "STEP : 1",
      content: (
        <div>
          {/* OS-specific instructions */}
          <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {/* WINDOWS ------------------------------------------------ */}
            {os === "windows" && (
              <div>
                <p className="font-bold text-5xl">For Windows</p>
                <br />
                <div>
                  <p className="lg:text-xl sm:text-md">
                    1. Download: Go to the official Ollama website and click on
                    the <strong>"Download"</strong> button for
                    <span className="ml-2">Windows.</span>
                  </p>
                  <br />
                  <p className="lg:text-xl sm:text-md">
                    2. Save the installer: Save the downloaded file
                    (<code>Ollama_Setup.exe</code>) to your computer.
                  </p>
                  <br />
                  <p className="lg:text-xl sm:text-md">
                    3. Run the installer: Double-click the file to run it.
                  </p>
                  <br />
                  <p className="lg:text-xl sm:text-md">
                    4. Follow the prompts to finish installation.
                  </p>
                </div>
              </div>
            )}

            {/* LINUX -------------------------------------------------- */}
            {os === "linux" && (
              <div>
                <p className="font-bold text-5xl">For Linux</p>
                <br />
                <div>
                  <p className="lg:text-xl sm:text-md">
                    1. Download: Go to the official Ollama website and click on
                    the <strong>"Download"</strong> button for
                    <span className="ml-2">Linux.</span>
                  </p>
                  <br />
                  <p className="lg:text-xl sm:text-md">
                    2. Save the package: (
                    <code>ollama_&lt;version&gt;.deb</code> or
                    <code className="ml-1">ollama_&lt;version&gt;.rpm</code>).
                  </p>
                  <br />
                  <p className="lg:text-xl sm:text-md">
                    3. Install: <code>sudo dpkg -i ...</code> or
                    <code className="ml-1">sudo rpm -i ...</code>
                  </p>
                  <br />
                  <p className="lg:text-xl sm:text-md">
                    4. Verify: <code>ollama --version</code>
                  </p>
                </div>
              </div>
            )}

            {/* MAC ---------------------------------------------------- */}
            {os === "mac" && (
              <div>
                <p className="font-bold text-5xl">For macOS</p>
                <br />
                <div>
                  <p className="lg:text-xl sm:text-md">
                    1. Download the <strong>.dmg</strong> from the web-site.
                  </p>
                  <br />
                  <p className="lg:text-xl sm:text-md">
                    2. Open the .dmg and drag Ollama to&nbsp;Applications.
                  </p>
                  <br />
                  <p className="lg:text-xl sm:text-md">
                    3. Verify: <code>ollama --version</code>
                  </p>
                  <br />
                  <a
                    href="https://ollama.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-4xl underline flex items-center"
                  >
                    <span className="mr-3">Download&nbsp;Link</span>
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* screenshots */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738603556/njeogdjc4nfgdfzcbt5m.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738603583/far9t2u7nmugvwybqote.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738603979/wxfhwklwhf9b97sjxngq.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },

    /* ------------------------------- STEP 2 ------------------------- */
    {
      title: "STEP : 2",
      content: (
        <div>
          {/* text block */}
          <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <p className="font-bold text-5xl">Running Ollama</p>
            <br />
            <div className="ml-10 text-2xl">
              <p>1. deepseek-r1</p>
              <p>2. deepseek-r1:1.5b</p>
            </div>
            <br />
            <p className="lg:text-xl sm:text-md">
              Open CMD / Terminal and run one of the commands:
            </p>
            <br />

            {/* command 1 */}
            <div className="w-full p-3 rounded-2xl">
              <p className="bg-gray-800 p-3 rounded-t-xl">shell</p>
              <div className="flex justify-between bg-gray-700 rounded-b-xl p-3">
                <span>ollama run deepseek-r1:1.5b</span>
                <button onClick={() => handleCopy("ollama run deepseek-r1:1.5b")}>
                  {copied ? "Copied" : (
                    <MdContentCopy className="scale-125 opacity-55 hover:opacity-100" />
                  )}
                </button>
              </div>
            </div>

            {/* command 2 */}
            <div className="w-full p-3 rounded-2xl mt-4">
              <p className="bg-gray-800 p-3 rounded-t-xl">shell</p>
              <div className="flex justify-between bg-gray-700 rounded-b-xl p-3">
                <span>ollama run deepseek-r1:7b</span>
                <button onClick={() => handleCopy("ollama run deepseek-r1:7b")}>
                  {copied1 ? "Copied" : (
                    <MdContentCopy className="scale-125 opacity-55 hover:opacity-100" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* screenshots */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738605046/tlh4jmy8qtcaekrdkf52.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738605035/avlbfkq0zcvkr8lbnrdk.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738605033/hdrjr3j5rf0jskwtmzpv.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738640599/rhjrirhqfqxodrhiimqw.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738640591/boblhz893lseb6rphrxg.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },

    /* ------------------------------- STEP 3 ------------------------- */
    {
      title: "STEP : 3",
      content: (
        <div>
          <h3 className="text-neutral-800 dark:text-neutral-200 lg:text-2xl sm:text-xl font-normal mb-4">
            Steps to run the VS-Code extension
          </h3>

          <div className="mb-8 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            <p>✅ Search <strong>JAN AI Extension</strong> in VS Code Marketplace</p>
            <p>✅ Install the extension</p>
            <p>
              ✅ Open the extension via{" "}
              <span className="pl-2 pr-2 py-1 rounded-2xl bg-gray-600">Ctrl + Shift + P</span>
            </p>
            <p>✅ Choose model R1:1.5B or R1:7B</p>
            <p>✅ Ask questions – enjoy!</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738695790/vlrqsanem0phqvbb5xzi.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738695790/ld1ervxfxw6xjjghsv9i.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738695791/c3rcsh5gnvhmpfgc6i7e.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738695790/yl18doqfa18jzeku6ahc.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src="https://res.cloudinary.com/dfrojkr3z/image/upload/v1738695791/lpu7zzfzrqiph45lpoc2.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
  ];
  /* ------------------------------------------------------------------ */

  return (
    <div className="App">
      <LampDemo name={os} />
      <Timeline data={data} />
    </div>
  );
}

export default Windows;
