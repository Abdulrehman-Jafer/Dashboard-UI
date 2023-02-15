import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Amount from "./Amount";
import GraphBars from "./GraphBars";
const Graph = () => {
  return (
    <div className="mediaScreenGraph">
      <div className="flex justify-between items-center mb-7">
        <h6 className="font-bold">Insights</h6>
        <BiDotsVerticalRounded className="p-1 bg-orange-100 cursor-pointer hover:bg-orange-200 rounded-[50%]" />    
      </div>
      <div className="flex justify-end gap-3">
        <div className="flex items-center gap-2">
          <div className="w-[10px] h-[10px] bg-blue-600 rounded-[50%]"></div>
          <div>Money-Out</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-[10px] h-[10px] bg-blue-400 rounded-[50%]"></div>
          <div>Money-In</div>
        </div>
      </div>
      <div className="w-[100%] relative text-slate-500">
        <div className="w-[100%] overflow-auto">
          <Amount amount={"100k"} />
          <Amount amount={"80k"} />
          <Amount amount={"60k"} />
          <Amount amount={"40k"} />
          <Amount amount={"20k"} />
          <Amount amount={"0"} />
        </div>
        <div className="w-full flex justify-evenly ml-[30px] min-w-[320px]">
          <GraphBars title={"Jan"} moneyOut={45} moneyIn={90} />
          <GraphBars title={"Mar"} moneyOut={55} moneyIn={80} />
          <GraphBars title={"May"} moneyOut={65} moneyIn={70} />
          <GraphBars title={"Jul"} moneyOut={75} moneyIn={60} />
          <GraphBars title={"Sep"} moneyOut={85} moneyIn={90} />
          <GraphBars title={"Dec"} moneyOut={15} moneyIn={100} />
        </div>
      </div>
    </div>
  );
};

export default Graph;
