import React, { useEffect, useState } from "react";

const ViewCount = () => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    // Fetch view count from localStorage
    const storedCount = localStorage.getItem("viewCount");
    const currentCount = storedCount ? parseInt(storedCount, 10) : 0;          

    // Update view count
    const newCount = currentCount + 1;
    localStorage.setItem("viewCount", newCount); 
    setViewCount(newCount);
  }, []);

  return (
    <div className="views-label flex items-start text-gray-200 text-sm">
      <i className="fas fa-eye mr-2"></i>
      <span>Views: </span>
      <b className="ml-1">{viewCount}</b>
    </div>
  );
};

export default ViewCount;
