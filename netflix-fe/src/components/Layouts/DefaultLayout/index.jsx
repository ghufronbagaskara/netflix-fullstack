import React from 'react'
import NavBar from '../../../pages/Landing/NavBar'

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <div>{children}</div>
        </div>
    )
}

export default DefaultLayout