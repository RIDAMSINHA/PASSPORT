import React from 'react';
import '../styles/style.css';

const PassportDetailform = () => {
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
          <img
            src="../images/Passport.png"
            alt="LOGO"
            className="h-14 mt-5 mx-8"
          />
        </div>

        <div className="bg-pink-here h-96 font-kelly w-4/5 rounded-3xl p-40 pl-80 ml-36 mt-32 pb-80 shadow-xl">
          <label className="text-4xl">
            Enter your password to see the details
          </label>
          <br />
          <br />
          <input
            type="password"
            required
            placeholder="*************"
            className="text-2xl h-12 w-3/4 px-10 pt-3"
          />
          <br />
          <br />

          <button className="rounded-2xl bg-background h-16 w-3/4 border-4 hover:border-blue-here hover:bg-opacity-80 text-2xl border-background bg-opacity-40 hover:text-black">
            <a href="#!">SUBMIT</a>
          </button>
          <br />
        </div>
      </body>
    </html>
  );
};

export default PassportDetailform;
