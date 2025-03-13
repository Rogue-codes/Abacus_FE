/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PublicNav from "../../components/nav/PublicNav";
import { useGetPlansQuery } from "../../api/plan.api";

export default function Subscription() {
    const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly")

    const { data, isLoading } = useGetPlansQuery({})

    console.log(data)
    return (
        <div className="w-full h-screen bg-[#ECE5FF]">
            <PublicNav />

            <div className="w-full mt-24 flex flex-col justify-center items-center gap-5 bg-[#f8f7ff] h-[300px]">
                <h1 className="text-3xl text-[#160051] font-black text-center">Get Started Today</h1>
                <p className="text-xl text-[#160051] font-medium text-center">Pick a plan now</p>

                <div className="mx-auto flex justify-center items-center gap-4 w-[300px]">
                    <p className="text-green-500">Monthly</p>

                    <div className={`${cycle === "monthly" ? "bg-[#878B94]" : "bg-[#7050e7]"} w-[69px] relative h-8 rounded-[20px]`}>
                        <div className={`${cycle === "monthly" ? "left-2" : "left-[60%] "} transition-all cursor-pointer absolute z-20 w-6 top-1 left-2 h-6 bg-white rounded-full`} onClick={() => setCycle(cycle === 'monthly' ? "yearly" : "monthly")}></div>
                    </div>

                    <p className="text-green-500">Yearly</p>
                </div>
            </div>

            <div className="w-full mt-12 flex justify-center items-center gap-6">
                {
                    data?.data.map((plan: any, index: number) => (
                        <div className={`${index === 1 ? "h-full" : "h-[462px]"} p-5  w-[314px] shadow-xl rounded-[10px] bg-white`} key={plan.id}>
                            <div>
                                <h2 className="text-xl font-bold text-[#1E1E1E] text-center">{plan.name}</h2>
                                <p className="text-md font-medium my-4 text-[#656565] text-center">Perfect to get started</p>
                                <p className="text-xl font-semibold text-[#1E1E1E] text-center">{plan.currency} {plan.price}</p>
                                <button className="w-full my-4 h-14 rounded-md bg-[#7050e7] cursor-pointer text-white disabled:opacity-50 disabled:cursor-not-allowed" disabled={index === 0}>GET STARTED</button>
                            </div>

                            <div>
                                {plan.features.map((feature: any, index: number) => (
                                    <div key={index}>
                                        <li className="my-3">{feature}</li>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
