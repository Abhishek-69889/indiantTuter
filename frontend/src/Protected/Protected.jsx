import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import UserContext from '../components/Context/UserContext'

export default function Protected({children}) {
 
let {pass} = useContext(UserContext)

    if(pass){
        return children
    }
    else{
        return <Navigate to='/dashboard'/>
    }
}
