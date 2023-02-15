import React from 'react'
import Avatar2 from "../assets/Avatar2.png"
import Avatar3 from "../assets/Avatar3.png"
const Favrt_Transaction = () => {
    return (
        <main className="flex flex-col gap-5 bg-white p-3 rounded-lg">
            <section className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-xl">Favourite Transfers</h3>
                <span className="text-sm font-semibold text-slate-500 cursor-pointer hover:text-slate-600">
                    See All
                </span>
            </section>
            <section className="flex flex-col gap-3">
                <div className="border flex gap-3 items-center p-3 rounded-lg">
                    <span>
                        <img src={Avatar2} alt="Avatar2" />
                    </span>
                    <p className=" font-semibold text-lg">Kathryn Murphy</p>
                </div>
                <div className="border flex gap-3 items-center p-3 rounded-lg">
                    <span>
                        <img src={Avatar3} alt="Avatar3" />
                    </span>
                    <p className="font-semibold text-lg">Wade Warren</p>
                </div>
            </section>
        </main>
    )
}

export default Favrt_Transaction
