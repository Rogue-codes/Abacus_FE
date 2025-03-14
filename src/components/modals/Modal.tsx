import { ReactNode } from "react"

interface IModal{
    children:ReactNode
}
export default function Modal({children}:IModal) {
  return (
    <div className='w-full h-screen fixed left-0 top-0 bg-[#33333334] flex justify-center items-center z-50'>
      {children}
    </div>
  )
}
