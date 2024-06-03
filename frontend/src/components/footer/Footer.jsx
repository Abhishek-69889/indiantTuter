import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <div className="mx-auto mt-12 max-w-7xl cursor-pointer">
        <footer className="px-4 py-10">
          <div className="flex flex-col md:flex-row md:items-center">
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Home Tutor By City</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>Delhi</li>
                <li>Lucknow</li>
                <li>Noida</li>
                <li>Haryana</li>
                <li>Jaipur</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Home Tutor By Category</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <li>Class Lower section</li>
                <li>Class I-V</li>
                <li>Class VI-VIII</li>
                <li>Class IX-X</li>
                <li>Class XI-XII</li>
                
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Usefull Links</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>SignIn</li>
                <li><Link to='/signup'>SignUp</Link></li>
                <li><Link to='/enquiry'>Enquiry</Link></li>
                <li><a href="/">Hire Tutor</a></li>
                {/* <li>History</li> */}
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Legal</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
                <li>Disclaimer</li>
                <li>Media Policy</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Social Links</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Linkedin</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
      
    </>
  )
}
