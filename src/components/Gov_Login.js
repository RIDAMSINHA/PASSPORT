import React, { useContext, useState } from 'react';
import '../styles/style.css';
import { ethers } from "ethers";
import { Link } from 'react-router-dom';
import { SubContractContext } from './utilites/SubContractContext';
import BORDER_CONTRACT_ABI from './Contract/border.json';
import axios from 'axios';

const Gov_Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loginSuccessful, setLoginSuccessful] = useState(false);
  const { anotherAddress } = useContext(SubContractContext);

  const BORDER_CONTRACT_ADDRESS = anotherAddress;
  // console.log(GOV_CONTRACT_ADDRESS);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const _uuid = event.target.email.value;
    const _password = event.target.password.value;
    const _id = event.target.username.value;

    try {
      console.log("Initiating Ether.js...");
      // Initialize ethers by connecting to the network
      const provider = new ethers.JsonRpcProvider(process.env.REACT_APP_RPC_URL);
      const privateKey = process.env.REACT_APP_PRIVATE_KEY;
      const wallet = new ethers.Wallet(privateKey);
      const signer = wallet.connect(provider);
      console.log("Ether.js initialized!!");

      // const user_abi = BORDER_CONTRACT_ABI.abi;
      // const border_Contract = new ethers.Contract(BORDER_CONTRACT_ADDRESS, user_abi, signer);
      // console.log("Border Contract Initialized!!");

      // console.log("Attempting to log in with password:", _password, "id:", _id, "and email:", _uuid);
      // const loginSuccessful = await border_Contract.login(_password, _uuid, _id);
      // console.log('Login result:', loginSuccessful);

      // if (loginSuccessful) {
      //   console.log("Login successful!");
      //   setLoginSuccessful(true);
      //   // handleRedirect();
      // } else {
      //   console.error("Invalid credentials. Login failed.");
      //   setErrorMessage("Invalid credentials. Please try again.");
      // }

      console.log('Sending request to backend...');
      const response = await axios.post('http://localhost:5000/login', {
        _password,
        _uuid,
        _id
      });

      console.log('Formatted Address:', response.data);
      if (response.data.status) {
        console.log("Login successful!");
        setLoginSuccessful(true);
        document.cookie = `uuid=${response.data.uuid}; path=/`;
        window.location.href = response.data.redirect_url;
        // handleRedirect();
      } else {
        console.error("Invalid credentials. Login failed.");
        setErrorMessage("Invalid credentials. Please try again.");
      }
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    } catch (error) {
      console.error("Error calling login function:", error);
      setErrorMessage("Invalid credentials. Please try again.");
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }

  };

  // const handleRedirect = () => {
  //   if (loginSuccessful) {
  //     console.log("Login successful!");
  //     window.open("http://127.0.0.1:5000/status", "_self"); // Opens the link in the same tab
  //   } else {
  //     console.error("Invalid credentials. Login failed.");
  //     setErrorMessage("Invalid credentials. Please try again.");
  //   }
  // };

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
            <h1 className="font-kons text-8xl">LOGIN</h1>
            <img src="../images/Passport.png" alt="" className="h-96 mt-12" />
          </div>

          <div className="bg-pink-here pr-10 rounded-3xl border-4 border-blue-here">
            {errorMessage && (
              <div className="absolute rounded-2xl bg-background mt-1 ml-9 h-12 w-96 border-4 border-red-500 font-bold text-red-500 flex items-center justify-center">
                {errorMessage}
              </div>
            )}
            <form onSubmit={handleSubmit} className="font-kelly ml-10 mt-10 space-y-2">
              {/*Email */}
              <label htmlFor="email" className="text-3xl">
                Email
              </label>{' '}
              <br />
              <input
                name='email'
                type="text"
                placeholder="Email"
                required
                className="font-normal h-10 w-96 px-5 focus:border-blue-here focus:border-4 hover:border-blue-here hover:border-4"
              />{' '}
              <br />
              <br />
              {/* User Name */}
              <label htmlFor="username" className="text-3xl mt-8">
                Government ID
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
              <button type="submit" className="rounded-2xl bg-background h-12 w-96 border-4 border-blue-here hover:border-background hover:bg-opacity-40 hover:text-black">
                SUBMIT
              </button>
              <br />
              <button className="rounded w-96 hover:bg-background hover:text-white hover:w-40 hover:ml-28">
                <Link to="/signup_border">New user? Signup&gt;&gt;</Link>
              </button>
              <br />
            </form>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Gov_Login;
