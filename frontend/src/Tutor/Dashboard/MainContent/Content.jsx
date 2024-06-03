import React, { useState } from 'react'
import './Content.css'
import { Link } from 'react-router-dom'

export default function Content() {
  let [user, setUser] = useState([])

  async function loadData() {
    let response = await axios.get('http://localhost:3000/enquiries')
    setUser(response.data)
  }

  return (
    <>
      <div className="main-div">
    <h1 className='text-lg font-semibold'>Find Your Students </h1>
        <div className="databox">
        <div className="" id='databox-div'>
      <div className="">
        
      </div>
      <div>
        <div className="p-4">
           
            <h2 className=" items-center text-lg font-semibold">89</h2>
          <h1 className="inline-flex items-center text-lg font-semibold">
            Remaining Students
          </h1>
         
          
          <h2><Link>View All Students </Link></h2>
          
        </div>
      </div>
    </div>
    <div className="" id='databox-div'>
      <div className="">
        
      </div>
      <div>
        <div className="p-4">
           
            <h2 className=" items-center text-lg font-semibold">89</h2>
          <h1 className="inline-flex items-center text-lg font-semibold">
            Viewed students
          </h1>
         
          
          <h2><Link>View All Students </Link></h2>
          
        </div>
      </div>
    </div>
       
        </div>

         {/* Details// */}
         {user.map((data, key) => (
         <div id='Detail-box' key={key}>
      
      <div>
        <div id='content-main-div' >
          <h1 className=" text-lg font-semibold">
          Tutor Required For English For Class - Language
          </h1>
          <h2>Enquiry ID : {data.ID}</h2>
         
          <div id='Details-semimain-div'>
            <div>
            <h4>Name:-{data.name}</h4>
            <h4>email:-{data.email}</h4>
            <h4>Contact:-{data.mobile}</h4>
            <h4>Class:-{data.class}</h4>
            
            </div>
            <div>
                <h4>Subject:- {data.subject}</h4>
                <h4>Location:- {data.location}</h4>
                <h4>Mode Of Learning:- {data.modeOfLearning}</h4>
          <Link
                  type="button"
                  to='/price'
                  className="rounded-md  px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  id='hero-Section-main-button'
                >
                  Register Now
                </Link>
            </div>
          </div>
        </div>
      </div>
    
            
        </div>
        ))}
            <div id='Detail-box'>
      
      <div>
        <div id='content-main-div' >
          <h1 className=" text-lg font-semibold">
          Tutor Required For English For Class - Language
          </h1>
          <h2>Enquiry ID : #10238</h2>
         
          <div id='Details-semimain-div'>
            <div>
            <h4>Name:-XYZ</h4>
            <h4>Class:-XYZ</h4>
            <h4>Aprox Free:-Xyz</h4>
            <h4>Area:-Xyz</h4>
            
            </div>
            <div>
                <h4>Number Of Classes:- X class a weak/month</h4>
                <h4>Place of teaching:- Students Home</h4>
          <Link
                  type="button"
                  to='/signup'
                  className="rounded-md  px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  id='hero-Section-main-button'
                >
                  Register Now
                </Link>
            </div>
          </div>
        </div>
      </div>
    
            
        </div>
      </div>
    </>
  )
}
