import React from "react";

const SharePopup = ({ onClose }) => {
  // List of sharing platforms with their icons
  const sharingPlatforms = [
    { name: 'Facebook', icon: 'https://img.icons8.com/fluency/48/facebook-new.png' },
    { name: 'X(Twitter)', icon: 'https://img.icons8.com/ios-filled/50/twitterx--v1.png' },
    { name: 'LinkedIn', icon: 'https://img.icons8.com/fluency/48/linkedin.png' },
    { name: 'WhatsApp', icon: 'https://img.icons8.com/color/48/whatsapp--v1.png' },
    { name: 'Email', icon: 'https://img.icons8.com/color/48/gmail--v2.png' },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={onClose}>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Share Project</h2>
        <div className="flex justify-around flex-wrap">
          {sharingPlatforms.map((platform, index) => (
            <button key={index} className="flex items-center justify-center p-4 bg-gray-200 rounded-full mb-4 mr-4 hover:bg-gray-300">
              {/* <i className={`mr-2 text-lg ${platform.icon}`}></i> */}
              <img src={platform.icon} alt={platform.name} className="h-10"/>
              {/* {platform.name} */}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SharePopup;
