import React from 'react'
import "./Updated.css"
import up from "../Accets/up.png"
import {FaWallet} from "react-icons/fa"
import {AiFillClockCircle} from "react-icons/ai"
import {BsFillKeyboardFill} from "react-icons/bs"
import {BsCheck2All} from "react-icons/bs"
import {FaMousePointer} from "react-icons/fa"

export default function Updated() {
  return (
    <div className='upadted py-5'>

    <div className='text-center'>
    <h3 className='htu text-center text-white'>HOW TO USE STAKING APP</h3>

    
    <p className='htu_p'>Before following the steps to stake your lp token, you will need to first add liquidity at pancakeswap. Get your LP token from Pancakeswap and then follow the steps on this app to stake your LP token and earn Talkado Coin.</p>
 <a className='text-decoration-none' target="_blank" href="https://www.sushi.com/swap?fromChainId=42161&fromCurrency=0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9&toChainId=42161&toCurrency=0x912CE59144191C1204E64559FE8253a0e49E6548&amount=">  <button className='add_liqui'>BUY ARB</button></a>


<div className="container py-5">
    <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
            <img src={up} alt="" className='res_size' />
        </div>
        <div className="col-md-6">
            <div className="up_box">
            <p className='mb-0 p-0'>
            <FaWallet className='icon_fs'></FaWallet>
            </p>    
            <h5> Connect your wallet </h5>

            </div>
            <div className="up_box">
            <p className='mb-0 p-0'>
            <BsFillKeyboardFill className='icon_fs'></BsFillKeyboardFill>
            </p>    
            <h5> Input the amount of LP to stake  </h5>

            </div>
            <div className="up_box">
            <p className='mb-0 p-0'>
            <AiFillClockCircle className='icon_fs'></AiFillClockCircle>
            </p>    
            <h5>  Select 'LOCK' Period  </h5>

            </div>
            <div className="up_box">
            <p className='mb-0 p-0'>
            <FaMousePointer className='icon_fs'></FaMousePointer>
            </p>    
            <h5>  Select 'STAKE' button  </h5>

            </div>
            <div className="up_box">
            <p className='mb-0 p-0'>
            <BsCheck2All className='icon_fs'></BsCheck2All>
            </p>    
            <h5>  Confirm transaction in your wallet  </h5>

            </div>
        </div>
    </div>
  
  
   
   
</div>

    </div>
    </div>
  )
}
