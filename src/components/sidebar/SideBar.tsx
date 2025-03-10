/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { logo } from '../../assets'
import { Icons } from '../icons'
import { useLocation, useNavigate } from 'react-router-dom';

export default function SideBar() {
    const modules = JSON.parse(localStorage.getItem('abacus-user')!).modules;
    const desiredOrder = [
        "DASHBOARD",
        "INVOICE",
        "INVENTORY",
        "CUSTOMERS",
        "REPORTING",
        "WALLET",
        "PROFILE",
        "SETTINGS"
    ];


    // Filter and sort the modules based on the predefined order
    const sortedModules = modules
        .filter((module: string) => desiredOrder.includes(module)) // Keep only valid modules
        .sort((a: string, b: string) => desiredOrder.indexOf(a) - desiredOrder.indexOf(b));

    const navigate = useNavigate();
    const location = useLocation();
    const {pathname} = location

    return (
        <aside className='w-[17vw] shadow fixed left-0 top-0 h-screen bg-[#fff]'>
            <div className='w-full flex justify-center items-center my-12'>
                <img src={logo} alt="" />
            </div>

            <div className='pl-16 pr-8'>
                {
                    sortedModules.map((module: any, index: number) => (
                        <div key={index} className={`${pathname.split("/")[1].toUpperCase() === module ? "border border-black" : "border-0"} w-full pl-4 py-3 gap-5 flex justify-start rounded-md cursor-pointer items-center my-4 `} onClick={()=>navigate(`/${module.toLowerCase()}`)}>
                            {module === "REPORTING" && <Icons.Report />}
                            {module === "DASHBOARD" && <Icons.Dashboard />}
                            {module === "WALLET" && <Icons.Wallet />}
                            {module === "PROFILE" && <Icons.Profile />}
                            {module === "CUSTOMERS" && <Icons.Customers />}
                            {module === "INVENTORY" && <Icons.Inventory />}
                            {module === "INVOICE" && <Icons.Invoice />}
                            {module === "SETTINGS" && <Icons.Settings />}
                            <p className='text-[#000819] text-lg font-medium'>{module}</p>
                        </div>
                    ))
                }
            </div>
        </aside >
    )
}
