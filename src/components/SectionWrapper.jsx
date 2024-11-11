import React from "react";

function SectionWrapper(props) {
  const { children, header, title, id } = props;
  return (
    <section id={id} className="min-h-screen flex flex-col gap-10">
      <div className="bg-slate-950 py-10 flex flex-col gap-2 justify-center items-center p-4">
        <p className="uppercase font-medium">{header}</p>
        <h2 className="font-semibold text text-3xl sm:4xl md:5xl lg:6xl">
          {title[0]}{" "}
          <span className="uppercase text-blue-400"> {title[1]}</span>{" "}
          {title[2]}
        </h2>
      </div>
      <div className="max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4"></div>
      {children}
    </section>
  );
}

export default SectionWrapper;