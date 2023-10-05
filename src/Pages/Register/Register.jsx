import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/UserContext";
import toast from "react-hot-toast";
import { FaEye,FaEyeSlash} from 'react-icons/fa';


const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [registerError,setRegisterError] = useState('')
    const [showPassword,setShowPassword] = useState(false);
    const handleRegister =e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData (e.currentTarget)

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        const accepted = e.target.terms.checked
        setRegisterError('')
        console.log(name,photo,email,password,accepted);

        if(password.length < 6){ 
            toast.error('Password must be at least 6 characters')
            return;
        } else if(!/[A-Z]/.test(password)){
            toast.error('Password must be at least one upper case characters')
            return;
        } else if(!accepted){
            toast.error('Please accept our terms and conditions')
            return;
        }
        // createUser
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            toast.success('Registration Successfully')
        })
        .catch(error =>{
            console.error(error)
            setRegisterError('Email Already in use')
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center items-center">
                <div className="card flex-shrink-0 w-full  max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h2 className="text-3xl font-semibold text-center mb-4">Register your account</h2>
                        <span className="border-b my-4"></span>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" className="input input-bordered bg-[#F3F3F3] " name="name" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo URL" className="input input-bordered bg-[#F3F3F3] " name="photo" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email address</span>
                            </label>
                            <input type="email"
                             placeholder="email" className="input input-bordered bg-[#F3F3F3] " name="email" required />
                            
                        </div>
                        {
                        registerError && <p className="text-red-600">{registerError}</p>
                    }
                        <div className="form-control" >
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                           <div className=" relative">
                           <input type={showPassword ? 'text' : "password"}
                             placeholder="password" className="input input-bordered bg-[#F3F3F3] w-full" name="password" required />
                            <span className="absolute top-3 right-4" onClick={() => setShowPassword(!showPassword)}>{
                                showPassword ? <FaEyeSlash className="text-2xl"></FaEyeSlash> : <FaEye className="text-2xl"></FaEye>
                            }</span>
                           </div>
                            </div>
                             <div className="flex mt-4">
                             <input type="checkbox" className="checkbox mr-3" name="terms" id="terms" />
                            
                             <label htmlFor="terms">Accept <a href="">Terms & Condition</a></label>
                             </div>
                           
                       
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-black text-white">Register</button>
                        </div>
                        <p className="text-center">Already Have An Account ? <Link to='/login'><button className="btn btn-link text-red-400">Login</button></Link></p>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Register;