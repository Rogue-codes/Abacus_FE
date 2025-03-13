/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import PublicNav from '../../components/nav/PublicNav'
import { lady } from '../../assets'
import Input from '../../components/input/Input'
import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../../api/auth.api'
import { enqueueSnackbar } from 'notistack'
import { useEffect } from 'react'
import { loginUser } from '../../config/authSlice'
import { useDispatch } from 'react-redux'

export interface ILoginForm {
  email: string
  password: string
}

export default function Login() {
  const { watch, control, formState: { isValid }, reset } = useForm<ILoginForm>({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const formVal = watch()



  const [login, {data, isLoading, isSuccess }] = useLoginMutation()

  const onSubmit = () => {
    login({ ...formVal })
      .unwrap()
      .then((res) => {
        enqueueSnackbar("login Successful", { variant: "success" });
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
        } 
      });
  };

  const handleBtnClick = () => {
    onSubmit()
    reset()
  }

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        loginUser({
          business: data?.business,
          access_token: data?.access_token,
          refresh_token: data?.refresh_token,
        })
      );
      enqueueSnackbar(`welcome ${data?.data?.user_?.username}`, {
        variant: "success",
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    }
  }, [isSuccess]);
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
            (<div>
              <div className='w-[30vw] '>
                <form>
                  {/* Step 1 Fields */}
                  <div >
                    <Input name="email" control={control} label="Email" placeholder="Enter your email" />
                    <Input name="password" control={control} label="password" placeholder="Enter your password" type='password' />
                  </div>


                </form>
                <div className='flex justify-center items-center'>
                <button disabled={!isValid || isLoading} className='w-full h-14 cursor-pointer py-2 mx-auto flex justify-center items-center mt-12 bg-[#cc33ba] text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed' onClick={handleBtnClick}>{ isLoading ? "Loading..." : "Submit"}</button>
                </div>

              </div>
            </div>)
          }


        </div>
      </div>
    </div>
  )
}
