/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from 'react-router-dom';
import { Icons } from '../icons';
import { useSelector } from 'react-redux';

export default function DashboardNav() {
    const location = useLocation();
    const { pathname } = location;
    const user = useSelector((state: any) => state?.auth?.user);
    return (
        <div className='w-full h-[120px] mt-6 flex justify-between items-center'>
            {
                pathname === '/dashboard' ?
                    <div>
                        <h1 className='text-2xl font-semibold text-[#000819]'>Hi {user?.business_name}</h1>
                        <p className='text-md text-[#000819] mt-2'>Welcome back, it’s nice to see you again.</p>
                    </div>
                    :
                    <h1 className='text-2xl font-bold'>{pathname}</h1>
            }
            <div className='flex justify-start items-center gap-5'>
                <Icons.notification />
                <Icons.search />
                <div className='w-12 h-12 border-2 rounded-full flex justify-center items-center bg-[#160051]'>
                    <Icons.ProfileWhite />
                </div>


            </div>
        </div>
    )
}
