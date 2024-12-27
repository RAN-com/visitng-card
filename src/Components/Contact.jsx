import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <>
      <div className="py-5"></div>
      <div className="lower flex justify-center">
        <div className="card bg-white shadow-lg rounded-lg w-80 h-auto p-6">
          <h2 className="text-2xl font-bold text-center mb-6 bg-blue-500 text-white p-3 rounded-lg">
            Contact Us
          </h2>
          <table className="w-full table-auto text-sm">
            <tbody>
              <tr>
                <td className="pr-4">
                  <a target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-map-marker-alt text-xl text-red-500"></i>
                  </a>
                </td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-700 hover:text-blue-600"
                  >
                    No.52 62A, AVP அழகம்மாள் நகர், இந்தியன் எலக்ட்ரிக்கல் மாடியில்,
                    (இந்தியன் பேங்க்) மீனாட்சி மருத்துவமனை (Barbe Queen) எதிரில்,
                    திருச்சி ரோடு, புதிய பேருந்து நிலையம், தஞ்சாவூர் - 613005
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-4">
                  <a target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-map-marker-alt text-xl text-red-500"></i>
                  </a>
                </td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-700 hover:text-blue-600"
                  >
                    No.52 62A, AVP Alagammal Nagar, Indian Electrical Floor,
                    (Indian Bank) Opposite Meenakshi Hospital (Barbe Queen), Trichy
                    Road, New Bus Stand, Thanjavur - 613005
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-4">
                  <a href="tel:+919047793275" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-phone fa-flip-horizontal text-xl text-green-500"></i>
                  </a>
                </td>
                <td>
                  <a
                    href="tel:+919047793275"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-gray-700 hover:text-blue-600 mb-2"
                  >
                    +91-9047793275
                  </a>
                  <a
                    href="tel:+917418278569"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-700 hover:text-blue-600"
                  >
                    +91-7418278569
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="py-5"></div>
          <div className="shadow-buttons justify-center flex flex-wrap gap-4">
            <a
              className="shadow-button bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600 text-sm"
              href=""
              download=""
            >
              <i className="fas fa-download mr-2"></i>
              Certificate
            </a>
          
          </div>
       
    
<ul className="inprofile share-buttons flex justify-center gap-4 mt-6">
  <li>
    <a target="_blank" rel="noopener noreferrer">
      <FaFacebookF className="text-blue-600 text-xl" />
    </a>
  </li>
  <li>
    <a target="_blank" rel="noopener noreferrer">
      <FaTwitter className="text-blue-400 text-xl" />
    </a>
  </li>
  <li>
    <a target="_blank" rel="noopener noreferrer">
      <FaInstagram className="text-pink-500 text-xl" />
    </a>
  </li>
  <li>
    <a target="_blank" rel="noopener noreferrer">
      <FaYoutube className="text-red-500 text-xl" />
    </a>
  </li>
  <li>
    <a target="_blank" rel="noopener noreferrer">
      <FaPinterestP className="text-red-400 text-xl" />
    </a>
  </li>
  <li>
    <a target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn className="text-blue-700 text-xl" />
    </a>
  </li>
  <li>
    <a target="_blank" rel="noopener noreferrer">
      <FaTelegramPlane className="text-blue-500 text-xl" />
    </a>
  </li>
</ul>
</div>
</div>
    </>
  );
};

export default ContactUs;
