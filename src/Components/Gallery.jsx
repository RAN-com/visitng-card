import React from "react";

const Gallery = () => {
  const images = [
    "https://vcard-bucket.s3.us-east-2.amazonaws.com/A110/1369/1693472282066.jpeg",
    "https://vcard-bucket.s3.us-east-2.amazonaws.com/A110/1369/1693472282067.jpeg",
    "https://vcard-bucket.s3.us-east-2.amazonaws.com/A110/1369/1693472282068.jpeg",
    "https://vcard-bucket.s3.us-east-2.amazonaws.com/A110/1369/1693472282069.jpeg",
    "https://vcard-bucket.s3.us-east-2.amazonaws.com/A110/1369/1693472282070.jpeg",
    "https://vcard-bucket.s3.us-east-2.amazonaws.com/A110/1369/1693472282071.jpeg",
    "https://vcard-bucket.s3.us-east-2.amazonaws.com/A110/1369/1693472282072.jpg",
    "https://vcard-bucket.s3.us-east-2.amazonaws.com/A110/1369/1693472282073.jpg",
    "https://vcard-bucket.s3.us-east-2.amazonaws.com/A110/1369/1693472282074.jpg",
    "https://vcard-bucket.s3.us-east-2.amazonaws.com/A110/1369/1693472282075.jpg",
    "https://vcard-bucket.s3.us-east-2.amazonaws.com/A110/1369/1693472282076.jpg",
    "https://vcard-bucket.s3.us-east-2.amazonaws.com/A110/1369/1693472282077.jpg",
    "https://vcard-bucket.s3.us-east-2.amazonaws.com/A110/1369/1693472282078.jpg",
    "https://vcard-bucket.s3.us-east-2.amazonaws.com/A110/1369/1693623564668.jpeg",
    "https://vcard-bucket.s3.us-east-2.amazonaws.com/A110/1369/1729679846327.jpg",
    "https://vcard-bucket.s3.us-east-2.amazonaws.com/A110/1369/1729679846328.jpg",
  ];

  return (
    <div className="section-container justify-center text-center" id="gallery-section">
      <h2 className="section-header text-2xl font-bold text-center my-8">
        Gallery
      </h2>
      <div className="p-5"></div>
      <div className="images-container grid grid-cols-1 sm:grid-cols-2  gap-4 ">
        {images.map((src, index) => (
          <div key={index} className="image-wrapper w-72 h-auto mx-auto">
            <img
              className="gallery-image w-40 h-40 rounded-lg shadow-md"
              alt={`Image ${index + 1}`}
              src={src}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
