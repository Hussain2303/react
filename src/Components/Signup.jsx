import React from 'react'
import { useForm } from "react-hook-form"
const Signup = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm()
    const delay = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        })
    }
    const onSubmit = async (data) => {
        await delay();
        console.log(data)
    }
  return (
    <>
   <div className="container m-6">
    {isSubmitting && <div>Loading...</div>}
                <form action=" " onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder="Username"
                        {...register("username", { required: { value: true, message: "This field is required" }, minLength: { value: 3, message: "Min lengthshould be 3" }, maxLength: { value: 8, message: "Max length should be 8" } })}
                        type="text"
                        className=" border-2 border-black rounded-md p-2"
                    />
                    {errors.username && <div className="text-red-600"> {errors.username.message} </div>}
                    <br />
                    <input
                        placeholder="Pssword"
                        {...register("password", { required: { value: true, message: "This field is required" }, minLength: { value: 5, message: "Min length of password should be 5" }, maxLength: { value: 8, message: "Max length of password  should be 8" } })}
                        type="password"
                        className="border-2 border-black rounded-md p-2 mt-2"
                    />
                    <br />
                    {errors.password && <div className="text-red-600"> {errors.password.message} </div>}
                    

                    <input
                        placeholder="Email"
                        {...register("Email", { required: { value: true, message: "This field is required" }})}
                        type="Email"
                        className=" border-2 border-black rounded-md p-2 mt-2"
                    />
                    <br/>
                    <input
                        placeholder="Contact"
                        {...register("Contact", { required: { value: true, message: "This field is required" }})}
                        type="text"
                        className=" border-2 border-black rounded-md p-2 mt-2"
                    />
                    <br/>
                    <input
                        disabled={isSubmitting}
                        type="Submit"
                        value="Register"
                        className=" text-dark border-2  border-black  rounded-md p-2 mt-2 active:opacity-0.3 bg-cyan-300 w-20"
                    />
                </form>
   </div>
   </>
  )
}

export default Signup