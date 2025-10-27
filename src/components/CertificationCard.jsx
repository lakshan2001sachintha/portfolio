import React from 'react'

const CertificationCard = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center gap-2 p-3 w-80 bg-gradient-to-r from-indigo-500/20 to-transparent justify-items-center">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover mb-5"
      />
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        {title}
      </h2>
    </div>
  );
};

export default CertificationCard;
