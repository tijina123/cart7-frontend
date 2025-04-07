import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import useHandleChange from'../user/useHandleChange'
import "./UserLogin.css";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Form, Link, useNavigate } from "react-router-dom";
import { MdPhoneAndroid } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import Swal from 'sweetalert2';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserService from '../../services/user-api-services/UserService';

const Register = () => {
    const navigate = useNavigate();
   let {postRegister} = UserService()

    const {state:fields,handleChange:customHandleChange} = useHandleChange({
        name: "",
        email:"",
        phonenumber: "",
        password: "",
    });

    const [errorFields, setErrorFields] = useState({
        name: false,
        phonenumber: false,
        password: false,
    });

    const handleChange = (event) => {
        customHandleChange(event)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // if (isFormValid()) {
        if (true) {
            try {
                console.log("it is valid");
                console.log(fields);

			const response = await postRegister(fields)
                if (response?.data?.message === "Account has been created successfully") {
                    toast.success("Account has been Created");
                   setTimeout(() => {
                        navigate("/user-login");
                    }, 5000);
                }
                console.log(response,"====================++++++++++++");
                
                // toast.success("Account has been Created");
                // Swal.fire('', "responsemessage", 'error')
                            
			// if (response?.success) {
			// Swal.fire('', response?.message, 'success')
			// 	getPrivateRoomDetailsData()
			// 	getPrivateRoomId();
			// 	handleClosePrivateAdd()
			// }
			// else {
			// 	Swal.fire('', response?.message, 'error')
			// }
            } catch (error) {
                console.log("it is login error catch");
                console.log(error);
                Swal.fire('', error?.response?.data?.message, 'error')
            }
        } else {
            console.log("it is not valid");
        }
    };

    const isFormValid = () => {
        console.log(fields);
        const errors = {
            name: false,
            phonenumber: false,
            password: false,
        };

        if (fields.name === "") {
            errors.name = true;
        }
        if (fields.phonenumber === "" || fields.phonenumber.length != 10 || /^[A-Za-z]+$/.test(fields.phonenumber)) {
            errors.phonenumber = true;
        }
        if (fields.password === "") {
            errors.password = true;
        }

        setErrorFields(errors);

        if (Object.values(errors).some((error) => error === true)) {
            console.log("false");
            return false;
        }
        console.log("true");
        return true;
    };
  return (
    <div className="max-w-full w-full min-h-full user-ogin-background flex justify-center items-center p-2">
            <form
                onSubmit={handleSubmit}
                className="max-w-[300px] w-full min-h-[450px] bg-white rounded-md flex flex-col items-center p-5"
            >
                <h1 className="mt-4 mb-8 font-bold text-[25px] text-[#494646]">User Register</h1>
                <div className="mb-8 w-full ">
                    <label htmlFor="" className="text-sm ">
                        Username
                    </label>
                    <div className="border-b-[1px] border-[#8ce0e0] relative w-full">
                        <div className="absolute left-0 top-1">
                            <FaUserCircle className='text-[#666565]' />
                        </div>
                        <input
                            type="text"
                            placeholder="Username"
                            name="name"
                            className="pl-5 w-full text-sm h-full outline-none "
                            onChange={handleChange}
                        />
                    </div>
                    {errorFields.name && <p className="text-xs text-[red]">Name is required</p>}
                </div>
                <div className="mb-8 w-full ">
                    <label htmlFor="" className="text-sm ">
                        Phone number
                    </label>
                    <div className="border-b-[1px] border-[#8ce0e0] relative w-full">
                        <div className="absolute left-0 top-1">
                            <MdPhoneAndroid className='text-[#666565]' />
                        </div>
                        <input
                            type="text"
                            placeholder="Phone Number"
                            name="phonenumber"
                            className="pl-5 w-full text-sm h-full outline-none "
                            onChange={handleChange}
                        />
                    </div>
                    {errorFields.phonenumber && <p className="text-xs text-[red]">Phone number not correct</p>}
                </div>
                <div className="mb-8 w-full ">
                    <label htmlFor="" className="text-sm ">
                        Email
                    </label>
                    <div className="border-b-[1px] border-[#8ce0e0] relative w-full">
                        <div className="absolute left-0 top-1">
                            <MdOutlineEmail className='text-[#666565]' />
                        </div>
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            className="pl-5 w-full text-sm h-full outline-none "
                            onChange={handleChange}
                        />
                    </div>
                    {errorFields.phonenumber && <p className="text-xs text-[red]">Phone number not correct</p>}
                </div>
                <div className="w-full">
                    <label htmlFor="" className="text-sm">
                        Password
                    </label>
                    <div className="border-b-[1px] border-[#8ce0e0] relative w-full">
                        <div className="absolute left-0 top-1">
                            <RiLockPasswordFill className='text-[#666565]' />
                        </div>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            className="pl-5 w-full text-sm h-full outline-none "
                            onChange={handleChange}
                        />
                    </div>
                    {errorFields.password && <p className="text-xs text-[red]">Password is required</p>}
                </div>
                <div className="mt-6 user-ogin-grad h-8 w-full flex items-center justify-center rounded-2xl">
                    <button className="text-[#5244a5]" type="submit">
                        Register
                    </button>
                </div>
                <div className="mt-6">
                    <p className="text-sm">
                        Have an account ?
                        <span className="text-[#0095F6] cursor-pointer">
                            <Link to="/user">Log in</Link>
                        </span>
                    </p>
                </div>
            </form>
            <ToastContainer />
        </div>
  )
}

export default Register