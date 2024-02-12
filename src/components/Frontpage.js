import React from 'react';
import '../styles/style.css';
import { Link } from 'react-router-dom';

const PassportLogin = () => {
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
        <div>
          <img src="../images/Passport.png" alt="LOGO" className="h-14 mt-5 mx-8" />
        </div>

        <div className="flex ml-96 mt-28 space-x-40">
          <div>
            <a href="/user_login">
              <button className="bg-pink-here h-60 w-72 rounded-3xl border-4 border-white-here font-kelly text-4xl hover:border-4 hover:border-blue-here hover:text-5xl">User <br/>Login
              </button>
            </a> 
            <br/><br/>
            <Link to ="/visa_login">
            <a href="#">
              <button className="bg-pink-here h-60 w-72 rounded-3xl border-4 border-white-here font-kelly text-4xl hover:border-4 hover:border-blue-here hover:text-5xl">Visa Authority <br/>Login
              </button>
            </a> 
            </Link>
          </div>
          <div>
            <Link to="http://localhost:5000/">
              <button className="bg-pink-here h-60 w-72 rounded-3xl border-4 border-white-here font-kelly text-4xl hover:border-4 hover:border-blue-here hover:text-5xl">Government Login
              </button>
            </Link>  <br/><br/>
            <Link to="/border_login">
            <a href="#">
              <button className="bg-pink-here h-60 w-72 rounded-3xl border-4 border-white-here font-kelly text-4xl hover:border-4 hover:border-blue-here hover:text-5xl">Border Authority Login
              </button>
            </a> 
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
};

export default PassportLogin;
