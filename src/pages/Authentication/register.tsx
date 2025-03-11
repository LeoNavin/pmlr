// import ReCAPTCHA from 'react-google-recaptcha';
import lalogo from '../assets/LALogo.png';
import { Link, useNavigate } from 'react-router-dom';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import logo from '../../assets/LALogo.png';
const Register = () => {
    
    const navigation = useNavigate();

        const handleSubmit=()=>{
            console.log("submitted");
            navigation("/");
        }

    return (
         <div className="flex items-center justify-center h-screen">
            <div className="min-w-[350px] flex-col border border-gray-300  bg-white px-6 py-14 shadow-md rounded-[4px] ">
                <div className="mb-3 flex justify-center">
                    {/* <img class="w-24" src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo.c36eaf5e6.svg" alt="" /> */}
                    <img className="w-20 mb-[20px]" src={logo} alt="" />
                </div>
                <div className="flex flex-col text-sm rounded-md">
                    <input className="mb-5 rounded-[4px] border border-gray-300  p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="text" placeholder="Username" />
                    <input className="mb-5 border rounded-[4px]  border-gray-300  p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="password" placeholder="Password" />
                    <input className="mb-5  border rounded-[4px] border-gray-300  p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="password" placeholder="Confirm password" />
                    <input className="border rounded-[4px] p-3 border-gray-300 hover:outline-none focus:outline-none hover:border-yellow-500" type="email" placeholder="E-mail address" />
                </div>
                {/* <ReCAPTCHA
        sitekey="6LewzjwqAAAAAKBUeG71DhBdhbG59iDiIIAs756S"
            ref={recaptchaRef}
        onChange={()=>handleCaptchaChange}
    />
    <ReCAPTCHA
        sitekey="6LewzjwqAAAAAKBUeG71DhBdhbG59iDiIIAs756S"
        // size="invisible"
        ref={recaptchaRef}
        onChange={handleCaptchaChange}
        /> */}
                <button className="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-graydark text-white rounded-[4px] hover:bg-graydark hover:font-bold scale-105 duration-300" type="submit" onClick={() => handleSubmit()}>Sign Up</button>
                <div className="mt-5 flex justify-center text-sm text-gray-600">
                    <p  className=' text-gray-400 pr-2'>Have an account?</p>
                    <Link to={"/"}>Sign In</Link>
                </div>
                {/* <div class="mt-5 flex text-center text-sm text-gray-400">
    <p>
        This site is protected by reCAPTCHA and the Google <br />
        <a class="underline" href="">Privacy Policy</a>  and <a class="underline" href="">Terms of Service</a>  apply.
    </p>
    </div> */}
            </div>
        </div>
    );
}

export default Register;
