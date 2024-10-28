import React from 'react';

const HowItWorks = () => {
  return (
    <div className="container mx-4 py-6 flex flex-col items-center bg-white">
      <h2 className="text-2xl font-bold">How it works?</h2>
      <p className="text-center text-gray-600 max-w-2xl mb-8">
        Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center p-6 rounded-lg transition-transform transform " style={{ backgroundColor: "#E8FBFF", width: '350px' }}>
          <div className="text-4xl mb-4">👤</div>
          <h3 className="text-center font-medium">Select Your Role and <br /> Sign Up</h3>
        </div>

        <div className="flex flex-col items-center p-6 rounded-lg transition-transform transform " style={{ width: '350px' }}>
          <div className="text-4xl mb-4">📝</div>
          <h3 className="text-center font-medium">Buyers Post Your <br /> Requirements</h3>
        </div>

        <div className="flex flex-col items-center p-6 rounded-lg transition-transform transform " style={{ backgroundColor: "#E8FBFF", width: '350px' }}>
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-center font-medium">Review, Select, and <br /> Contact the Best Suppliers</h3>
        </div>

        <div className="flex flex-col items-center p-6 rounded-lg transition-transform transform " style={{ width: '350px' }}>
          <div className="text-4xl mb-4">✏️</div>
          <h3 className="text-center font-medium">Suppliers Complete your <br /> profile and get notified for <br /> opportunities</h3>
        </div>

        <div className="flex flex-col items-center p-6 rounded-lg transition-transform transform " style={{ backgroundColor: "#E8FBFF", width: '350px' }}>
          <div className="text-4xl mb-4">💬</div>
          <h3 className="text-center font-medium">Contact to Buyers and Share <br /> your Quote for the service</h3>
        </div>

        <div className="flex flex-col items-center p-6 rounded-lg transition-transform transform " style={{ width: '350px' }}>
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-center font-medium">Both the Parties can Connect <br /> and Make Business Leave a <br /> Feedback</h3>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

