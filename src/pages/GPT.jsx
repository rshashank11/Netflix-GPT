import React from "react"
import { useForm } from "react-hook-form"
import { openai } from "../api/baseAPI"

const GPT = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  async function onSubmit(data) {
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "search", content: "Kannada horror movies" }],
      model: "gpt-3.5-turbo",
    })
  }
  return (
    <div className="bg-header h-screen w-screen flex justify-center">
      <form
        className="bg-black w-[500px] mt-4 rounded-full h-[100px] flex justify-center items-center gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="py-2 pl-5 w-[300px] rounded-md outline-none"
          id="search-text"
          name="search-text"
          {...register("search-text")}
          type="text"
          placeholder="What would you like to watch today?"
        />
        <button
          className=" text-white bg-netflixRed py-2 px-5 rounded-md"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default GPT
