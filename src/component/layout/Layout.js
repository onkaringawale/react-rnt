import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Layout.css';
const Layout = () => {
  return (
    <>
 
        <div className='text ps-3 cmpnameLyt'>
            <h6 className='text ps-4'>The</h6>
            <h1 className='' style={{lineHeight : '1px'}}>Honover</h1>
            <h5 className='text ps-4 '>Insurance group</h5>
        </div>
        <div className='text p-3'>
        <NavLink to="/">Endorsement</NavLink>
        </div>

                        
    </>
  )
}

export default Layout
