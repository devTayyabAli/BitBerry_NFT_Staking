//NFT staking contract
export const Staking = "0x9E0006617DB1c877756c25857DB3FEfFF01c02A7";
export const Staking_Abi = [{
        inputs: [{
                internalType: "contract IERC20",
                name: "_tokenaddr",
                type: "address",
            },
            {
                internalType: "contract IERC721",
                name: "_nftaddr",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "From",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "day",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "time",
                type: "uint256",
            },
        ],
        name: "Deposite",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{
            indexed: false,
            internalType: "address",
            name: "account",
            type: "address",
        }, ],
        name: "Paused",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{
            indexed: false,
            internalType: "address",
            name: "account",
            type: "address",
        }, ],
        name: "Unpaused",
        type: "event",
    },
    {
        inputs: [],
        name: "NFT",
        outputs: [{
            internalType: "contract IERC721",
            name: "",
            type: "address",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "Pause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "RefferalReward",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "UnPause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "_add",
            type: "address",
        }, ],
        name: "UserInformation",
        outputs: [{
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        name: "allocation",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "busd",
        outputs: [{
            internalType: "contract IERC20",
            name: "",
            type: "address",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "contract IERC721",
            name: "addr",
            type: "address",
        }, ],
        name: "changeNFT",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
                internalType: "uint256",
                name: "_30dayspercent",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_90dayspercent",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_180dayspercent",
                type: "uint256",
            },
        ],
        name: "changePercentages",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "contract IERC20",
            name: "addr",
            type: "address",
        }, ],
        name: "changeToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "_thirtydayplanlimit",
            type: "uint256",
        }, ],
        name: "changethirtydayplanlimit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "_time",
            type: "uint256",
        }, ],
        name: "changetimeCal",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "_tokenID",
            type: "uint256",
        }, ],
        name: "checkOwner",
        outputs: [{
            internalType: "bool",
            name: "success",
            type: "bool",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "",
            type: "address",
        }, ],
        name: "commulativeWithdrawReward",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "deadAddress",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "depositedNFTs",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "depositetime",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "contract IERC20",
                name: "_tokenaddr",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_token",
                type: "uint256",
            },
        ],
        name: "emergencyWithdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "Amount",
            type: "uint256",
        }, ],
        name: "emergencyWithdrawBNB",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
                internalType: "uint256",
                name: "_lockableDays",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_tokenID",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "refferal",
                type: "address",
            },
        ],
        name: "farm",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "_index",
            type: "uint256",
        }, ],
        name: "harvest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        name: "isNFTStaked",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "lastwithdrawntime",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "lockabledays",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "paused",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "_add",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_index",
                type: "uint256",
            },
        ],
        name: "pendindRewards",
        outputs: [{
            internalType: "uint256",
            name: "reward",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "",
            type: "address",
        }, ],
        name: "refferalStatus",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "_reward",
            type: "uint256",
        }, ],
        name: "setRefferalReward",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "thirtydayplanlimit",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "time",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalNFTstaked",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "totalWithdrawnReward",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "newOwner",
            type: "address",
        }, ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
export const tokenStaking = "0xcDBDb2d53380beE76aa1A6df1B7266dc829A4B75";
export const tokenStaking_Abi = [{
        inputs: [{
                internalType: "string",
                name: "_name",
                type: "string"
            },
            {
                internalType: "string",
                name: "_symbol",
                type: "string"
            },
            {
                internalType: "string",
                name: "_initBaseURI",
                type: "string"
            },
            {
                internalType: "string",
                name: "_initNotRevealedUri",
                type: "string"
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool"
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "owner",
            type: "address"
        }],
        name: "balanceOf",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "baseExtension",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "cost",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        }],
        name: "getApproved",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "address",
                name: "operator",
                type: "address"
            },
        ],
        name: "isApprovedForAll",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "maxMintAmount",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "maxSupply",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "_mintAmount",
            type: "uint256"
        }],
        name: "mint",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "notRevealedUri",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        }],
        name: "ownerOf",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "bool",
            name: "_state",
            type: "bool"
        }],
        name: "pause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "paused",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "reveal",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "revealed",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "operator",
                type: "address"
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool"
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "string",
            name: "_newBaseExtension",
            type: "string"
        }, ],
        name: "setBaseExtension",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "string",
            name: "_newBaseURI",
            type: "string"
        }],
        name: "setBaseURI",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "_newCost",
            type: "uint256"
        }],
        name: "setCost",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "string",
            name: "_notRevealedURI",
            type: "string"
        }, ],
        name: "setNotRevealedURI",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "_newmaxMintAmount",
            type: "uint256"
        }, ],
        name: "setmaxMintAmount",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "bytes4",
            name: "interfaceId",
            type: "bytes4"
        }],
        name: "supportsInterface",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "index",
            type: "uint256"
        }],
        name: "tokenByIndex",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "index",
                type: "uint256"
            },
        ],
        name: "tokenOfOwnerByIndex",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        }],
        name: "tokenURI",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "newOwner",
            type: "address"
        }],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "_owner",
            type: "address"
        }],
        name: "walletOfOwner",
        outputs: [{
            internalType: "uint256[]",
            name: "",
            type: "uint256[]"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "withdraw",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];

// NFT token address
export const TokenAddress = "0xcDBDb2d53380beE76aa1A6df1B7266dc829A4B75";
export const Token_Abi = [{
        inputs: [{
                internalType: "string",
                name: "_name",
                type: "string",
            },
            {
                internalType: "string",
                name: "_symbol",
                type: "string",
            },
            {
                internalType: "string",
                name: "_initBaseURI",
                type: "string",
            },
            {
                internalType: "string",
                name: "_initNotRevealedUri",
                type: "string",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [{
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "owner",
            type: "address",
        }, ],
        name: "balanceOf",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "baseExtension",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "cost",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
        }, ],
        name: "getApproved",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "maxMintAmount",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "maxSupply",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "_mintAmount",
            type: "uint256",
        }, ],
        name: "mint",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "notRevealedUri",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
        }, ],
        name: "ownerOf",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "bool",
            name: "_state",
            type: "bool",
        }, ],
        name: "pause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "paused",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "reveal",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "revealed",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "string",
            name: "_newBaseExtension",
            type: "string",
        }, ],
        name: "setBaseExtension",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "string",
            name: "_newBaseURI",
            type: "string",
        }, ],
        name: "setBaseURI",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "_newCost",
            type: "uint256",
        }, ],
        name: "setCost",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "string",
            name: "_notRevealedURI",
            type: "string",
        }, ],
        name: "setNotRevealedURI",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "_newmaxMintAmount",
            type: "uint256",
        }, ],
        name: "setmaxMintAmount",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "bytes4",
            name: "interfaceId",
            type: "bytes4",
        }, ],
        name: "supportsInterface",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "index",
            type: "uint256",
        }, ],
        name: "tokenByIndex",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "tokenOfOwnerByIndex",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
        }, ],
        name: "tokenURI",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "newOwner",
            type: "address",
        }, ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "_owner",
            type: "address",
        }, ],
        name: "walletOfOwner",
        outputs: [{
            internalType: "uint256[]",
            name: "",
            type: "uint256[]",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "withdraw",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];

// NFT token address
export const ArchieMetaNFT = "0xcDBDb2d53380beE76aa1A6df1B7266dc829A4B75";
export const ArchieMetaNFT_Abi = [{
        inputs: [{
                internalType: "string",
                name: "_name",
                type: "string"
            },
            {
                internalType: "string",
                name: "_symbol",
                type: "string"
            },
            {
                internalType: "string",
                name: "_initBaseURI",
                type: "string"
            },
            {
                internalType: "string",
                name: "_initNotRevealedUri",
                type: "string"
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool"
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "owner",
            type: "address"
        }],
        name: "balanceOf",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "baseExtension",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "cost",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        }],
        name: "getApproved",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "address",
                name: "operator",
                type: "address"
            },
        ],
        name: "isApprovedForAll",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "maxMintAmount",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "maxSupply",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "_mintAmount",
            type: "uint256"
        }],
        name: "mint",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "notRevealedUri",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        }],
        name: "ownerOf",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "bool",
            name: "_state",
            type: "bool"
        }],
        name: "pause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "paused",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "reveal",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "revealed",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "operator",
                type: "address"
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool"
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "string",
            name: "_newBaseExtension",
            type: "string"
        }, ],
        name: "setBaseExtension",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "string",
            name: "_newBaseURI",
            type: "string"
        }],
        name: "setBaseURI",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "_newCost",
            type: "uint256"
        }],
        name: "setCost",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "string",
            name: "_notRevealedURI",
            type: "string"
        }, ],
        name: "setNotRevealedURI",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "_newmaxMintAmount",
            type: "uint256"
        }, ],
        name: "setmaxMintAmount",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "bytes4",
            name: "interfaceId",
            type: "bytes4"
        }],
        name: "supportsInterface",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "index",
            type: "uint256"
        }],
        name: "tokenByIndex",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "index",
                type: "uint256"
            },
        ],
        name: "tokenOfOwnerByIndex",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        }],
        name: "tokenURI",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "newOwner",
            type: "address"
        }],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "_owner",
            type: "address"
        }],
        name: "walletOfOwner",
        outputs: [{
            internalType: "uint256[]",
            name: "",
            type: "uint256[]"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "withdraw",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];

// busd
export const nftTokenAddress = "0x9c165762e75B9e9811cc42344F1716C2E8CD6b57";
export const nftToken_Abi = [{
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "amount",
            type: "uint256",
        }, ],
        name: "Mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool",
        }, ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "account",
            type: "address",
        }, ],
        name: "balanceOf",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "_value",
            type: "uint256",
        }, ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [{
            internalType: "uint8",
            name: "",
            type: "uint8",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool",
        }, ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool",
        }, ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool",
        }, ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool",
        }, ],
        stateMutability: "nonpayable",
        type: "function",
    },
];