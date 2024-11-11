import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Swole<span className="text-blue-400">normous</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        I hereby acknowledge that i may become too{" "}
        <span className="text-blue-400 font-medium">fucken huge</span> to even
        fit through doors and accept the risks of becoming an absolute{" "}
        <span className="text-blue-400 font-medium">weapon</span>
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept & Begin"}
      ></Button>
    </div>
  );
}

export default Hero;
