import React from 'react'

const CertificationCard = ({ image, title,link }) => {
  return (
   <div>
      <div onClick={() => window.open(link, "_blank")} className="flex flex-col gap-2 p-3 w-80 bg-gradient-to-r from-indigo-500/20 to-transparent items-center">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover mb-5"
      />
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 justify-items-center">
        {title}
      </h2>
    </div>
   </div>
  );
};

export default CertificationCard;
