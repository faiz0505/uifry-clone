import { fetchData } from "@/app/utils";
import React from "react";

const Faq = async () => {
  const data = await fetchData();
  const applyBgClass = (index) => {
    const bgMainIndexes = [0, 3, 4, 7, 8, 11, 12, 15, 16];
    return bgMainIndexes.includes(index) ? "bg-main text-white" : "bg-white";
  };
  return (
    <section id="faq">
      <div className="">
        <h6 className="text-xs font-light text-main">FAQ</h6>
        <p className="text-3xl font-clashDisplayBold w-[40%]">
          Frequently asked questions
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5">
        {data.faq.map((faq, i) => {
          return (
            <div
              key={i}
              className={`w-full h-auto flex flex-col gap-2 p-2 rounded ${applyBgClass(
                i
              )}`}
            >
              <h3 className=" font-clashDisplaySemibold text-lg">
                {faq.question}
              </h3>
              <p className=" font-light text-xs">{faq.answer}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
