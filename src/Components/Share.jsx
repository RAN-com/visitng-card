import React, { useState } from "react";

const ShareSection = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard.writeText("https://mikivcard.com/pv-nutrition-fitness");
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };

  return (
    <div
      id="share-section"
      className="w-80 h-auto p-6 bg-gray-100 rounded-lg shadow-lg mx-auto"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Share</h2>
      <div className="py-5"></div>
      <div>
        {/* Copy Link */}
        <div
          className="flex items-center justify-between p-4 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300"
          onClick={copyToClipboard}
        >
          <div className="text-sm text-gray-700">
            https://mikivcard.com/pv-nutrition-fitness
          </div>
          <div className="text-gray-500">
            <i className="fas fa-copy"></i>
          </div>
        </div>
        {copySuccess && (
          <div className="mt-2 text-green-500 text-sm">
            Profile link copied.
          </div>
        )}

        {/* QR Code */}
        <div className="mt-6">
          <div className="text-sm text-gray-700 mb-2">
            Scan below QR to open profile:
          </div>
          <img
            src="https://vcard-bucket.s3.us-east-2.amazonaws.com/A110/1369/1369_qr.png"
            alt="QR Code"
            className="w-40 h-40 mx-auto"
          />
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2 hover:bg-blue-600"
            id="share-button"
            data-title="PV Nutrition & Fitness"
          >
            <i className="fas fa-share-alt"></i>
            Share
          </a>
          <a
            className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2 hover:bg-blue-600"
            id="save-qr-button"
            data-title="PV Nutrition & Fitness"
          >
            <i className="fas fa-download"></i>
            Save QR
          </a>
        </div>

        {/* WhatsApp Share */}
        <div className="mt-8">
          <div className="text-sm text-gray-700 mb-2">
            Share profile to any WhatsApp number:
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center border border-gray-300 rounded-lg px-2">
              <label className="text-gray-700">+91</label>
              <input
                type="text"
                id="whatsapp-input"
                maxLength="10"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter mobile number"
                className="ml-2 py-1 px-2 outline-none w-full"
              />
            </div>
            <a
              id="share-on-whatsapp-button"
              className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600"
              href={`https://wa.me/91${phoneNumber}?text=Check%20out%20this%20profile%3A%20https%3A%2F%2Fmikivcard.com%2Fpv-nutrition-fitness`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
              Share
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareSection;
