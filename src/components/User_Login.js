import React, { useState } from "react";
import "../styles/style.css"; // Import your CSS file
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { useLocation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const location = useLocation();
  const GOV_CONTRACT_ADDRESS = localStorage.getItem('contractAddress');

  console.log(GOV_CONTRACT_ADDRESS);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const _pcd = event.target.address.value;
    const _password = event.target.password.value;
    const _username = event.target.username.value;

    const GOV_CONTRACT_ABI = [
      {
        "inputs": [
          {
            "internalType": "contract gov",
            "name": "_token",
            "type": "address"
          },
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
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "description",
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
            "internalType": "contract BorderAuthority",
            "name": "borderAuthorityContract",
            "type": "address"
          }
        ],
        "name": "getTravelHistory",
        "outputs": [
          {
            "internalType": "string[]",
            "name": "",
            "type": "string[]"
          },
          {
            "internalType": "string[]",
            "name": "",
            "type": "string[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "contract Visa",
            "name": "visaContract",
            "type": "address"
          }
        ],
        "name": "getVisaStatus",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "location",
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
            "name": "_password",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_pcd",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_username",
            "type": "string"
          }
        ],
        "name": "login",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "pcd",
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
            "name": "_password",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_uuid",
            "type": "string"
          }
        ],
        "name": "resetPassword",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "rname",
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
        "inputs": [],
        "name": "token",
        "outputs": [
          {
            "internalType": "contract gov",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "username",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]

    // Initialize ethers by connecting to the network
    const provider = new ethers.JsonRpcProvider(
      "https://eth-sepolia-public.unifra.io"
    );
    const privateKey =
      "0x2d30cb4d937e240141bb54d14a5621e802b4e9b89a618b53a5b9f59a18c1fddd";
    const wallet = new ethers.Wallet(privateKey);
    const signer = wallet.connect(provider);

    const govContract = new ethers.Contract(
      GOV_CONTRACT_ADDRESS,
      GOV_CONTRACT_ABI,
      signer
    );

    try {
      console.log("Attempting to log in with password:", _password, "username:", _username, "and pcd:", _pcd);

      const loginSuccessful = await govContract.login(_password, _pcd, _username);
      console.log('Login result:', loginSuccessful);

      if (loginSuccessful) {
        // If the login was successful, redirect the user to the next page
        console.log("Login successful!");
        navigate("/user");
      } else {
        // If the login was not successful, show an error message
        console.error("Invalid credentials. Login failed.");
        setErrorMessage("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error calling login function:", error);
      setErrorMessage("Invalid credentials. Please try again.");
    }

  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="../styles/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@700&family=Fredoka&family=Koh+Santepheap:wght@300;400;700&family=Roboto+Condensed:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
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
            <h1 className="font-kons text-8xl">LOGIN</h1>
            <img src="../images/Passport.png" alt="" className="h-96 mt-12" />
          </div>

          <div className="bg-pink-here rounded-3xl border-4 border-blue-here pr-10">
            {errorMessage && (
              <div className="absolute rounded-2xl bg-background mt-1 ml-9 h-12 w-96 border-4 border-red-500 font-bold text-red-500 flex items-center justify-center">
                  {errorMessage}
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              className="font-kelly ml-10 mt-16 space-y-2"
            >
              {/*Email */}
              <label htmlFor="email" className="text-3xl">
                Address
              </label>{' '}
              <br />
              <input
                name='address'
                type="text"
                placeholder="Address"
                required
                className="font-normal h-10 w-96 px-5 focus:border-blue-here focus:border-4 hover:border-blue-here hover:border-4"
              />{' '}
              <br />
              <br />
              {/* User Name */}
              <label htmlFor="username" className="text-3xl mt-8">
                Username
              </label>
              <br />
              <input
                name="username"
                type="text"
                placeholder="Username"
                required
                className="h-10 w-96 px-5 focus:border-blue-here focus:border-4 hover:border-blue-here hover:border-4"
              />{" "}
              <br />
              <br />
              {/* Password */}
              <label htmlFor="password" className="text-3xl">
                Password
              </label>
              <br />
              <input
                name="password"
                type="password"
                placeholder="Password"
                required
                className="h-10 w-96 px-5 focus:border-blue-here focus:border-4 hover:border-blue-here hover:border-4"
              />
              <br />
              {/* Buttons */}
              <br />
              <button
                type="submit"
                className="rounded-2xl bg-background h-12 w-96 border-4 border-blue-here hover:border-background hover:bg-opacity-40 hover:text-black"
              >
                <a href="#!">SUBMIT</a>
              </button>
              <br />
              <button className="rounded w-96 hover:bg-background hover:text-white hover:w-40 hover:ml-28">
                <Link to="/sign_up">New user? Signup&gt;&gt;</Link>
              </button>
              <br />
            </form>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Login;