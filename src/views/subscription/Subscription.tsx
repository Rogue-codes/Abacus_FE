/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import PublicNav from "../../components/nav/PublicNav";
import { useGetPlansQuery, useSubscribeMutation } from "../../api/plan.api";
import Modal from "../../components/modals/Modal";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";

type TFormData = {
    business_email: string;
    is_reoccuring: boolean;
};

export default function Subscription() {
    const [cycle, setCycle] = useState<"MONTHLY" | "YEARLY">("MONTHLY")

    const { data, isLoading } = useGetPlansQuery({})

    const [selectedPlan, setSelectedPlan] = useState<null | { id: string; name: string }>(null)
    const [showModal, setShowModal] = useState<boolean>(false)

    console.log(data)

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset
    } = useForm<TFormData>({
        defaultValues: {
            business_email: "",
            is_reoccuring: false,
        },
    });

    const formValues = watch()

    const { business_email, is_reoccuring } = formValues

    const [subscribe, { data: subscriptionData, isLoading: isSubscribing, isSuccess: isSubscribed }] = useSubscribeMutation()



    const onSubmit = (res: any) => {
        console.log("res", res)
        subscribe({ business_email, is_reoccuring, plan: selectedPlan?.id as string, cycle }).unwrap().then(() => {
            reset()
        }).catch((err) => {
            console.log(err)
        });
        // Handle subscription logic here (API call, etc.)
    };

    useEffect(() => {
        if (isSubscribed) {
            enqueueSnackbar(`Subscription created successfully`, {
                variant: "success",
                anchorOrigin: { vertical: "top", horizontal: "right" },
            });

            window.open(subscriptionData.payment_link, "_blank");

            console.log("subscriptionData", subscriptionData)
        }
    }, [isSubscribed, subscriptionData])

    return (
        <div className="w-full h-screen bg-[#ECE5FF]">
            <PublicNav />

            <div className="w-full mt-24 flex flex-col justify-center items-center gap-5 bg-[#f8f7ff] h-[300px]">
                <h1 className="text-3xl text-[#160051] font-black text-center">Get Started Today</h1>
                <p className="text-xl text-[#160051] font-medium text-center">Pick a plan now</p>

                <div className="mx-auto flex justify-center items-center gap-4 w-[300px]">
                    <p className="text-green-500">Monthly</p>

                    <div className={`${cycle === "MONTHLY" ? "bg-[#878B94]" : "bg-[#7050e7]"} w-[69px] relative h-8 rounded-[20px]`}>
                        <div className={`${cycle === "MONTHLY" ? "left-2" : "left-[60%] "} transition-all cursor-pointer absolute z-20 w-6 top-1 left-2 h-6 bg-white rounded-full`} onClick={() => setCycle(cycle === 'MONTHLY' ? "YEARLY" : "MONTHLY")}></div>
                    </div>

                    <p className="text-green-500">Yearly</p>
                </div>
            </div>

            <div className="w-full mt-12 flex justify-center items-center gap-6">
                {isLoading ? (<div className="h-[462px] w-full flex justify-center items-center ">
                    <p>Loading...</p>
                </div>) : <>{
                    data?.data.map((plan: any, index: number) => (
                        <div className={`${index === 1 ? "h-full" : "h-[462px]"} p-5  w-[314px] shadow-xl rounded-[10px] bg-white`} key={plan.id}>
                            <div>
                                <h2 className="text-xl font-bold text-[#1E1E1E] text-center">{plan.name}</h2>
                                <p className="text-md font-medium my-4 text-[#656565] text-center">Perfect to get started</p>
                                <p className="text-xl font-semibold text-[#1E1E1E] text-center">{plan?.currency} {cycle === "MONTHLY" ? Number(plan.price).toLocaleString() : (plan.price * 12).toLocaleString()}</p>
                                <button className="w-full my-4 h-14 rounded-md bg-[#7050e7] cursor-pointer text-white disabled:opacity-50 disabled:cursor-not-allowed" disabled={index === 0}
                                    onClick={() => {
                                        setSelectedPlan(plan)
                                        setShowModal(true)
                                    }}
                                >GET STARTED</button>
                            </div>

                            <div>
                                {plan.features.map((feature: any, index: number) => (
                                    <div key={index}>
                                        <li className="my-3">{feature}</li>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </>

                }
            </div>


            {showModal && <Modal>
                <div className="w-[30vw] h-[30vh] p-12 bg-white rounded-2xl">
                    <p className="text-center text-2xl font-bold mb-3">{selectedPlan?.name}</p>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <input type="email"
                            {...register("business_email", { required: "Email is required" })}
                            className="w-full px-3 h-[50px] border-gray-300 bg-white rounded-lg border focus:outline-none" placeholder="business email" />
                        {errors.business_email && <p className="text-red-500 text-sm">{errors.business_email.message}</p>}


                        <label className="flex mt-5 items-center gap-2">
                            <input type="checkbox"  {...register("is_reoccuring")} className="w-6 h-6" />
                            re-occurring
                        </label>
                        <button disabled={!business_email || isSubscribing} className="w-full cursor-pointer py-4 text-white mt-5 bg-[#7050e7] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">
                            {isSubscribing ? "Loading..." : "Submit"}
                        </button>
                    </form>
                </div>
            </Modal>}
        </div>
    )
}
