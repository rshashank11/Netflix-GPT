import React from "react"

const Footer = () => {
  return (
    <div className="flex justify-center mb-5">
      <div className="w-[980px] flex flex-col">
        <div>
          <ul className="flex pl-3 gap-5">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Youtube</li>
          </ul>
        </div>
        <div className="mt-4 text-sm text-grey">
          <ul className="grid gap-4 grid-cols-4">
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
            <li>Help Centre</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Gift Cards</li>
            <li>Media Centre</li>
            <li>Privacy</li>
            <li>Corporate Information</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="mt-4 text-sm text-grey">
          <ul className="flex flex-col items-start gap-4">
            <button className="border p-2 ">Service Code</button>
            <p>&#169; 1997-2023 Netflix, Inc.</p>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
