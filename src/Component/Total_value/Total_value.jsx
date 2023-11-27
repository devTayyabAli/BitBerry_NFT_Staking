import React, { useEffect, useState } from "react";
import "./Total_value.css";
import Tab from "../Tab/Tab";
import { Staking, Staking_Abi, tokenStaking, tokenStaking_Abi } from "../../utilies/constant";
import Web3 from "web3";
import { useSelector } from "react-redux";
function Total_value({setShoww}) {  
  let { provider, acc, providerType, web3 } = useSelector(
    (state) => state.connectWallet
);
  
  const [totalUserAmount, settotalUserAmount] = useState(0)
  const [WithdrawReward, setWithdrawReward] = useState(0)
  const [totalBUSD, settotalBUSD] = useState(0)


  const TotalAmount =async()=>{
    try{
      const webSupply = new Web3(
        "https://bsc-dataseed1.binance.org"
    );


    let stakingContractOf = new webSupply.eth.Contract(Staking_Abi, Staking);

    if (acc != null) {


        let totalNFTstaked = await stakingContractOf.methods
            .UserInformation (acc)
            .call();
            console.log("Users",totalNFTstaked[0].length);

         

           setWithdrawReward(parseFloat(totalNFTstaked[0].length).toFixed(3))
            settotalUserAmount(totalNFTstaked[0].length)
            let array1 = totalNFTstaked[0];
         
         
            let Sum=0
            for (let i = 0; i < array1.length; i++) {
             
              let pendindRewards = await stakingContractOf.methods
                .pendindRewards(acc, i)
                .call();
            
                Sum=Sum+Number(web3.utils.fromWei(pendindRewards.toString()))
      
             
            }
            settotalBUSD(Sum)
            console.log("Sum",Sum);


    }


    }catch(e){

    }
  }

  useEffect(() => {
    TotalAmount()
  })

  console.log("totalBUSD",totalBUSD);

  return (
    <div className="">
      <div
        class="chakra-stat css-16fwhjm"
        style={{
          padding: "1rem 2rem 0.5rem",
          width: "max-content",
          minWidth: "265px",
          margin: "1rem auto",
          boxShadow: "rgb(116, 54, 128) 0px 0px 50px 0px",
         height:"8rem"
        }}
      >
        <dl>
          <dt class="chakra-stat__label css-1mqe0od">Total NFT Locked</dt>
          <dd class="chakra-stat__number css-1snxiwx">
            <p class="chakra-text css-0 text-white">{totalUserAmount} Bitberyy</p>
          </dd>
          
          <div class="chakra-stat__label css-1mqe0od " style={{marginTop:"-1rem"}}>
            <p class="chakra-stat__label css-1mqe0od"> WithdrawAble Reward <br/>
             {totalBUSD} BUSD</p>
          </div>
        </dl>
      </div>

      <div className="container">
        <div className="row  text-white">
          <div className="text-center m-auto">
            <Tab setShoww={setShoww} totalUserAmount={totalUserAmount}  selectedCard="one"  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Total_value;
