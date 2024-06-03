import React from 'react'
import './MasterDashboard.css'
import {Link} from 'react-router-dom'
export default function MasterDasboard() {
    return (
        <>
            <div className="dashboard-main">
                <h1>Hello Admin</h1>
                <div id='dashboard-semimain-div'>
                    <div id='teacher-student'>
                        
                        <h2 className='buttons'><Link to='/signup'> Teacher +</Link></h2>
                        <h2 className='buttons'><Link to='/enquiry'>Student +</Link></h2>
                    </div>
                    <div id='searchbar_data'>
                        <div>
                        <h2 className='buttons'>teacher</h2>
                        
                        </div>
                        <div id='searchbar'>
                            <form action="search">
                                <input type="text" placeholder='search'/>
                            </form>
                                <button className='buttons'>Search</button>
                        </div>
                    </div>
                    <div id='searchbar_data'>
                        <div>
                        <h2 className='buttons'> student</h2>
                        
                        </div>
                        <div id='searchbar'>
                            <form action="search">
                                <input type="text" placeholder='search'/>
                            </form>
                                <button className='buttons'>Search</button>
                        </div>
                    </div>
                </div>

                {/* card */}

                <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row" id='card'>
      
     
        <div className="p-4" id='card-data'>
        <div>
        <h2>First Name</h2>
        <h2>Last Name</h2>
        <h2>Contact</h2>
        <h2>DOB</h2>
        <h2>City</h2>
        <h2>Pin Code</h2>
        <h2>Address</h2>
        <h2>About Tutor</h2>
        <h2>Mode Of Teaching</h2>
        </div>  
        <div>
        <h2>Email</h2>
        <h2>Gender</h2>
        <h2>Qualification</h2>
        <h2>Experience</h2>
        <h2>Tutors Location</h2>
        <h2>Total Leads</h2>
        <h2>Price</h2>
        <h2 className='buttons'><Link 

        >Add Leads</Link></h2>
        </div>  
        
      
      </div>
    </div>
            </div>
        </>
    )
}
