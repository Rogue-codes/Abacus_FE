import { UseFormRegister, UseFormSetValue } from "react-hook-form"
import { IForm } from "../../views/auth/Register"

interface ITextBox {
    label: string
    placeholder: string
    register: UseFormRegister<IForm>
    setValue: UseFormSetValue<IForm>
}
export default function TextBox({label,placeholder,register,setValue}: ITextBox) {
  return (
    <div className="mt-3">
    <label htmlFor="" className="text-sm text-white ">{label}</label>
    <textarea {...register('address')} onChange={(e)=>{
      const value = e.target.value
      setValue('address', value)
    }} className='p-4 w-full rounded-[10px] mt-2 bg-white focus:outline-none' rows={4} name="" id="" placeholder={placeholder} />
    </div>
  )
}
