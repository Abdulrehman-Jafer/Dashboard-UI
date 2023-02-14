import React from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";

const Graph = () => {
    return (
     <div className='mediaScreenGraph'>
          <div className="flex justify-between items-center mb-7">
          <h6 className="font-bold">Insights</h6>
          <i className="p-1 bg-orange-100 cursor-pointer hover:bg-orange-200 rounded-[50%]">
            {<BiDotsVerticalRounded />}
          </i>
        </div>
        <div className='flex justify-end gap-3'>
            <div className='flex items-center gap-2'>
               <div className='w-[10px] h-[10px] bg-blue-600 rounded-[50%]'></div>
               <div>Money-Out</div>
            </div>
            <div className='flex items-center gap-2'>
               <div className='w-[10px] h-[10px] bg-blue-400 rounded-[50%]'></div>
               <div>Money-In</div>
            </div>
        </div>
           <div className='w-[100%] relative text-slate-500'>
            <div className='w-[100%] overflow-auto'>
                <div className='flex items-center mb-10 '>
                    <div className='w-[50px]'>100k</div><div className='h-[0.1px] w-full bg-slate-300 '></div>
                </div>
                <div className='flex items-center mb-10'>
                    <div className='w-[50px]'>80k</div><div className='h-[0.1px] w-full bg-slate-300 '></div>
                </div>
                <div className='flex items-center mb-10'>
                    <div className='w-[50px]'>60k</div><div className='h-[0.1px] w-full bg-slate-300 '></div>
                </div>
                <div className='flex items-center mb-10'>
                    <div className='w-[50px]'>40k</div><div className='h-[0.1px] w-full bg-slate-300 '></div>
                </div>
                <div className='flex items-center mb-10'>
                    <div className='w-[50px]'>20k</div><div className='h-[0.1px] w-full bg-slate-300 '></div>
                </div>
                <div className='flex items-center mb-1'>
                    <div className='w-[50px]'>0</div><div className='h-[0.1px] w-full bg-slate-300 '></div>
                </div>
            </div>
            <div className='w-full flex justify-evenly ml-[30px] min-w-[320px]'>
                <div className='w-30px'>
                    <div className='w-[20px] h-[319px] absolute top-3'>
                        <div className='w-[100%] h-[100%] relative'>
                            <div className='bg-blue-400 w-[50%] h-[80%] absolute bottom-0 rounded-tr-xl rounded-tl-xl' ></div>
                            <div className='bg-blue-600 w-[50%] h-[30%] absolute bottom-0 right-0 rounded-tr-xl rounded-tl-xl'></div>
                        </div>
                    </div>
                    <div>Jan</div>
                </div>
                {/* <div className='w-30px'>
                    <div className='w-[20px] h-[319px] absolute top-3'>
                        <div className='w-[100%] h-[100%] relative'>
                            <div className='bg-blue-400 w-[50%] h-[100%] absolute bottom-0 rounded-tr-xl rounded-tl-xl' ></div>
                            <div className='bg-blue-600 w-[50%] h-[50%] absolute bottom-0 right-0 rounded-tr-xl rounded-tl-xl'></div>
                        </div>
                    </div>
                    <div>Feb</div>
                </div> */}
                <div className='w-30px'>
                    <div className='w-[20px] h-[319px] absolute top-3'>
                        <div className='w-[100%] h-[100%] relative'>
                            <div className='bg-blue-400 w-[50%] h-[80%] absolute bottom-0 rounded-tr-xl rounded-tl-xl' ></div>
                            <div className='bg-blue-600 w-[50%] h-[30%] absolute bottom-0 right-0 rounded-tr-xl rounded-tl-xl'></div>
                        </div>
                    </div>
                    <div>Mar</div>
                </div>
                {/* <div className='w-30px'>
                    <div className='w-[20px] h-[319px] absolute top-3'>
                        <div className='w-[100%] h-[100%] relative'>
                            <div className='bg-blue-400 w-[50%] h-[80%] absolute bottom-0 rounded-tr-xl rounded-tl-xl' ></div>
                            <div className='bg-blue-600 w-[50%] h-[30%] absolute bottom-0 right-0 rounded-tr-xl rounded-tl-xl'></div>
                        </div>
                    </div>
                    <div>Apr</div>
                </div> */}
                <div className='w-30px'>
                    <div className='w-[20px] h-[319px] absolute top-3'>
                        <div className='w-[100%] h-[100%] relative'>
                            <div className='bg-blue-400 w-[50%] h-[80%] absolute bottom-0 rounded-tr-xl rounded-tl-xl' ></div>
                            <div className='bg-blue-600 w-[50%] h-[30%] absolute bottom-0 right-0 rounded-tr-xl rounded-tl-xl'></div>
                        </div>
                    </div>
                    <div>May</div>
                </div >
                {/* <div className='w-30px'>
                    <div className='w-[20px] h-[319px] absolute top-3'>
                        <div className='w-[100%] h-[100%] relative'>
                            <div className='bg-blue-400 w-[50%] h-[80%] absolute bottom-0 rounded-tr-xl rounded-tl-xl' ></div>
                            <div className='bg-blue-600 w-[50%] h-[30%] absolute bottom-0 right-0 rounded-tr-xl rounded-tl-xl'></div>
                        </div>
                    </div>
                    <div>Jun</div>
                </div> */}
                <div className='w-30px'>
                    <div className='w-[20px] h-[319px] absolute top-3'>
                        <div className='w-[100%] h-[100%] relative'>
                            <div className='bg-blue-400 w-[50%] h-[80%] absolute bottom-0 rounded-tr-xl rounded-tl-xl' ></div>
                            <div className='bg-blue-600 w-[50%] h-[30%] absolute bottom-0 right-0 rounded-tr-xl rounded-tl-xl'></div>
                        </div>
                    </div>
                    <div>Jul</div>
                </div>
                {/* <div className='w-30px'>
                    <div className='w-[20px] h-[319px] absolute top-3'>
                        <div className='w-[100%] h-[100%] relative'>
                            <div className='bg-blue-400 w-[50%] h-[80%] absolute bottom-0 rounded-tr-xl rounded-tl-xl' ></div>
                            <div className='bg-blue-600 w-[50%] h-[30%] absolute bottom-0 right-0 rounded-tr-xl rounded-tl-xl'></div>
                        </div>
                    </div>
                    <div>Aug</div>
                </div> */}
                <div className='w-30px'>
                    <div className='w-[20px] h-[319px] absolute top-3'>
                        <div className='w-[100%] h-[100%] relative'>
                            <div className='bg-blue-400 w-[50%] h-[80%] absolute bottom-0 rounded-tr-xl rounded-tl-xl' ></div>
                            <div className='bg-blue-600 w-[50%] h-[30%] absolute bottom-0 right-0 rounded-tr-xl rounded-tl-xl'></div>
                        </div>
                    </div>
                    <div>Sep</div>
                </div>
                {/* <div className='w-30px'>
                    <div className='w-[20px] h-[319px] absolute top-3'>
                        <div className='w-[100%] h-[100%] relative'>
                            <div className='bg-blue-400 w-[50%] h-[80%] absolute bottom-0 rounded-tr-xl rounded-tl-xl' ></div>
                            <div className='bg-blue-600 w-[50%] h-[30%] absolute bottom-0 right-0 rounded-tr-xl rounded-tl-xl'></div>
                        </div>
                    </div>
                    <div>Oct</div>
                </div> */}
                {/* <div className='w-30px'>
                    <div className='w-[20px] h-[319px] absolute top-3'>
                        <div className='w-[100%] h-[100%] relative'>
                            <div className='bg-blue-400 w-[50%] h-[80%] absolute bottom-0 rounded-tr-xl rounded-tl-xl' ></div>
                            <div className='bg-blue-600 w-[50%] h-[30%] absolute bottom-0 right-0 rounded-tr-xl rounded-tl-xl'></div>
                        </div>
                    </div>
                    <div>Nov</div>
                </div> */}
                <div className='w-30px'>
                    <div className='w-[20px] h-[319px] absolute top-3'>
                        <div className='w-[100%] h-[100%] relative'>
                            <div className='bg-blue-400 w-[50%] h-[80%] absolute bottom-0 rounded-tr-xl rounded-tl-xl' ></div>
                            <div className='bg-blue-600 w-[50%] h-[30%] absolute bottom-0 right-0 rounded-tr-xl rounded-tl-xl'></div>
                        </div>
                    </div>
                    <div>Dec</div>
                </div>   
            </div>


        </div>
     </div>
    )
}

export default Graph