import React from 'react';
import '../styles/style.css';

const Password = () => {
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
          href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;500;600;700;800;900&display=swap"
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

        <div className="mt-5">
          <h1 className="ml-96 text-6xl">Password Change Request</h1>
          <br />
          <table className="p-5 pl-20 font-alg text-3xl w-5/6 ml-40">
            <tr className="h-16 p-2">
              <td className="border-2 p-5 border-black text-center">S.no</td>
              <td className="text-center border-2 p-5 border-black">Name</td>
              <td className="border-2 p-5 text-center border-black">Email</td>
              <td className="border-2 p-5 text-center border-black">Passport No.</td>
              <td className="border-2 p-5 text-center border-black">Status</td>
            </tr>

            {/* Repeat the following rows structure as needed */}
            <tr className="h-16 p-2">
              <td className="border-2 p-5 text-center border-black"></td>
              <td className="border-2 text-center border-black"></td>
              <td className="border-2 text-center border-black"></td>
              <td className="border-2 text-center border-black"></td>
              <td className="border-2 text-center border-black">
                <img src="../images/Vector.png" alt="Status" className="pl-32" />
              </td>
            </tr>
            {/* End of repeated rows structure */}
            <tr className="h-16 p-2">
              <td className="border-2 p-5 text-center border-black"></td>
              <td className="border-2 text-center border-black"></td>
              <td className="border-2 text-center border-black"></td>
              <td className="border-2 text-center border-black"></td>
              <td className="border-2 text-center border-black">
                <img src="../images/Vector.png" alt="Status" className="pl-32" />
              </td>
            </tr>
            <tr className="h-16 p-2">
              <td className="border-2 p-5 text-center border-black"></td>
              <td className="border-2 text-center border-black"></td>
              <td className="border-2 text-center border-black"></td>
              <td className="border-2 text-center border-black"></td>
              <td className="border-2 text-center border-black">
                <img src="../images/Vector.png" alt="Status" className="pl-32" />
              </td>
            </tr>
            <tr className="h-16 p-2">
              <td className="border-2 p-5 text-center border-black"></td>
              <td className="border-2 text-center border-black"></td>
              <td className="border-2 text-center border-black"></td>
              <td className="border-2 text-center border-black"></td>
              <td className="border-2 text-center border-black">
                <img src="../images/Vector.png" alt="Status" className="pl-32" />
              </td>
            </tr>
            <tr className="h-16 p-2">
              <td className="border-2 p-5 text-center border-black"></td>
              <td className="border-2 text-center border-black"></td>
              <td className="border-2 text-center border-black"></td>
              <td className="border-2 text-center border-black"></td>
              <td className="border-2 text-center border-black">
                <img src="../images/Vector.png" alt="Status" className="pl-32" />
              </td>
            </tr>
            <tr className="h-16 p-2">
              <td className="border-2 p-5 text-center border-black"></td>
              <td className="border-2 text-center border-black"></td>
              <td className="border-2 text-center border-black"></td>
              <td className="border-2 text-center border-black"></td>
              <td className="border-2 text-center border-black">
                <img src="../images/Vector.png" alt="Status" className="pl-32" />
              </td>
            </tr>
            <tr className="h-16 p-2">
              <td className="border-2 p-5 text-center border-black"></td>
              <td className="border-2 text-center border-black"></td>
              <td className="border-2 text-center border-black"></td>
              <td className="border-2 text-center border-black"></td>
              <td className="border-2 text-center border-black">
                <img src="../images/Vector.png" alt="Status" className="pl-32" />
              </td>
            </tr>
            
          </table>
        </div>
      </body>
    </html>
  );
};

export default Password;
