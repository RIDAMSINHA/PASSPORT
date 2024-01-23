import React from 'react';
import '../styles/style.css'; 
import Approve from './Approve';

const PassportSystem = () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href= "../styles/style.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* Add other font links here */}
        <title>Passport System</title>
      </head>
      <body className="bg-background">
        <div>
          <img src="../images/Passport.png" alt="LOGO" className="h-14 mt-5 mx-8" />
        </div>

        <div className="mt-5">
          <br />
          <table className="p-5 pl-20 font-alg text-3xl w-5/6 ml-40">
            {/* Row of all the headings */}
            <tr className="h-16 p-2">
              <td className="border-2 p-5 border-black text-center">S.no</td>
              <td className="text-center border-2 p-5 border-black">Name</td>
              <td className="border-2 p-5 text-center border-black">Email</td>
              <td className="border-2 text-center border-black">All Details</td>
              <td className="border-2 p-5 text-center border-black">Status</td>
            </tr>

            {/* Rows with Approve component and dropdowns */}
            <Approve rowNumber={1} />
            <Approve rowNumber={2} />
            <Approve rowNumber={3} />
            <Approve rowNumber={4} />
            <Approve rowNumber={5} />
            <Approve rowNumber={6} />
            <Approve rowNumber={7} />
          </table>
        </div>
      </body>
    </html>
  );
};

export default PassportSystem;
