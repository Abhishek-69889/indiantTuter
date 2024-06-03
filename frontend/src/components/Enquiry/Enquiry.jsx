import React, { useState } from 'react';

export default function Enquiry() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    profession: '',
    className: '',
    subject: '',
    expectedFee: '',
    area: '',
    city: '',
    state: '',
    postCode: ''
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      alert(data.message); // Display the response message
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center m-10 p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="fullName" className="mb-3 block text-base font-medium text-[#07074D]">
                 Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="phoneNumber" className="mb-3 block text-base font-medium text-[#07074D]">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            {/* <div className="mb-5">
              <label htmlFor="profession" className="mb-3 block text-base font-medium text-[#07074D]">
                Profession
              </label>
              <input
                type="text"
                name="profession"
                id="profession"
                placeholder="Tutor/Student"
                value={formData.profession}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div> */}
            <div className="mb-5">
              <label htmlFor="className" className="mb-3 block text-base font-medium text-[#07074D]">
                Class
              </label>
              <input
                type="text"
                name="className"
                id="className"
                placeholder="Enter Your Class"
                value={formData.className}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="subject" className="mb-3 block text-base font-medium text-[#07074D]">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="expectedFee" className="mb-3 block text-base font-medium text-[#07074D]">
                Expected Fee
              </label>
              <input
                type="text"
                name="expectedFee"
                id="expectedFee"
                placeholder="Expected Fee"
                value={formData.expectedFee}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5 pt-3">
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                Address Details
              </label>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="area"
                      id="area"
                      placeholder="Enter area"
                      value={formData.area}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Enter city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="Enter state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="postCode"
                      id="postCode"
                      placeholder="Post Code"
                      value={formData.postCode}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
