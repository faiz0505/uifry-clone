import { fetchData } from "@/app/utils";
import React from "react";

const Faq = async () => {
  const data = await fetchData();
  return (
    <section>
      <div>
        <h6 className="text-xs font-light text-main">FAQ</h6>
        <p className="text-3xl font-clashDisplayBold">
          Frequently asked questions
        </p>
      </div>
      <div>
        {data.faq.map((faq, i) => {
          return (
            <div key={i}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
