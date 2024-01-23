import React from 'react';
import '../styles/style.css';
import { Link } from 'react-router-dom';

const GovernmentPortal = () => {
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
      <body className="bg-background">
        <div>
          <img src="../images/Passport.png" alt="LOGO" className="h-14 mt-5 mx-8" />
        </div>

        <div className="mt-10 ml-96">
          <h1 className="font-kons text-7xl">GOVERNMENT PORTAL</h1>
          <br />
          <input
            type="text"
            placeholder="Search For User"
            className="rounded-3xl h-16 p-8 w-3/4 border-4 text-3xl placeholder- border-blue-here hover:placeholder-background"
          /><br />
          <div className="flex mt-5 space-x-10 ml-5">
            <Link to="/approve">
              <button
                className="bg-pink-here h-72 w-96 border-2 border-gray-400 rounded-3xl hover:border-4 hover:border-white font-kons text-3xl hover:text-white-here hover:bg-background"
              >
                Passport <br />
                Approval Request
              </button>
            </Link>
            <br />
            <Link to="/change_password">
              <button
                className="bg-pink-here h-72 w-96 border-2 border-gray-400 rounded-3xl hover:border-4 hover:border-white font-kons text-3xl hover:text-white-here hover:bg-background"
              >
                Reset Password Request
              </button>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
};

export default GovernmentPortal;
