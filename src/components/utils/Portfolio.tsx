import "../../index.scss";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

//Components
import PortfolioItem from "./PortfolioItem";
import industries from "../../assets/images/industries.png";

export default function Portfolio() {
  const industriesRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".containerRef",
        {
          opacity: 0,
          x: 200,
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.5,
        }
      );
      gsap.fromTo(
        industriesRef.current,
        {
          y: -100,
        },
        {
          y: 0,
          duration: 1,
        }
      );
    }, ".wrapperRef");
    return () => ctx.kill();
  }, []);

  return (
    <section className="w-full lg:w-11/12 mx-auto z-30 flex flex-col gap-2 mt-10 lg:px-4">
      <div className="w-full px-10 lg:px-3 flex flex-row justify-between">
        <h1 className="text-sm font-semibold">Portfolio History</h1>
        <h1 className="text-sm underline">Per Industry</h1>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-3 items-center justify-between">
        <div className="flex flex-col gap-3 lg:flex-row justify-between w-full lg:w-8/12 wrapperRef">
          <div className="containerRef">
            <PortfolioItem
              date="NOV 19"
              value="$ 9 864.34"
              gain="234.23 (30.34%)"
              isGain={true}
            />
          </div>
          <div className="containerRef">
            <PortfolioItem
              date="OCT 19"
              value="$ 7 845.32"
              gain="143.56 (15.43%)"
              isGain={true}
              active={true}
            />
          </div>
          <div className="containerRef">
            <PortfolioItem
              date="SEP 19"
              value="$ 7 453.45"
              gain="-134.23 (-8.34%)"
              isGain={false}
            />
          </div>
        </div>
        <div className="w-full lg:mx-0 lg:w-4/12 flex items-center justify-center lg:justify-end">
          <div className="flex flex-col items-center justify-center gap-3">
            <img
              src={industries}
              className="w-64 cursor-pointer hover:scale-105"
              ref={industriesRef}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
