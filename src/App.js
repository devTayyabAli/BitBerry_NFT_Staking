import React, { useState,useCallback } from 'react'
import Head from './Component/Head/Head'
import "./App.css"
import Total_value from './Component/Total_value/Total_value'
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import NftStaking from './Component/nftStaking/NftStaking';
import { Route, Routes } from 'react-router-dom';
import Footer_up from './Component/Footer_up/Footer_up';
import Main_home_page from './Component/Main_home_page/Main_home_page';
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
function App() {
  const [showw, setShoww] = useState(false);
  const handleClosee = () => setShoww(false);
  const handleShoww = () => setShoww(true);
  let { provider, acc, providerType, web3 } = useSelector(
    (state) => state.connectWallet
  );


  return (
    <div className='' >
      <div className='back'>
    
        <ToastContainer />
        <Head handleClosee={handleClosee} handleShoww={handleShoww} setShoww={setShoww} showw={showw} />
        <Routes>
          <Route path='/' element={<Main_home_page />} />
          <Route path='/Nft_Staking' element={<NftStaking setShoww={setShoww} />} />
        </Routes>
          <Footer_up/>



      </div>
    </div>
  )
}

export default App
