/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux"
import DashboardNav from "../components/nav/DashboardNav"
import PlanToast from "../components/plan/PlanToast"
import SideBar from "../components/sidebar/SideBar"

interface IDashboardLayout {
    children: React.ReactNode
}
export default function DashboardLayout({ children }: IDashboardLayout) {
    const business = useSelector((state: any) => state?.auth?.user)
    console.log("business", business)
    return (
        <div className="bg-[#E5E7EB] h-screen overflow-y-scroll">
            {business.plan === "BASIC" && <PlanToast />}

            <SideBar />

            <div className="w-[calc(100vw-17.3vw)] px-8 h-full ml-[17.3vw]">
                <DashboardNav />
                {children}
            </div>

        </div>
    )
}
