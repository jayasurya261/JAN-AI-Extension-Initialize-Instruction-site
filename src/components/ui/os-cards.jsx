import { div } from "motion/react-client";
import { Link } from "react-router-dom";

export function OsCards(props) {
  console.log(props.name)
    return(
        <div  className="pl-8 pr-8">
           
<div
  class="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-purple-500 hover:-translate-y-2 hover:shadow-xl shadow-purple-400"
>
  <div
    class="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-purple-400"
    alt="image here"
  >
  <div  className="justify-center flex items-center h-full">
     {props.name == "window" ?<img  width="70" height="70" src="https://8jkpfij3xhziglma.public.blob.vercel-storage.com/JAN%20AI%20Instruction%20site%20os%20logo/windows-square-shape-brand_icon-icons.com_59257.png"  alt="windows-11" /> : ""}
   {props.name == "macos" ? <img width="100" height="100" src="https://8jkpfij3xhziglma.public.blob.vercel-storage.com/JAN%20AI%20Instruction%20site%20os%20logo/finder_macos_bigsur_icon_190173.png" alt="mac-logo"/>: ""}
   {props.name == "linux" ? <img width="100" height="100" src="https://8jkpfij3xhziglma.public.blob.vercel-storage.com/JAN%20AI%20Instruction%20site%20os%20logo/linux_original_logo_icon_146433.png" alt="linux--v1"/>: ""}
  </div>
  </div>

  <div >
    <h2 class="text-2xl font-bold mb-2 text-white">{props.name == "window" ? "Windows":""}</h2>
    <h2 class="text-2xl font-bold mb-2 text-white">{props.name == "macos" ? "Mac OS":""}</h2>
    <h2 class="text-2xl font-bold mb-2 text-white">{props.name == "linux" ? "Linux":""}</h2>
    <p class="text-gray-200 line-clamp-3">
      {props.name == "window" ? "JAN AI works on windows 10 and windows 11.":""}
      {props.name == "macos" ? "JAN AI works most efficient on apple currently supporting OS versions.":""}
      {props.name == "linux" ? "JAN AI works on variety of Linux distribution eg. Debian family, Red Hat family, Open Suse family and Arch.":""}
    </p>
  </div>
 {props.name == "window" ?<Link to="/os/windows">
  <button
    class="hover:bg-purple-400 bg-purple-600 text-white mt-6 rounded p-2 px-6"
    >
    Download Now
  </button></Link> : ""}
 {props.name == "macos" ?<Link to="/os/macos">
  <button
    class="hover:bg-purple-400 bg-purple-600 text-white mt-6 rounded p-2 px-6"
    >
    Download Now
  </button></Link> : ""}
 {props.name == "linux" ?<Link to="/os/linux">
  <button
    class="hover:bg-purple-400 bg-purple-600 text-white mt-6 rounded p-2 px-6"
    >
    Download Now
  </button></Link> : ""}
</div>

        </div>
    )
}