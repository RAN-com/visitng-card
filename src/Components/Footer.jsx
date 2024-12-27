import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white shadow-lg">
      <div className="overflow-x-auto sm:overflow-x-hidden">
        <ul className="flex flex-wrap justify-around sm:justify-evenly items-center space-x-0 sm:space-x-4 py-4">
          {/* Home */}
          <li>
            <a
              className="flex flex-col items-center text-sm hover:text-blue-400"
              href="https://mikivcard.com/pv-nutrition-fitness#home-section"
            >
              <i className="fas fa-home text-lg"></i>
              <span className="mt-1">HOME</span>
            </a>
          </li>

          {/* About Us */}
          <li>
            <a
              className="flex flex-col items-center text-sm hover:text-blue-400"
              href="https://mikivcard.com/pv-nutrition-fitness#about-us-section"
            >
              <i className="fas fa-briefcase text-lg"></i>
              <span className="mt-1">ABOUT US</span>
            </a>
          </li>

          {/* Products */}
          <li>
            <a
              className="flex flex-col items-center text-sm hover:text-blue-400"
              href="https://mikivcard.com/pv-nutrition-fitness#products-services-section"
            >
              <i className="fas fa-box-open text-lg"></i>
              <span className="mt-1">PRODUCTS</span>
            </a>
          </li>

          {/* Payment */}
          <li>
            <a
              className="flex flex-col items-center text-sm hover:text-blue-400"
              href="https://mikivcard.com/pv-nutrition-fitness#payment-options-section"
            >
              <i className="fas fa-money-bill-alt text-lg"></i>
              <span className="mt-1">PAYMENT</span>
            </a>
          </li>

          {/* Gallery */}
          <li>
            <a
              className="flex flex-col items-center text-sm hover:text-blue-400"
              href="https://mikivcard.com/pv-nutrition-fitness#gallery-section"
            >
              <i className="fas fa-file-image text-lg"></i>
              <span className="mt-1">GALLERY</span>
            </a>
          </li>

          {/* Feedback */}
          <li>
            <a
              className="flex flex-col items-center text-sm hover:text-blue-400"
              href="https://mikivcard.com/pv-nutrition-fitness#feedback-section"
            >
              <i className="fas fa-star text-lg"></i>
              <span className="mt-1">FEEDBACK</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
