import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/UserContext";
import { FaEye,FaEyeSlash} from 'react-icons/fa';
import toast from "react-hot-toast";



const Login = () => {
    const {UserSignIn} = useContext(AuthContext)
    const[showPassword,setShowPassword] =useState(false);
    const handleLogin =e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData (e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password)

        if(password.length < 6){ 
            toast.error('Password must be at least 6 characters')
            return;
        } else if(!/[A-Z]/.test(password)){
            toast.error('Password must be at least one upper case characters')
            return;
        }

        UserSignIn(email,password)
        .then(result =>{
            console.log(result.user)
            toast.success('Login Successfully')
           
        })
        .catch(error =>{
            console.error(error)
            
        })
    }
    return (
        <div>
            <Navbar></Navbar>
           <div className="flex justify-center items-center">
           <div className="card flex-shrink-0 w-full  max-w-md shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <h2 className="text-3xl font-semibold text-center mb-4">Login your account</h2>
                       <span className="border-b my-4"></span>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email address</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered bg-[#F3F3F3] " name="email" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                       <div className="relative">
                       <input type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered bg-[#F3F3F3] w-full" name="password" required />
                       <span className="absolute top-3 right-4" onClick={() => setShowPassword(!showPassword)}>{
                                showPassword ? <FaEyeSlash className="text-2xl"></FaEyeSlash> : <FaEye className="text-2xl"></FaEye>
                            }</span>
                       </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-black text-white">Login</button>
                    </div>
                    <p className="text-center">Dont’t Have An Account ? <Link to='/register'><button className="btn btn-link text-red-400">Register</button></Link></p>
                </form>
            </div>
           </div>
        </div>
    );
};

export default Login;