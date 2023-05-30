import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
<>


<nav>
    <div className='navmainBox'>
        <div className='navBox'>
                 <img src="https://preview.colorlib.com/theme/security/img/logo.png" alt="" />
                 <ul>
                    <Link to="/">HOME</Link>
                <Link to="/about">ABOUT US</Link>
                    <Link to="/service">SERVICE</Link>
               <Link to="/team">TEAM</Link>
                  <Link to="/price">PRICE</Link>
              <Link to="/blog">BLOG</Link>
                 <Link to="/contact">CONTACT</Link>
        <Link to="/add">ADD</Link>
                 </ul>
        </div>
    </div>
</nav>








</>
  )
}

export default Navbar