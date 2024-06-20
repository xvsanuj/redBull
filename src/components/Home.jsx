import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useRef } from "react";
const Home = () => {

  var arr = ["R","E","D","B","U","L","L"];
  var tl = gsap.timeline();
  useGSAP(()=>{
    tl.to(".animeDiv", {
      width: "20vw",
      duration: 1.5,
      ease: "back.inOut"
    })
    tl.from(".textAnime > span", {
      y: 200,
      duration: .8,
      stagger: .2,
      ease: "back",
      delay: -.8,
    }, "h");
    tl.from(".animeMoc > h1 ", {
      x: 200,
      scale: .6,
      ease: "back.out",
      opacity:0
    }, "h");
  });


  return (
    <div className="h-[90vh]">
      <div>
        <div className="animeDiv h-[1.5px] w-[0vw] bg-[#D9D9D9] ml-20 absolute top-52 "></div>
        <div className="animeDiv h-[1.5px] w-[0vw] bg-[#D9D9D9] mr-20 absolute top-52  right-0"></div>
        <div className="bebas text-center relative top-14">
          <div className="textAnime overflow-hidden text-[10vw] leading-none">
            {
              arr.map((elem, i)=>{
                return(<span className="inline-block" key={i}>{elem}</span>);
              })
            }
          </div>
          <div className="animeMoc text-[4vw] overflow-hidden flex gap-5 justify-center leading-none">
            <h1>
              <span className="inline-block">G</span>
              <span className="inline-block">I</span>
              <span className="inline-block">V</span>
              <span className="inline-block">E</span>
              <span className="inline-block">S</span>
            </h1>
            <h1>
              <span className="inline-block">Y</span>
              <span className="inline-block">O</span>
              <span className="inline-block">U</span>
            </h1>
            <h1>
              <span className="inline-block">W</span>
              <span className="inline-block">I</span>
              <span className="inline-block">N</span>
              <span className="inline-block">G</span>
              <span className="inline-block">S</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="cards flex justify-center gap-6 p-8 mt-16">
        <div className="h-72 w-48 rounded-lg bg-zinc-400">

        </div>
        <div className="h-72 w-48 rounded-lg bg-zinc-400">

        </div>
        <div className="h-72 w-48 rounded-lg bg-zinc-400">

        </div>
        <div className="h-72 w-48 rounded-lg bg-zinc-400">

        </div>
        <div className="h-72 w-48 rounded-lg bg-zinc-400">
            
        </div>
        <div className="h-72 w-48 rounded-lg bg-zinc-400">

        </div>
        <div className="h-72 w-48 rounded-lg bg-zinc-400">

        </div>
      </div>
    </div>
  );
};

export default Home;
