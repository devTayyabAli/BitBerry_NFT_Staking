import React from 'react'
import logo from "../../Component/Accets/logo.png";
import "../Updated/Updated.css"

import {BsDiscord,BsTelegram} from "react-icons/bs"
import {FaTwitter} from "react-icons/fa"

export default function Footer_up() {
  return (
    <div className='text-white main_clr'>
  <div className="container">

  <div className="row justify-content-evenly    ">
    <div className="col-md-4 res_pon_ali">
        <img src={logo } className="footer_logo"  alt="" />
    </div>
    <div className="col-md-4 res_pon_ali  ">
    <div>        <h5>
Quick Links</h5>
<a href="" className='footer_links'>
    <p>Faq</p>
    
</a>
<a href="" className='footer_links'>
    <p>Ecosystem</p>
    
</a>
<a href="" className='footer_links'>
    <p>Pancakeswap</p>
    
</a>
<a href="" className='footer_links'>
    <p>How to Use App</p>
    
</a>
</div>

    </div>
    <div className="col-md-4  res_pon_ali  ">
  <div>
        <h5>Contact Us</h5>
        <div className="conta d-flex ">
        <span className='me-2 fs-1'><BsDiscord></BsDiscord></span>
      <a className='text-decoration-none text-white'  target="_blank"  href="https://twitter.com/arbstaking?s=21&t=Uk9H9z90IYRVjapRIwHmmQ">  <span className='me-2 fs-1'><FaTwitter></FaTwitter></span></a>
     <a className='text-decoration-none text-white'  target="_blank"  href="https://t.me/ArbStaking">   <span className='me-2 fs-1'><BsTelegram></BsTelegram></span></a>
        </div>

        </div>
    </div>
    </div>
  </div>

</div>
  )
}
