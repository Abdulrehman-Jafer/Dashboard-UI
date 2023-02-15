import React from "react";

const GraphBars = ({ title, moneyIn, moneyOut }) => {
  let moneyOutStyle = {
    height: `${moneyOut}%`,
  };
  let moneyInStyle = {
    height: `${moneyIn}%`,
  };
  return (
    <main className="w-30px">
      <section className="w-[20px] h-[319px] absolute top-3">
        <div className="w-[100%] h-[100%] relative">
          <div
            className={`bg-blue-400 w-[50%] absolute bottom-0 rounded-tr-xl rounded-tl-xl`}
            style={moneyInStyle}
          ></div>
          <div
            className={`bg-blue-500 w-[50%] absolute bottom-0 right-0 rounded-tr-xl rounded-tl-xl`}
            style={moneyOutStyle}
          ></div>
        </div>
      </section>
      <section>{title}</section>
    </main>
  );
};

export default GraphBars;
