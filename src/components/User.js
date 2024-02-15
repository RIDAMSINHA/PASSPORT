import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';
import "../styles/style.css";
import { Link } from "react-router-dom";
import DETAIL_CONTRACT_ABI from './Contract/detail.json';
import SUB_CONTRACT_ABI from './Contract/pass.json';
import CustomErrorPage from './utilites/CustomErrorPage';

const User = () => {
  const [visa_status, set_visa_status] = useState('');
  const [contractInfo, setContractInfo] = useState({
    Name: "",
    Age: "",
    Date_of_Birth: "",
    Fathername: "",
    Gender: "",
    Nationality: "",
    Address: "",
    Pincode: "",
    Email: "",
    Aadhar: "",
    Image: "../images/userimg.png",
  });
  const [imgUrl, setImgUrl] = useState(null);
  const [sessionIdExists, setSessionIdExists] = useState(false);

  useEffect(() => {
    // Check if session ID exists
    const sessionId = sessionStorage.getItem('us_sessionId');
    if (!sessionId) {
      // Redirect to login page if session ID does not exist
      // window.location.href = '/user_login';

      console.error("Session ID not found. Please log in again.");
      return; // Exit the effect if there is no session ID
    } else {
      setSessionIdExists(true); // Set the state to indicate that the session ID exists
    }

    const fetchUserDetails = async () => {
      const provider = new ethers.JsonRpcProvider(process.env.REACT_APP_RPC_URL);
      const privateKey = process.env.REACT_APP_PRIVATE_KEY;
      const wallet = new ethers.Wallet(privateKey);
      const signer = wallet.connect(provider);
      const userDetailsContractAddress = process.env.REACT_APP_DETAIL_CONTRACT_ADDRESS;
      const userDetailsContractAbi = DETAIL_CONTRACT_ABI.abi;

      const userDetailsContract = new ethers.Contract(userDetailsContractAddress, userDetailsContractAbi, signer);

      const userDetails = await userDetailsContract.getUserDetails();

      const imageUrl = `https://ipfs.io/ipfs/${userDetails.ipfsHash}`; // Construct the image URL

      setContractInfo({
        Name: userDetails.name,
        Age: userDetails.age.toString(),
        Date_of_Birth: userDetails.dateOfBirth,
        Fathername: userDetails.fatherName,
        Gender: userDetails.gender,
        Nationality: userDetails.nationality,
        Address: userDetails.userAddress,
        Pincode: userDetails.pincode.toString(),
        Email: userDetails.email,
        Aadhar: userDetails.aadhar,
        Image: imageUrl,
      });
    };

    if (sessionIdExists) {
      fetchUserDetails(); // Fetch user details only if the session ID exists
    }
  }, [sessionIdExists]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     console.log('Initializing Ether.js...');

  //     // Initialize ethers by connecting to the network
  //     const provider = new ethers.JsonRpcProvider(process.env.REACT_APP_RPC_URL);
  //     const privateKey = process.env.REACT_APP_PRIVATE_KEY;
  //     const wallet = new ethers.Wallet(privateKey);
  //     const signer = wallet.connect(provider);
  //     console.log("Ether.js initialized!!");

  //     // Getting visacontract addr.
  //     const getSubContract = sessionStorage.getItem('us_uid');
  //     console.log('Subcontract address:', getSubContract);

  //     const Sub_abi = SUB_CONTRACT_ABI.abi;
  //     const User_contract = new ethers.Contract(getSubContract, Sub_abi, signer);
  //     console.log("Visa Contract Initialized!!");

  //     const visa_status = await User_contract.getVisaStatus();
  //     console.log('visa_status:', visa_status);
  //     set_visa_status(visa_status);
  //   } catch (error) {
  //     console.error('Error getting status:', error);
  //     setErrorMessage('Error getting status. Please try again.');
  //   }
  // };

  if (sessionIdExists) {
    return (
      <>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <link rel="stylesheet" href="../styles/style.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
              href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@700&family=Fredoka&family=Koh+Santepheap:wght@300;400;700&family=Roboto+Condensed:wght@400;500;600;700;800;900&display=swap"
              rel="stylesheet"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
              href="https://fonts.googleapis.com/css2?family=Kelly+Slab&display=swap"
              rel="stylesheet"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
              href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;500;600;700;800;900&display=swap"
              rel="stylesheet"
            />
            <title>Passport System</title>
          </head>
          <body className="bg-background">
            {/* ... Navigation bar ... */}
            <div className="flex space-x-72">
              <img
                src="../images/passport.png"
                alt="LOGO"
                className="h-14 mt-5 mx-8 mb-5"
              />
              <ul className="flex mt-5 space-x-20">
                <li className="bg-pink-here rounded-3xl w-36 h-12 text-2xl font-kelly pt-2 pl-8 flex space-x-5">
                  Visa
                  <button type="button" id="arrowx1">
                    <img className="h-4 -mt-2" src="../images/arrow.png" />
                  </button>
                </li>

                <div
                  id="arrow1"
                  className="absolute hidden origin-top-right mt-16 w-48 shadow-lg bg-pink-here ring-1 ring-black ring-opacity-5 focus:outline-none font-kons text-xl"
                >
                  <div className="py-1 border-2 border-black">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm bg-pink-here text-black bottom-3 hover:bg-background"
                    >
                      APPLY FOR VISA
                    </a>
                    <hr className="border-b-2 border-black" />
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-black hover:bg-background"
                    >
                      CHECK STATUS
                    </a>
                  </div>
                </div>

                <li className="bg-pink-here rounded-3xl w-36 h-12 text-2xl font-kelly pt-2 pl-8 flex space-x-5">
                  Request
                  <button type="button" id="arrowx2">
                    <img className="h-4 -mt-2" src="../images/arrow.png" />
                  </button>
                </li>

                <div
                  id="arrow2"
                  className="absolute hidden left-500 origin-top-right mt-16 w-48 shadow-lg bg-pink-here ring-1 ring-black ring-opacity-5 focus:outline-none font-kons text-xl"
                >
                  <div className="py-1 border-2 border-black">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm bg-pink-here text-black bottom-3 hover:bg-background"
                    >
                      Change Password
                    </a>
                    <hr className="border-b-2 border-black" />
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-black hover:bg-background"
                    >
                      Change Information
                    </a>
                  </div>
                </div>

                <li className="bg-pink-here rounded-3xl w-36 h-12 text-2xl font-kelly pt-2 text-center">
                  Rules
                </li>
              </ul>

              <button type="submit">
                <Link to="/user_login">
                  <img
                    src="../images/sign-out.png"
                    alt="LOGO"
                    className="h-12 mt-5 mx-8"
                  />
                </Link>
              </button>
            </div>
            <hr className="border-b-2 border-black" />

            {/* User information */}
            <div className="flex ml-56 pl-20 pt-8 pb-8 space-x-20">
              {/* ... User image ... */}
              <img
                src={contractInfo.Image}
                className="h-56 rounded-xl"
                alt="user-photo"
              />
              <table className="bg-pink-here rounded-3xl w-1/2 pl-10 pt-10 pb-10 bg-opacity-50 shadow-xl text-xl font-kelly">
                {/* ... User details ... */}
                <tr className="flex p-2 pl-8 pt-4">
                  <td className="w-60">Name:</td> <td>{contractInfo.Name}</td>
                </tr>
                <tr className="flex pl-8 p-2">
                  <td className="w-60"> Age:</td><td>{contractInfo.Age}</td>
                </tr>
                <tr className="flex pl-8 p-2">
                  <td className="w-60">Date of Birth:</td> <td>{contractInfo.Date_of_Birth}</td>
                </tr>
                <tr className="flex pl-8 p-2">
                  <td className="w-60">Father's Name:</td> <td>{contractInfo.Fathername}</td>
                </tr>
                <tr className="flex pl-8 p-2">
                  <td className="w-60">Gender:</td> <td>{contractInfo.Gender}</td>
                </tr>
                <tr className="flex pl-8 p-2">
                  <td className="w-60"> Nationality:</td>
                  <td>{contractInfo.Nationality}</td>
                </tr>
                <tr className="flex pl-8 p-2">
                  <td className="w-60">Address:</td> <td>{contractInfo.Address}</td>
                </tr>
                <tr className="flex pl-8 p-2">
                  <td className="w-60">Pincode:</td> <td>{contractInfo.Pincode}</td>
                </tr>
                <tr className="flex pl-8 p-2">
                  <td className="w-60">Email:</td> <td>{contractInfo.Email}</td>
                </tr>
                <tr className="flex pl-8 p-2">
                  <td className="w-60">Aadhar no.:</td> <td>{contractInfo.Aadhar}</td>
                </tr>
                {/* <tr className="flex pl-8 p-2">
                <td className="w-60">Passport no.:</td> 
                <td>{contractInfo.Passport}</td>
              </tr>
              <tr className="flex pl-8 p-2">
                <td className="w-60">Date of Issue:</td> <td>{contractInfo.doi}</td>
              </tr>
              <tr className="flex pl-8 pb-8 p-2">
                <td className="w-60">Expiry Date:</td> <td>{contractInfo.expiry}</td>
              </tr> */}
              </table>
            </div>

            <hr className="border-b-2 border-black" />

            {/* Travel log */}
            <div className="mt-5">
              <h1 className="ml-40 mt-7 text-6xl font-kelly">Travel Logs</h1>
              <br />
              <table className="p-5 pl-20 font-alg text-3xl w-5/6 ml-40 border-4 border-black">
                {/* ... Table content ... */}
                <tr className="h-16 p-2">
                  <td className="border-2 p-5 border-black text-center">S.no</td>
                  <td className="text-center border-2 p-5 border-black">
                    From(Place)
                  </td>
                  <td className="border-2 p-5 text-center border-black">
                    To(Place)
                  </td>
                  <td className="border-2 text-center border-black">
                    From(Time)
                  </td>
                  <td className="border-2 p-5 text-center border-black">
                    To(Time)
                  </td>
                </tr>

                {/*  First Row */}

                <tr className="h-16 p-2">
                  <td className="border-2 p-5 text-center border-black"></td>
                  <td className="border-2 text-center border-black"></td>
                  <td className="border-2 text-center border-black"></td>
                  <td className="border-2 text-center border-black"></td>
                  <td className="border-2 text-center border-black"></td>
                </tr>

                {/* Second Row  */}
                <tr className="h-16 p-2">
                  <td className="border-2 text-center border-black p-5"></td>
                  <td className="border-2 text-center border-black"></td>
                  <td className="border-2 text-center border-black"></td>
                  <td className="border-2 text-center border-black"></td>
                  <td className="border-2 text-center border-black"></td>
                </tr>

                {/* Third Row  */}
                <tr className="h-16 p-2">
                  <td className="border-2 text-center border-black p-5"></td>
                  <td className="border-2 text-center border-black"></td>
                  <td className="border-2 text-center border-black"></td>
                  <td className="border-2 text-center border-black"></td>
                  <td className="border-2 text-center border-black"></td>
                </tr>

                {/* Forth Row */}

                <tr className="h-16 p-2">
                  <td className="border-2 text-center border-black p-5"></td>
                  <td className="border-2 text-center border-black"></td>
                  <td className="border-2 text-center border-black"></td>
                  <td className="border-2 text-center border-black"></td>
                  <td className="border-2 text-center border-black"></td>
                </tr>

                {/* Fifth Row */}

                <tr className="h-16 p-2">
                  <td className="border-2 text-center border-black p-5"></td>
                  <td className="border-2 text-center border-black"></td>
                  <td className="border-2 text-center border-black"></td>
                  <td className="border-2 text-center border-black"></td>
                  <td className="border-2 text-center border-black"></td>
                </tr>

                {/* Sixth Row */}

                <tr className="h-16 p-2">
                  <td className="border-2 text-center border-black p-5"></td>
                  <td className="border-2 text-center border-black"></td>
                  <td className="border-2 text-center border-black"></td>
                  <td className="border-2 text-center border-black"></td>
                  <td className="border-2 text-center border-black"></td>
                </tr>

                {/* Seventh Row  */}

                <tr className="h-16 p-2">
                  <td className="border-2 text-center border-black p-5"></td>
                  <td className="border-2 text-center border-black"></td>
                  <td className="border-2 text-center border-black"></td>
                  <td className="border-2 text-center border-black"></td>
                  <td className="border-2 text-center border-black"></td>
                </tr>
              </table>
            </div>

            <br />
            <br />
          </body>
        </html>
      </>
    );
  } else {
    return <CustomErrorPage message="Session ID not found. Please log in again." />;
  }
};

export default User;