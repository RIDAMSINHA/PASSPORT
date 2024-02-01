import React from 'react';
import '../styles/style.css';
import { ethers } from 'ethers';


const handleSubmit = async (event) => {
  event.preventDefault();

  const _rname = event.target.fullname.value;
  const _pcd = event.target.address.value;
  const _password = event.target.password.value;
  const _uuid = event.target.email.value;


  const GOV_CONTRACT_ADDRESS = '0xCaA4C7A54D8506F33EDe1FFEc985D2FAA8cba26e';
  const GOV_CONTRACT_ABI = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_transportName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_location",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_uuid",
          "type": "string"
        }
      ],
      "name": "deployBorderAuthorityContract",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_rname",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_pcd",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_password",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_uuid",
          "type": "string"
        }
      ],
      "name": "deploySubContract",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_country",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_location",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_visaAuthority",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_uuid",
          "type": "string"
        }
      ],
      "name": "deployVisaContract",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "borderAuthorityContracts",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_uuid",
          "type": "string"
        }
      ],
      "name": "getBorderAuthority",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_uuid",
          "type": "string"
        }
      ],
      "name": "getSubContractDetails",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_uuid",
          "type": "string"
        }
      ],
      "name": "getVisa",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "subContracts",
      "outputs": [
        {
          "internalType": "string",
          "name": "rname",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "pcd",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "password",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "contractAddress",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "subContractUUIDs",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "visaContracts",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]

  // Initialize ethers by connecting to the network
  const provider = new ethers.JsonRpcProvider('https://eth-sepolia-public.unifra.io');
  const privateKey = '2d30cb4d937e240141bb54d14a5621e802b4e9b89a618b53a5b9f59a18c1fddd';
  const wallet = new ethers.Wallet(privateKey);
  const signer = wallet.connect(provider);

  console.log('Form values:', _rname, _pcd, _password, _uuid);
  const govContract = new ethers.Contract(GOV_CONTRACT_ADDRESS, GOV_CONTRACT_ABI, signer);

  try {
    const tx = await govContract.deploySubContract(_rname, _pcd, _password, _uuid);

    // Log the transaction to the console to check if it's valid JSON
    console.log('Transaction:', tx);
    
    const receipt = await tx.wait();

    console.log('Contract deployed at:', receipt.events.ContractDeployed.returnValues.contractAddress);
  } catch (error) {
    console.error('Error deploying contract:', error.message);
  }
};



const Signup_gov = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="../styles/style.css" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@700&family=Fredoka&family=Koh+Santepheap:wght@300;400;700&family=Roboto+Condensed:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kelly+Slab&display=swap"
          rel="stylesheet"
        />
        <title>Passport System</title>
      </head>

      <body className="bg-background flex flex-col min-h-screen w">
        <div className="flex mt-32 ml-48 space-x-40">
          <div>
            <h1 className="font-kons text-8xl">SIGN UP</h1>
            <img src="../images/Passport.png" alt="" className="h-96 mt-12" />
          </div>

          <div className="bg-pink-here max-w-7xl pl-10 pr-20 rounded-3xl border-4 border-blue-here">
            <form onSubmit={handleSubmit} className="font-kelly ml-10 mt-5 space-y-2">
              {/* Full Name */}
              <label htmlFor="fullname" className="text-3xl mt-8">
                Full Name
              </label>
              <br />
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                required
                className="h-10 w-96 px-5 focus:border-blue-here focus:border-4 hover:border-blue-here hover:border-4"
              />{' '}
              <br />
              <br />

              {/* Email */}
              <label htmlFor="email" className="text-3xl">
                Email
              </label>{' '}
              <br />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="font-normal h-10 w-96 px-5 focus:border-blue-here focus:border-4 hover:border-blue-here hover:border-4"
              />{' '}
              <br />
              <br />

              {/* Govt ID */}
              <label htmlFor="address" className="text-3xl mt-8">
                Government ID
              </label>
              <br />
              <input
                type="text"
                name="address"
                placeholder="XXXXXXXXXX"
                required
                className="h-10 w-96 px-5 focus:border-blue-here focus:border-4 hover:border-blue-here hover:border-4"
              />{' '}
              <br />
              <br />

              {/* Mobile Number */}
              <label htmlFor="aadhar" className="text-3xl mt-8">
                Mobile Number
              </label>
              <br />
              <input
                type="text"
                name="aadhar"
                placeholder="**********"
                required
                className="h-10 w-96 px-5 focus:border-blue-here focus:border-4 hover:border-blue-here hover:border-4"
              />{' '}
              <br />
              <br />

              {/* Password */}
              <label htmlFor="password" className="text-3xl">
                Password
              </label>
              <br />
              <input
                type="password"
                name="password"
                placeholder="***********"
                required
                className="h-10 w-96 px-5 focus:border-blue-here focus:border-4 hover:border-blue-here hover:border-4"
              />
              <br />

              {/* Buttons */}
              <br />
              <button type="submit" className="rounded-2xl bg-background h-12 w-96 border-4 border-blue-here hover:border-background hover:bg-opacity-40 hover:text-black">
                <a href="#!">SUBMIT</a>
              </button>
              <br />
              <br />
            </form>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Signup_gov;
