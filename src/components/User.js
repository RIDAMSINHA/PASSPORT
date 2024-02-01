import React, { useRef, useEffect } from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";

const User = () => {
  const arrowRef1 = useRef(null);
  const arrowRef2 = useRef(null);

  useEffect(() => {
    const toggleDropdown = (buttonId, dropdownId) => {
      const dropdown = document.getElementById(dropdownId);
      dropdown.classList.toggle("hidden");
    };

    document.addEventListener("DOMContentLoaded", function () {
      arrowRef2.current.addEventListener("click", function () {
        toggleDropdown("arrowx2", "arrow2");
      });
    });

    document.addEventListener("DOMContentLoaded", function () {
      arrowRef1.current.addEventListener("click", function () {
        toggleDropdown("arrowx1", "arrow1");
      });
    });
  }, []);

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
            <Link to="/sign_up">
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
              src="../images/userimg.png"
              className="h-56 rounded-xl"
              alt="user-photo"
            />
            <ul className="bg-pink-here rounded-3xl w-1/2 pl-10 pt-10 pb-10 bg-opacity-50 shadow-xl font-kons">
              {/* ... User details ... */}
              <li>Name:</li>
              <li>Age:</li>
              <li>Date of Birth:</li>
              <li>Father's Name:</li>
              <li>Gender:</li>
              <li>Nationality:</li>
              <li>Address:</li>
              <li>Pincode:</li>
              <li>Email:</li>
              <li>Aadhar no.:</li>
              <li>Passport no.:</li>
              <li>Date of Issue:</li>
              <li>Expiry Date:</li>
            </ul>
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
};

export default User;