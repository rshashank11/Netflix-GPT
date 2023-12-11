// import React, { useEffect } from "react"
// import { useForm } from "react-hook-form"
// // import { signInWithEmailAndPassword } from "firebase/auth"
// // import { auth } from "../utils/firebase"

// import Header from "../components/Header"

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     setError,
//     formState: { errors },
//     control,
//   } = useForm()

//   function onSubmit(data) {
//     // signInWithEmailAndPassword(auth, data.email, data.password)
//     //   .then((userCredential) => {
//     //     const user = userCredential.user
//     //   })
//     //   .catch((error) => {
//     //     setError("submit", { type: "custom", message: error.message })
//     //   })
//   }

//   return (
//     <div className="bg-header min-h-full">
//       <Header />
//       <div className="h-screen">
//         <div className=" w-[450px] mt-4 h-[600px] px-[68px] pt-[60px] mb-[90px] m-auto bg-black/80">
//           <form onSubmit={handleSubmit(onSubmit)} className="">
//             <h1 className="text-white text-[32px] font-bold  mb-[28px]">
//               Sign In
//             </h1>
//             <input
//               className="bg-inputBg outline-none rounded-[5px] text-inputText w-[314px] mb-1 h-[48px] py-2 px-5"
//               placeholder="Email or phone number"
//               name="email"
//               type="email"
//               {...register("email", {
//                 required: "Email required.",
//                 validate: (value) => {
//                   if (!value.includes("@") || !value.includes(".com")) {
//                     return "Please enter a valid email address or phone number."
//                   }
//                 },
//               })}
//             />
//             <div className="error-container font-medium text-error text-[13px] mb-4">
//               {errors?.email?.message.length > 0 && (
//                 <p className="error-message">{errors?.email?.message}</p>
//               )}
//             </div>
//             <input
//               className="bg-inputBg outline-none rounded-[5px] text-inputText w-[314px] mb-1 h-[48px] py-2 px-5"
//               placeholder="Password"
//               type="password"
//               id="password"
//               name="password"
//               {...register("password", {
//                 required: { value: true, message: "Password required." },
//                 minLength: {
//                   value: 4,
//                   message:
//                     "Your password must contain between 4 and 60 characters.",
//                 },
//                 maxLength: {
//                   value: 60,
//                   message:
//                     "Your password must contain between 4 and 60 characters.",
//                 },
//               })}
//             />
//             <div className="error-container font-medium text-error text-[13px] mb-9">
//               {errors?.password?.message}
//             </div>
//             <div className="error-container font-medium text-error text-[13px] mb-9">
//               {errors?.submit?.message}
//             </div>
//             {/* <div>{userEmail}</div> */}
//             <button
//               className="w-[314px] font-bold rounded-[5px] text-white bg-red py-3"
//               type="submit"
//             >
//               Sign In
//             </button>
//           </form>
//           <div className="text-inputText mt-3 text-[13px] font-[400] flex flex-row justify-between align-middle">
//             <label className="" htmlFor="remember-me">
//               <input
//                 className="accent-inputText mr-1"
//                 id="remember-me"
//                 type="checkbox"
//               />
//               Remember Me
//             </label>
//             <p className="inline">Need help?</p>
//           </div>
//           <div className="text-white mt-20">
//             <p className="text-[16px] text-inputText font-[400]">
//               New to Netflix? <span className="text-white">Sign up now.</span>
//             </p>
//             <p className="text-[13px] mt-10">
//               This page is protected by Google reCAPTCHA to ensure you're not a
//               bot. Learn more.
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* <div className="h-[200px]"></div> */}
//     </div>
//   )
// }

// export default Login
