import { PiWarningCircleLight } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import { paths } from '../../routes/paths'

export default function PlanToast() {
    const navigate = useNavigate()
    return (
        <div className='w-[calc(100vw-17.3vw)] px-8 ml-[17.3vw] h-14 border border-gray-50 fixed top-0 left-0 z-50 bg-white flex justify-between items-center'>
            <div className='flex justify-start items-center gap-3'>
                <PiWarningCircleLight size={30} color='orange' />
                <p className='text-sm'>You're using the free Tier of Abacus. Upgrade your plan to unlock more features</p>
            </div>

            <button className='p-2 px-12 rounded-md text-white cursor-pointer bg-[#cc33ba]' onClick={() => navigate(paths.SUBSCRIPTION)}>Upgrade</button>
        </div>
    )
}
