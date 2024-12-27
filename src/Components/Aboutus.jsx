import React from 'react';

function AboutUs() {
  return (
   
      <div className="w-80 h-auto mx-auto bg-blue-500 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-10">About Us</h2>
        <div className="py-5"></div>
        <table className="w-full text-sm text-gray-700">
          <tbody>
            <tr>
              <td className="py-2 text-right font-semibold">Company Name:</td>
              <td className="py-2">PV Nutrition &amp;Fitness</td>
            </tr>
            <tr>
              <td className="py-2 text-right font-semibold">Nature of Business:</td>
              <td className="py-2">NUTRITION &amp;FITNESS</td>
            </tr>
          </tbody>
        </table>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Our Specialities</h3>
        <ul className="list-disc pl-8 text-sm text-gray-700 space-y-2">
          <li>Complete client satisfaction</li>
          <li>Ethical business policies</li>
          <li>Live In Touch With Our Customers</li>
          <li>Transparent dealings</li>
          <li>Wide connectivity</li>
          <li>We listen, We understand, We provide Solution</li>
          <li>A great experience with Happy clients</li>
        </ul>
        <div className="mt-8 text-gray-700">
          <h3 className="text-2xl font-semibold mb-4">PV NUTRITION &amp; FITNESS WELCOMES YOU…</h3>
          <h3 className="text-xl font-semibold">FSSAI - BRECOVID1052539120</h3>
          <h3 className="text-xl font-semibold">FICSI - TRCV/FICSI/DL/2425/23287</h3>
          <p className="mt-4">Discover wellness with PV Nutrition &amp;Fitness. Personalized nutrition, flexible routines, and cultural integration for a healthier you. Join today!</p>
          <p className="mt-4">We Provide All Types Of Nutrition &amp;Fitness Plans With Affordable Price</p>
          <h3 className="text-2xl font-semibold mt-6">Our Services</h3>
          <ul className="list-disc pl-8 text-sm text-gray-700">
            <li><strong>Weight Loss</strong></li>
            <li><strong>Weight Gain</strong></li>
            <li><strong>Weight Management</strong></li>
            <li><strong>Children Health</strong></li>
            <li><strong>Skin Care</strong></li>
            <li><strong>Immune Health</strong></li>
          </ul>
          <p className="mt-4"><strong>About healthy lifestyle</strong></p>
          <ul className="list-disc pl-8 text-sm text-gray-700">
            <li>Nutrients for body cells</li>
            <li>Elevation and joint health</li>
            <li>Brain and heart health</li>
            <li>Nutrition for Skin Diseases</li>
            <li>Special nutrition for women</li>
            <li>Nutrition for children</li>
            <li>To lose/gain/maintain body weight</li>
            <li>Nutrition for Men</li>
            <li>Improve immunity</li>
            <li>Special nutrition for Eyes</li>
            <li>Nutrition for athletes</li>
            <li>Individual nutrition</li>
          </ul>
          <p className="mt-4"><strong>Exercise is King</strong></p>
          <p><strong>Nutrition is Queen</strong></p>
          <p><strong>Put Them together and</strong></p>
          <p><strong>You have got a Kingdom</strong></p>
          <h3 className="text-xl font-semibold mt-4">80% NUTRITION + 20% EXERCISE = 100% RESULTS</h3>
          <p className="mt-4">இந்த அழைப்பிதழுடன் வருபவர்களுக்கு Free Health Checkup &amp;Consulting…</p>
          <h3 className="text-2xl font-semibold mt-6">Contact</h3>
          <h3 className="text-xl font-semibold">9047793275</h3>
          <h3 className="text-xl font-semibold">7418278569</h3>
        </div>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Documents</h3>
        <a className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg mb-4" href="https://vcard-bucket.s3.us-east-2.amazonaws.com/A110/1369/1729671673885.pdf" download="">
          <div className="text-xl">
            <i className="fa fa-file-pdf"></i>
          </div>
          <div>Palanimanickam(1).pdf</div>
          <div className="text-xl">
            <i className="fa fa-download"></i>
          </div>
        </a>
        <a className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg mb-4" href="https://vcard-bucket.s3.us-east-2.amazonaws.com/A110/1369/1729671673886.pdf" download="">
          <div className="text-xl">
            <i className="fa fa-file-pdf"></i>
          </div>
          <div>Palanimanickam.pdf</div>
          <div className="text-xl">
            <i className="fa fa-download"></i>
          </div>
        </a>
      </div>
   
  );
}

export default AboutUs;
