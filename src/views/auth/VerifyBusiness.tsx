/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import OtpInput from '../../components/input/Otp'
import { useVerifyBusinessMutation } from '../../api/auth.api';
import { enqueueSnackbar } from 'notistack';
import { paths } from '../../routes/paths';
import { useNavigate } from 'react-router-dom';

export default function VerifyBusiness() {
    const [otp, setOtp] = useState("");
    const onChange = (value: string) => setOtp(value);

    const [verifyBusiness, { isLoading }] = useVerifyBusinessMutation()
    const email = JSON.parse(localStorage.getItem("email")!)

    const navigate = useNavigate()

    const handleVerifyBusiness = () => {
        verifyBusiness({
            email,
            otp
        }).unwrap().then((res) => {
            enqueueSnackbar(res.message, { variant: "success" });
            navigate(`${paths.LOGIN}`)
        }).catch((err) => {
            enqueueSnackbar(err?.data?.message, { variant: "error" });
        })
    }

    useEffect(() => {
        if (otp.length === 6) {
            handleVerifyBusiness()
        }
    }, [otp,email])

    return (
        <div>
            <h1 className='text-3xl font-bold text-white text-center'>Verify Business</h1>
            <p className='text-md py-3 text-white text-center'>Enter the OTP sent to your email address </p>
            <OtpInput value={otp} valueLength={6} onChange={onChange} />
            {
                isLoading && (<p className='text-sm text-center mt-5 text-white'>Loading...</p>)
            }
        </div>
    )
}
