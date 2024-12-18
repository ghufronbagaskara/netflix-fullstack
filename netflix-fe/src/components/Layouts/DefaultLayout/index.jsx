import React from 'react'
import NavBar from '../../../pages/Landing/NavBar'

const DefaultLayout = ({ children }) => {
    return (
        <div className='bg-black-500 min-h-screen'>
            <NavBar />
            <div>{children}</div>
        </div>
    )
}

export default DefaultLayout