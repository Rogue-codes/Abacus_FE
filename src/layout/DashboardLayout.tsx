import DashboardNav from "../components/nav/DashboardNav"
import SideBar from "../components/sidebar/SideBar"

interface IDashboardLayout {
    children: React.ReactNode
}
export default function DashboardLayout({ children }: IDashboardLayout) {
    return (
        <div className="bg-[#F9FAFB] h-screen">
            
            <SideBar />

            <div className="w-[calc(100vw-17.3vw)] px-8 h-full ml-[17.3vw]">
                <DashboardNav/>
                {children}
            </div>

        </div>
    )
}
