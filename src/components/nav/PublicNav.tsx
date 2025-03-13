import { useNavigate } from 'react-router-dom'
import { logo } from '../../assets'
import { paths } from '../../routes/paths'

export default function PublicNav() {
  const linkaArr = ["Home", "Support", "Blog", "Pricing"]
  const navigate = useNavigate()
  return (
    <nav className='w-full h-[96px] border-b-2 border-gray-100 shadow flex justify-between items-center px-12 fixed left-0 top-0 z-50 bg-white'>
      <div>
        <img src={logo} alt="" />
      </div>

      <div className='w-[40%] flex justify-between items-center font-medium text-[#160051]'>
        {linkaArr.map((link, index) => (
          <p key={index} className=''>{link}</p>
        ))}
      </div>

      <div className='w-[12%] flex justify-between items-center'>
        <button className='px-3 py-2 border-2 text-[#160051] font-medium border-[#160051] rounded-lg'  onClick={() => navigate(`${paths.LOGIN}`)}>Login</button>
        <button className='border-2 border-[#cc33ba] text-[#cc33ba] font-medium px-3 py-2 rounded-lg' onClick={() => navigate(`${paths.REGISTER}`)}>Sign Up</button>
      </div>
    </nav>
  )
}

