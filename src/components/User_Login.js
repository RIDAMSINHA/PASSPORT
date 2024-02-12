import React, { useContext, useState } from "react";
import "../styles/style.css"; 
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { SubContractContext } from './utilites/SubContractContext';
import USER_CONTRACT_ABI from './Contract/pass.json';
import GOV_CONTRACT_ABI from './Contract/gov.json';

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  // const { subContractAddress } = useContext(SubContractContext);

  // const GOV_CONTRACT_ADDRESS = subContractAddress;
  // console.log(GOV_CONTRACT_ADDRESS);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const _uuid = event.target.email.value;
    const _password = event.target.password.value;
    const _username = event.target.username.value;

    // Initialize ethers by connecting to the network
    const provider = new ethers.JsonRpcProvider(process.env.REACT_APP_RPC_URL);
    const privateKey = process.env.REACT_APP_PRIVATE_KEY;
    const wallet = new ethers.Wallet(privateKey);
    const signer = wallet.connect(provider);

    const Gov_contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
    const gov_abi = GOV_CONTRACT_ABI.abi;
    const Gov_Contract = new ethers.Contract(Gov_contractAddress, gov_abi, signer);
    const USER_CONTRACT_ADDRESS = await Gov_Contract.getSubContractDetails(_uuid);

    const user_abi = USER_CONTRACT_ABI.abi;
    const userContract = new ethers.Contract(USER_CONTRACT_ADDRESS,user_abi,signer);

    try {
      console.log("Attempting to log in with password:", _password, "username:", _username, "and pcd:", _uuid);

      const loginSuccessful = await userContract.login(_password, _uuid, _username);
      console.log('Login result:', loginSuccessful);

      if (loginSuccessful) {
        console.log("Login successful!");
        navigate("/user");
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
                SUBMIT
              </button>
              <br />
              <button className="rounded w-96 hover:bg-background hover:text-white hover:w-40 hover:ml-28">
                <Link to="/details">New user? Signup&gt;&gt;</Link>
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