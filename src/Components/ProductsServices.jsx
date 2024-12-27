import React from 'react';

function ProductsServices() {
  return (
    <div className=" bg-blue-100 justify-center items-center w-80 h-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Products/Services</h2>
      <div className="space-y-8">
        <div className="w-60  auto bg-blue-500 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-white">WEIGHT LOSS</h3>
          <div className="mt-4 mb-6">
            <img
              className="w-full h-auto rounded-md"
              alt="WEIGHT LOSS"
              src="https://vcard-bucket.s3.us-east-2.amazonaws.com/A110/1369/1693471874592.png"
            />
          </div>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">
            <i className="fa fa-download"></i> Download Product Card
          </button>
          <div className="mt-4">
            <a
              href="https://wa.me/919047793275?text=Hi, I am interested in your product/service: WEIGHT LOSS. Please provide more details."
              target="_blank"
              className="bg-green-500 text-white py-2 px-4 rounded-lg mt-2 block text-center"
            >
              Enquiry
            </a>
          </div>
        </div>
        
        <div className="w-80 h-auto bg-blue-500 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-white">WEIGHT GAIN</h3>
          <div className="mt-4 mb-6">
            <img
              className="w-full h-auto rounded-md"
              alt="WEIGHT GAIN"
              src="https://vcard-bucket.s3.us-east-2.amazonaws.com/A110/1369/1693623498538.png"
            />
          </div>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">
            <i className="fa fa-download"></i> Download Product Card
          </button>
          <div className="mt-4">
            <a
              href="https://wa.me/919047793275?text=Hi, I am interested in your product/service: WEIGHT GAIN. Please provide more details."
              target="_blank"
              className="bg-green-500 text-white py-2 px-4 rounded-lg mt-2 block text-center"
            >
              Enquiry
            </a>
          </div>
        </div>

        <div className="w-80 h-auto bg-blue-500 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-white">WEIGHT MANAGEMENT</h3>
          <div className="mt-4 mb-6">
            <img
              className="w-full h-auto rounded-md"
              alt="WEIGHT MANAGEMENT"
              src="https://vcard-bucket.s3.us-east-2.amazonaws.com/A110/1369/1693472049539.png"
            />
          </div>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">
            <i className="fa fa-download"></i> Download Product Card
          </button>
          <div className="mt-4">
            <a
              href="https://wa.me/919047793275?text=Hi, I am interested in your product/service: WEIGHT MANAGEMENT. Please provide more details."
              target="_blank"
              className="bg-green-500 text-white py-2 px-4 rounded-lg mt-2 block text-center"
            >
              Enquiry
            </a>
          </div>
        </div>

        {/* Add other products/services here following the same structure */}
        
      </div>
    </div>
  );
}

export default ProductsServices;
