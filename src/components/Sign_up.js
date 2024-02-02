import React, { useRef, useState } from "react";
import { ethers } from 'ethers';
import emailjs from "@emailjs/browser";
import { useNavigate } from 'react-router-dom';
import LoadingButton from "./utilites/LoadingButton";

const GOV_CONTRACT_ABI = [
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
      },
      {
        "internalType": "string",
        "name": "_username",
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
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "contractAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "string",
        "name": "uuid",
        "type": "string"
      }
    ],
    "name": "SubContractDeployed",
    "type": "event"
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
  }
];

const generateRandomUsername = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const usernameLength = 8;
  let randomUsername = '';

  for (let i = 0; i < usernameLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomUsername += characters.charAt(randomIndex);
  }

  return randomUsername;
};

const Sign_up = () => {
  const form = useRef();
  const _username = generateRandomUsername();
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      console.log('Initializing Ether.js...');

      // Use your private key here. Replace 'YOUR_PRIVATE_KEY' with your actual private key.
      const privateKey = '0x2d30cb4d937e240141bb54d14a5621e802b4e9b89a618b53a5b9f59a18c1fddd';
      const wallet = new ethers.Wallet(privateKey);

      // Assume contractAddress is the address of the already deployed contract on the testnet
      const contractAddress = '0x4477155916D26C8b15E8FD335D0Ed074bBD8150D';

      // Set the provider for the wallet
      const provider = new ethers.JsonRpcProvider('https://eth-sepolia-public.unifra.io');
      const connectedWallet = wallet.connect(provider);

      const deployedContract = new ethers.Contract(contractAddress, GOV_CONTRACT_ABI, connectedWallet);

      console.log('Ether.js initialized successfully');

      // Access form ref directly
      emailjs
        .sendForm(
          "service_innq1uf",
          "template_s6bqlrp",
          form.current,
          "bDImEd5GCR6oT0hzq"
        )
        .then(
          async (result) => {
            console.log(result.text);
            console.log("Message has been sent");
            console.log("YOUR USERNAME IS: ", _username);

            const _token = event.target.aadhar.value;
            const _rname = event.target.fullname.value;
            const _pcd = event.target.address.value;
            const _password = event.target.password.value;
            const _uuid = event.target.email.value;

            console.log('Form values:', _token, _rname, _pcd, _password, _uuid, _username);

            try {
              // Call deploySubContract function on the existing deployed contract
              const deploySubContractResult = await deployedContract.deploySubContract(
                _rname, _pcd, _password, _uuid, _username
              );

              // Wait for the transaction to be mined
              const receipt = await deploySubContractResult.wait();

              console.log('Contract deployed at:', deploySubContractResult.to);

              console.log('Subcontract deployed successfully', receipt);
              localStorage.setItem('contractAddress', receipt.logs[0].args.contractAddress);
              setIsLoading(false);
              setIsSuccess(true);
              setTimeout(() => {
                history('/user_login');
              }, 1500);                     // Redirect after 1.5 seconds
            } catch (error) {
              console.error('Error:', error.message);
              setIsLoading(false);
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    } catch (error) {
      console.error('Error using private key:', error.message);
      console.log(error);
    }
  };


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
            <form ref={form} onSubmit={handleSubmit} className="font-kelly ml-10 mt-5 space-y-2">
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

              {/* Address */}
              <label htmlFor="address" className="text-3xl mt-8">
                Address
              </label>
              <br />
              <input
                type="text"
                name="address"
                placeholder="Address"
                required
                className="h-10 w-96 px-5 focus:border-blue-here focus:border-4 hover:border-blue-here hover:border-4"
              />{' '}
              <br />
              <br />

              {/* Aadhar Number */}
              <label htmlFor="aadhar" className="text-3xl mt-8">
                Aadhar Card Number
              </label>
              <br />
              <input
                type="text"
                name="aadhar"
                placeholder="Aadhar No."
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
                placeholder="Password"
                required
                className="h-10 w-96 px-5 focus:border-blue-here focus:border-4 hover:border-blue-here hover:border-4"
              />
              <input
                type="text"
                name="username"
                placeholder="text"
                required
                className="absolute hidden h-10 w-96 focus:border-blue-here focus:border-4 hover:border-blue-here hover:border-4"
                defaultValue={_username}
              />
              <br />

              {/* Buttons */}
              <br />
              {/* <button type="submit" className="rounded-2xl bg-background h-12 w-96 border-4 border-blue-here hover:border-background hover:bg-opacity-40 hover:text-black">
                
                <a href="#!">SUBMIT</a>
              </button> */}
              <LoadingButton isLoading={isLoading} isSuccess={isSuccess} />
              <br />
              <br />
            </form>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Sign_up;