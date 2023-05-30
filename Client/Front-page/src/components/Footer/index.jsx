import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
<>

<footer>
    <div className='footermainBox'>
        <div className='footerBox'>
            <div className='footerText'>
                <h3>About Us</h3>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                <br />
                <p>Copyright ©2023 All rights reserved | This template is made with <span><FavoriteIcon/></span> by <span style={{color:'coral'}}>Colorlib</span></p>
            </div>

        </div>


        <div className='footerBox'>
            <div className='footerText'>
                <h3>Newsletter</h3>
                <br />
                <p>Stay update with our latest</p>
                <br />
                <input className='footerText' type="text" placeholder='Enter Email' />
                
            </div>

        </div>




        <div className='footerBox'>
            <div className='footerText'>
                <h3>Follow Us</h3>
                <br />
                <p>Let us be social</p>
                <br />
                <div className='icons'>
                  <div>
                  <FacebookIcon/>
                <TwitterIcon/>
                <AddCircleOutlineIcon/>
                <FiberNewIcon/>
                  </div>
                </div>
                
            </div>

        </div>










    </div>
</footer>













</>
  )
}

export default Footer