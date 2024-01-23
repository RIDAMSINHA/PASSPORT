import React from 'react';
import '../styles/style.css';

const Sign_up = () => {
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
            <form className="font-kelly ml-10 mt-5 space-y-2">
              {/* Full Name */}
              <label htmlFor="fullname" className="text-3xl mt-8">
                Full Name
              </label>
              <br />
              <input
                type="text"
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
                placeholder="Password"
                required
                className="h-10 w-96 px-5 focus:border-blue-here focus:border-4 hover:border-blue-here hover:border-4"
              />
              <br />

              {/* Buttons */}
              <br />
              <button className="rounded-2xl bg-background h-12 w-96 border-4 border-blue-here hover:border-background hover:bg-opacity-40 hover:text-black">
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

export default Sign_up;
