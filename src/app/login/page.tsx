"use client"

import Image from 'next/image'
import {useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {redirect} from "next/navigation";
import {useForm} from "react-hook-form";
import {loginSchema, LoginSchema} from "@/app/schema/login.schema";
import {zodResolver} from "@hookform/resolvers/zod";


export default function LoginPage() {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handleVisibility = () => {
        setShowPassword((v)=>!v)
    }

    const handleOnSubmit = (data:LoginSchema) => {

    }

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema)
    })

    return (
        // Container wrapper
        <div className="flex w-screen h-screen overflow-hidden justify-center items-center bg-[#dfdfde]">

            {/*
            Card Wrapper
            */}
            <div className="w-1/2 h-[650px] flex items-center justify-center rounded-2xl shadow-lg p-6 bg-white">
                {/* Left Side */}
                <div className="w-1/2 flex flex-col items-center justify-center border-r p-6 gap-5"> {/* Adjusted gap */}
                    <Image
                        src={"/rimberio.png"}
                        color={"black"}
                        alt="Car logo"
                        width={200}
                        height={200}
                    />
                    <Image
                        src={"/car-logo.png"}
                        alt="Car logo"
                        width={330}
                        height={265}
                    />
                </div>

                {/* Right Side */}
                <div className="flex flex-col w-1/2 pl-8 justify-center gap-4">
                    <h1 className="text-2xl font-bold font-inter">Get started now</h1>
                    <form
                    onSubmit={handleSubmit(handleOnSubmit)}>
                        <label className={"font-bold text-sm"}>
                            Email
                        </label>
                        <input
                            {...register("email")}
                            placeholder={"mail@mail.com"}
                            style={{
                                borderColor: "#CED4DA"
                            }}
                            className={"w-full h-[40px] rounded rounded-lg flex px-4 border placeholder-text-sm"}
                            id={"email"} type={"email"} />

                        {errors.email && <p className={"text-sm text-red-500 mt-1"}>{errors.email.message}</p>}

                        <label className={"font-bold text-sm"}>
                            Password
                        </label>

                        <div className={"relative flex items-center"}>
                            <input
                                {...register("password")}
                                id={"password"}
                                style={{
                                    borderColor: "#CED4DA",
                                    paddingRight: "40px",
                                }}
                                placeholder={"******"}
                                type={showPassword ? "text" : "password"}
                                className={"w-full h-[40px] rounded rounded-lg flex px-4 border border-grey-400"} />
                            {!showPassword ? <FaEye
                                type="button"
                                onClick={handleVisibility}
                                className={"absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer focus:outline-none"}
                            >
                                Logo
                            </FaEye> : <FaEyeSlash
                                type="button"
                                onClick={handleVisibility}
                                className={"absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer focus:outline-none"}
                            />}
                        </div>
                        {errors.password && <p className={"text-sm text-red-500"}>{errors.password.message}</p>}


                        <button
                            style={{
                                color: "#967617"
                            }}
                            type={"button"}
                            className={"font-semibold mt-2 text-sm flex justify-end w-full"}
                        >
                            Forgot Password
                        </button>

                        <button
                            style={{
                                background: "#967617",
                                color: "white",
                                cursor: "pointer"
                            }}
                            className={"font-poppins text-xl mt-4 w-full h-[40px] justify-center bg-gold rounded rounded-md"}
                            type={"submit"}
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}