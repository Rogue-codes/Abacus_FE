/* eslint-disable @typescript-eslint/no-unused-vars */
import PublicNav from '../../components/nav/PublicNav'
import { lady } from '../../assets'
import Input from '../../components/input/Input'
import TextBox from '../../components/input/TextBox'
import Stepper from '../../components/stepper/Stepper'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRegisterMutation } from '../../api/auth.api'
import { enqueueSnackbar } from 'notistack'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { paths } from '../../routes/paths'
import VerifyBusiness from './VerifyBusiness'

export interface IForm {
    first_name: string
    last_name: string
    business_name: string
    email: string
    phone: string
    address: string
    password: string
    confirm_password: string
}

export default function Register() {
    const { setValue, watch, register, control, formState: { isValid }, reset } = useForm<IForm>({
        defaultValues: {
            first_name: '',
            last_name: '',
            business_name: '',
            email: '',
            phone: '',
            address: '',
            password: '',
            confirm_password: ''
        }
    })
    const [currentStep, setCurrentStep] = useState(1)
    const [searchParams] = useSearchParams();
    const verify = searchParams.get("verify");    
    const navigate = useNavigate()

    const formVal = watch()

    console.log("formVal", formVal)



    const [register_, { isLoading, isSuccess }] = useRegisterMutation()

    const onSubmit = () => {
        register_({ ...formVal })
            .unwrap()
            .then((res) => {
                localStorage.setItem("email", JSON.stringify(formVal.email))
                console.log(res);
                enqueueSnackbar("Registration Successful", { variant: "success" });
                navigate(`${paths.REGISTER}?verify=true`)
                window.location.reload()
            })
            .catch((err) => {
                console.log(err);

                // Check if error response has a 'data' object
                if (err?.data) {
                    console.log("object entrie", Object.entries(err.data));
                    Object.entries(err.data).forEach(([_key, messages]) => {
                        if (Array.isArray(messages)) {
                            messages.forEach((message) => {
                                enqueueSnackbar(`${message}`, { variant: "error" });
                            });
                        }
                    });
                } else {
                    enqueueSnackbar("Registration Failed", { variant: "error" });
                }
            });
    };

    const handleBtnClick = () => {
        if (currentStep === 1) {
            setCurrentStep(2)
        } else {
            onSubmit()
            reset()
        }
    }
    return (
        <div>
            <PublicNav />
            <div className='w-full h-screen flex pt-24'>
                <div className='w-1/2 h-full flex justify-center items-center'>
                    <div>
                        <img src={lady} alt="" />
                    </div>
                </div>

                <div className='w-1/2 h-full bg-[#160051] flex justify-center items-center'>
                {
                    verify ? (
                        <div>
                            <VerifyBusiness/>
                        </div>
                    ): (<div>
                        <Stepper currentStep={currentStep} steps={2} />
                        <div className='w-[30vw] '>
                            <form>
                                {/* Step 1 Fields */}
                                <div className={currentStep === 1 ? "block" : "hidden"}>
                                    <Input name="first_name" control={control} label="First Name" placeholder="Enter your first name" />
                                    <Input name="last_name" control={control} label="Last Name" placeholder="Enter your last name" />
                                    <Input name="business_name" control={control} label="Business Name" placeholder="Enter your business name" />
                                    <Input name="email" control={control} label="Email" placeholder="Enter your email" />
                                </div>

                                {/* Step 2 Fields */}
                                <div className={currentStep === 2 ? "block" : "hidden"}>
                                    <Input name="phone" control={control} label="Phone" placeholder="Enter your phone number" />
                                    <TextBox setValue={setValue} register={register} label="Address" placeholder="Enter your address" />
                                    <Input name="password" control={control} label="Password" placeholder="Enter your password" type="password" />
                                    <Input name="confirm_password" control={control} label="Confirm Password" placeholder="Confirm your password" type="password" />
                                </div>


                            </form>
                            <div className='flex justify-center items-center'>
                                {currentStep > 1 && <button className='w-48 h-14 cursor-pointer py-2 mx-auto flex justify-center items-center mt-12 border border-[#cc33ba] text-white rounded-lg' onClick={() => setCurrentStep(currentStep - 1)}>Back</button>}
                                <button disabled={!isValid} className='w-48 h-14 cursor-pointer py-2 mx-auto flex justify-center items-center mt-12 bg-[#cc33ba] text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed' onClick={handleBtnClick}>{currentStep === 1 ? "Proceed" : isLoading ? "Loading..." : "Submit"}</button>
                            </div>

                        </div>
                    </div>)
                }
                    

                </div>
            </div>
        </div>
    )
}
