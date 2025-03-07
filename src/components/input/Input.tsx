/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, Controller } from "react-hook-form"
import { IForm } from "../../views/auth/Register"
import { useState } from "react"
import { ILoginForm } from "../../views/auth/Login"

interface Iinput {
    label: string
    placeholder: string
    control: Control<IForm | ILoginForm, any>
    name: any
    type?: string
}
export default function Input({ label, placeholder, control, name, type }: Iinput) {
    const [inputType, setInputType] = useState(type)
    return (
        <div className="mt-8 relative">
            <label htmlFor="" className="text-sm text-white ">{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (<input {...field} onChange={(e)=>{
                    field.onChange(e)
                }} className='h-[56px] px-4 w-full rounded-[10px] mt-2 bg-white focus:outline-none' type={type ? inputType : "text"} name="" id="" placeholder={placeholder} />
                )}
            />

           {type && <p className="absolute cursor-pointer top-12 right-4" onClick={()=>setInputType(inputType ==="password" ? "text" : type)}>{inputType === "text" ? "hide" : "show"}</p>}
        </div>
    )
}
