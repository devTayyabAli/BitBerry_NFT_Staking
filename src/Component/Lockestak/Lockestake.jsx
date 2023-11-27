import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Web3 from "web3";
import {
  Staking,
  Staking_Abi,
  TokenAddress,
  Token_Abi,
  ArchieMetaNFT,
  nftTokenAddress,
  nftToken_Abi,
  ArchieMetaNFT_Abi,
  tokenStaking,
  tokenStaking_Abi,
} from "../../utilies/constant";
import Connent from "../Connent/Connent";
import "./Lockestake.css";
import Countdown from "react-countdown";
import moment from "moment/moment";
import { Button, Popover } from "antd";
import { Modal, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import CopyToClipboard from "react-copy-to-clipboard";

function Lockestake({ setShoww, check }) {
  let { provider, acc, providerType, web3 } = useSelector(
    (state) => state.connectWallet
  );
  const [selectDays, setselectDays] = useState(0);
  const [getValue, setgetValue] = useState(0);
  const [Active, setActive] = useState(0);
  const [spinner, setspinner] = useState(false);
  const [balance, setbalance] = useState(0);
  const [selectedCard, setselectedCard] = useState(null);
  const [cradShow, setcradShow] = useState([]);
  const [stakeddata, setstakeddata] = useState();
  const [cardIndex, setcardIndex] = useState("");
  const [slectedAllnfton, setslectedAllnfton] = useState({
    condition: false,
    walletOfOwneron: [],
  });
  const [noSelectedAll, setnoSelectedAll] = useState([]);
  const [refAddress, setRefAddress] = useState("");
  const [refAddressfun, setRefAddressfun] = useState("");
  const [TotalNft_Stake_Check, setTotalNft_Stake_Check] = useState(0)
  const [thirtydaylimit, setthirtydaylimit] = useState(0)


  const [copied, setCopied] = useState(false);

  const staking_Amount = async () => {

    try {
      
      if (selectDays == 0) {
        toast.error("Please Select Days");
        setspinner(false);
      } else {
        if (acc == null) {
          toast.error("Please Connect Metamaske First!");
          setShoww(true);
        } else {
          setspinner(true);
          let stakingContractOf;
          let tokenContractOf;

          stakingContractOf = new web3.eth.Contract(Staking_Abi, Staking);
          tokenContractOf = new web3.eth.Contract(
            ArchieMetaNFT_Abi,
            ArchieMetaNFT
          );
          if (cardIndex.length == 0) {
            toast.error("Please Select NFT First!");
            setspinner(false);
          } else {
            console.log("Loacation", window.location);
            let UserID;
            if (window.location.href.includes("ref")) {
              UserID = window.location.href.split("=");
              UserID = UserID[UserID.length - 1];
              console.log("refferal", UserID);
              setRefAddressfun(UserID);


            } else {

              UserID = "0x000000000000000000000000000000000000dEaD"
            }
            // alert(UserID)
            let refferalStatus = await stakingContractOf.methods
              .refferalStatus(UserID)
              .call();

            console.log("refAddressfun", UserID);
            if (UserID == "0x000000000000000000000000000000000000dEaD" || refferalStatus == true) {

              console.log("cardIndex", cardIndex);
              await tokenContractOf.methods.approve(Staking, cardIndex).send({
                from: acc,
              });
              toast.success("Approve Confirmed");
              console.log("cardIndex", cardIndex);
              await stakingContractOf.methods
                .farm(selectDays, cardIndex, UserID)
                .send({
                  from: acc,
                });
              toast.success("NFT staked successfully");
              setspinner(false);
            }
            else {
              toast.error("Refferal Address is Fake😒")
              setspinner(false);

            }
          }
        }
      }
    } catch (e) {
      toast.error(e.message)
      console.log("Error", e);
      setspinner(false);
    }
  };
  const checkBalance = async () => {
    const webSupply = new Web3("https://bsc-dataseed1.binance.org");

    let tokenContractOf = new webSupply.eth.Contract(Token_Abi, TokenAddress);
    let stakingContractOf = new webSupply.eth.Contract(
      tokenStaking_Abi,
      tokenStaking
    );

    if (acc != null) {
      let blanceOf = await tokenContractOf.methods.balanceOf(acc).call();

      blanceOf = blanceOf.slice(0, 12);
      // console.log("blanceOf", blanceOf);
      setbalance(blanceOf);
    }
  };

  useEffect(() => {
    checkBalance();
  });

  useEffect(() => {
    if (acc) {

      setRefAddress(`${window.location.origin}/?ref=${acc}`);

    } else {
      setRefAddress("Connect wallet");
    }
  }, [acc]);

  const SelectedCard = async (id, tokenid) => {
    try {
      // let change_Color = document.getElementById(id);
      // change_Color.style.border = `5px solid rgb(56, 195, 207)`;
      // change_Color.style.borderRadius = "35px";

      setcardIndex(tokenid);

      setselectedCard(id);
    } catch (e) {
      console.log("Error while Selected Card", e);
    }
  };

  const TotalAmount = async () => {
    try {
      const webSupply = new Web3("https://bsc-dataseed1.binance.org");
      let stakingContractOf = new webSupply.eth.Contract(Staking_Abi, Staking);
      let nFTContractOf = new webSupply.eth.Contract(
        ArchieMetaNFT_Abi,
        ArchieMetaNFT
      );

      let array = [];
      if (acc != null) {
        let UserNFTs = await nFTContractOf.methods.walletOfOwner(acc).call();
        let totalNFTstaked = await stakingContractOf.methods.totalNFTstaked().call()
        let thirtydaylimt = await stakingContractOf.methods.thirtydayplanlimit().call()

        console.log("totalNFTstaked",UserNFTs);
        setTotalNft_Stake_Check(totalNFTstaked)
        setthirtydaylimit(thirtydaylimt)

        // setslectedAllnfton({ walletOfOwneron: UserNFTs });
        let UserNFTs_Length = UserNFTs.length;
        let nweArray = [];

        for (let i = 0; i < UserNFTs_Length; i++) {
          let nftLink = await axios.get(
            `https://bafybeiezdj7nvyfp7iw24guvtwmmvvfnhlcw3bq2vli7kxxf4cpdg4sgvm.ipfs.dweb.link/${UserNFTs[i]
            }.png`
          );
          let isNFTStaked = await stakingContractOf.methods
            .isNFTStaked(UserNFTs[i])
            .call();
          console.log("UserNFTs", nftLink);

          if (isNFTStaked == true) {
            setstakeddata(UserNFTs[i]);
          } else {
            nweArray = [...nweArray, UserNFTs[i]];
            // console.log("TokenId",nweArray);
            setnoSelectedAll(nweArray);
            // setslectedAllnfton({ walletOfOwneron: nweArray });
          }
          let imgurl = nftLink.config.url;
          // console.log("nftLink", nftLink.config.url);
          array = [
            ...array,
            { imgurl: imgurl, tokenid: UserNFTs[i], selecteddata: isNFTStaked },
          ];
          setcradShow(array);
        }
      }
    } catch (e) {
      console.log("error While calling function", e);
    }
  };

  useEffect(() => {
    TotalAmount();
  }, [acc]);
  

  return (
    <>
      <>
        <div className="container">
          <div class={cradShow.length > 10 ? "item-details-into" : ""}>
            <div className="row">
              {cradShow?.map((items, index) => {
                return (
                  <>
                    <div className="col-lg-3 col-md-3 mt-3" >
                      <div
                        className={
                          items.selecteddata == true
                            ? "contain game-item disabled"
                            : "game-item"
                        }

                        // class="game-item contain"
                        style={{
                          cursor:
                            items.selecteddata == true ? "default" : "pointer",

                          border:
                            cardIndex == items.tokenid
                              ? "5px solid rgb(56, 195, 207)"
                              : "none",
                        }}
                        id={index}
                        onClick={() => SelectedCard(index, items.tokenid)}
                      >
                        <div class="game-inner">
                          <div class="game-item__thumb">
                            <img
                              src={items.imgurl}
                              alt="game"
                              style={{ zIndex: "100000" }}
                              className="image"
                            />
                            <div class="middle">
                              <div class="text">Staked</div>
                            </div>
                            <div class="game-item__content">
                              <h4 class="title">{items.tokenid}</h4>
                            </div>
                          </div>
                        </div>
                        <div class="mask"> </div>
                        <div class="ball"> </div>
                      </div>
                    </div>
                    {/* <img src={items} alt="" width="100%" className="border" /> */}
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <>
          <div className="row justify-content-center">

            <div className="col-lg-6">
              <div className="container-fluid p-0  mt-5">
                <div className="row justify-content-center">
                  <div className="col-lg-12 all_main p-0">
                    <h3 class="staking__selector__heading">Stake Bitberyy NFTs</h3>

                    <div className="second_box mt-3 px-2">
                      <p className="text-start">Locking Time</p>
                      <div className="time_table">
                        <div className="dan_gtr text-white">
                         
                          {
                            Number(TotalNft_Stake_Check) < Number(thirtydaylimit) ? <>
                             
                                <div
                                  className=" border des_tw p-0 "
                                  style={{
                                    background:
                                      Active == 1
                                        ? "linear-gradient(98.76deg, rgb(56, 195, 207) 0%, rgb(135, 103, 211) 100%)"
                                        : "rgb(24, 22, 82)",
                                  }}
                                >
                                  <button
                                    className="btn btn-md dates"
                                    onClick={() => (setselectDays(30), setActive(1))}
                                  >
                                    30 Days
                                  </button>
                                  <div className="arp border-top">18% APY</div>
                                </div>


                                <div
                                  className=" border des_tw p-0"
                                  style={{
                                    background:
                                      Active == 2
                                        ? "linear-gradient(98.76deg, rgb(56, 195, 207) 0%, rgb(135, 103, 211) 100%)"
                                        : "rgb(24, 22, 82)",cursor:"no-drop"
                                      
                                  }}
                                >
                                  <button
                                    className="btn btn-md dates"
                                    disabled={true}
                                    onClick={() => (setselectDays(90), setActive(2))}
                                    style={{  cursor:"no-drop"}}
                                  >
                                    90 Days
                                  </button>
                                  <div className="arp border-top">24% APY</div>
                                </div>
                                <div
                                  className=" border des_tw p-0"
                              
                                  style={{
                                    background:
                                      Active == 3
                                        ? "linear-gradient(98.76deg, rgb(56, 195, 207) 0%, rgb(135, 103, 211) 100%)"
                                        : "rgb(24, 22, 82)",cursor:"no-drop"
                                  }}
                                >
                                  <button
                                   disabled={true}
                                    className="btn btn-md dates"
                                    onClick={() => (setselectDays(180), setActive(3))}
                                    style={{  cursor:"no-drop"}}
                                  >
                                    180 Days
                                  </button>
                                  <div className="arp border-top">30% APY</div>
                                </div>

                             

                            </>
                              :
                              <>
                                <div
                                  className=" border des_tw p-0 "
                                  style={{
                                    background:
                                      Active == 1
                                        ? "linear-gradient(98.76deg, rgb(56, 195, 207) 0%, rgb(135, 103, 211) 100%)"
                                        : "rgb(24, 22, 82)",
                                  }}
                                >
                                  <button
                                    className="btn btn-md dates"
                                    onClick={() => (setselectDays(30), setActive(1))}
                                  >
                                    30 Days
                                  </button>
                                  <div className="arp border-top">18% APY</div>
                                </div>
                                <div
                                  className=" border des_tw p-0"
                                  style={{
                                    background:
                                      Active == 2
                                        ? "linear-gradient(98.76deg, rgb(56, 195, 207) 0%, rgb(135, 103, 211) 100%)"
                                        : "rgb(24, 22, 82)",
                                  }}
                                >
                                  <button
                                    className="btn btn-md dates"
                                    onClick={() => (setselectDays(90), setActive(2))}
                                  >
                                    90 Days
                                  </button>
                                  <div className="arp border-top">24% APY</div>
                                </div>
                                <div
                                  className=" border des_tw p-0"
                                  style={{
                                    background:
                                      Active == 3
                                        ? "linear-gradient(98.76deg, rgb(56, 195, 207) 0%, rgb(135, 103, 211) 100%)"
                                        : "rgb(24, 22, 82)",
                                  }}
                                >
                                  <button
                                    className="btn btn-md dates"
                                    onClick={() => (setselectDays(180), setActive(3))}
                                  >
                                    180 Days
                                  </button>
                                  <div className="arp border-top">30% APY</div>
                                </div>
                              </>

                          }




                        </div>
                      </div>
                    </div>

                    <button
                      className="btn btn-md lst_btnn mt-3 text-white"
                      onClick={() => staking_Amount()}
                    >
                      {spinner == true ? (
                        <>
                          <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </>
                      ) : (
                        " Enable Staking"
                      )}
                    </button>

                    <div className="last mt-4">
                      <p className="fon m-0 py-2">
                        Locking NFT Id {cardIndex} for {selectDays} Days and You will get {selectDays} BUSD as reward
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="container-fluid p-0  mt-5">
                <div className="row justify-content-center">
                  <div className="col-lg-8 all_main p-0 pb-5">
                    <h3 class="staking__selector__heading">Refferal Address</h3>

                    <div className="second_box mt-3 px-2">
                      <div class=" items-start">
                        <p class="text-15 text-black">Your Referral Link</p>
                        <input
                          placeholder="Referral Addrses"
                          type="text"
                          class="ariia"
                          value={refAddress}
                        />
                      </div>
                    </div>
                    <CopyToClipboard
                      text={refAddress}
                      onCopy={() => {
                        setCopied(true);
                        setTimeout(() => {
                          setCopied(false);
                        }, 2000);
                      }}
                    >
                      <button
                        type="button"
                        className="btn btn-md lst_btnn mt-3 text-white"
                      >
                        {copied ? "Copied!" : "Copy Referral"}
                      </button>
                    </CopyToClipboard>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* )} */}
      </>
    </>
  );
}

export default Lockestake;
