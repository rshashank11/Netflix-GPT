import React from "react"
import { useForm } from "react-hook-form"
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm()

  function onSubmit(data) {
    console.log(data)
  }
  return (
    <div className="bg-header min-h-screen">
      <div className="header w-screen h-[90px] bg-gradient-to-b from-black/90">
        <img
          className=" h-auto w-52"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
        />
      </div>
      <div className="w-[450px] h-[600px] px-[68px] pt-[60px] pb-[40px] mb-[90px] m-auto bg-black/80">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <h1 className="text-white text-[32px] font-bold  mb-[28px]">
            Sign In
          </h1>
          <input
            className="bg-inputBg outline-none rounded-[5px] text-inputText w-[314px] mb-1 h-[48px] py-2 px-5"
            placeholder="Email or phone number"
            name="email"
            type="email"
            {...register("email", {
              required: "Email required.",
              validate: (value) => {
                if (!value.includes("@") || !value.includes(".com")) {
                  return "Please enter a valid email address or phone number."
                }
              },
            })}
          />
          <div className="error-container font-medium text-error text-[13px] mb-4">
            {errors?.email?.message.length > 0 && (
              <p className="error-message">{errors?.email?.message}</p>
            )}
          </div>
          <input
            className="bg-inputBg outline-none rounded-[5px] text-inputText w-[314px] mb-1 h-[48px] py-2 px-5"
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            {...register("password", {
              required: { value: true, message: "Password required." },
              minLength: {
                value: 4,
                message:
                  "Your password must contain between 4 and 60 characters.",
              },
              maxLength: {
                value: 60,
                message:
                  "Your password must contain between 4 and 60 characters.",
              },
            })}
          />
          <div className="error-container font-medium text-error text-[13px] mb-9">
            {errors?.password?.message}
          </div>
          <button
            className="w-[314px] font-bold rounded-[5px] text-white bg-red py-3"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <div className="text-inputText mt-3 text-[13px] font-[400] flex flex-row justify-between align-middle">
          <label className="" htmlFor="remember-me">
            <input
              className="accent-inputText mr-1"
              id="remember-me"
              type="checkbox"
            />
            Remember Me
          </label>
          <p className="inline">Need help?</p>
        </div>
        <div className="text-white mt-20">
          <p className="text-[16px] text-inputText font-[400]">
            New to Netflix? <span className="text-white">Sign up now.</span>
          </p>
          <p className="text-[13px] mt-10">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
