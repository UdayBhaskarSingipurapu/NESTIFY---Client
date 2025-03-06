import React from 'react';

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Nestify</h1>
        <p className="text-gray-600 text-lg mb-4">
          Nestify is a modern platform designed to simplify hostel management by integrating smart solutions for organizing, automating, and enhancing your living space. Whether you're looking to track tasks, manage bills, or improve hostel security, Nestify provides a seamless experience.
        </p>
        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">Our Mission</h2>
        <p className="text-gray-600 text-lg">
          Our mission is to make home management effortless through technology, ensuring comfort, efficiency, and convenience for every homeowner.
        </p>
        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">Why Choose Nestify?</h2>
        <ul className="list-disc list-inside text-gray-600 text-lg">
          <li>Smart automation for everyday tasks</li>
          <li>Intuitive and user-friendly interface</li>
          <li>Secure and private hostel management</li>
          <li>Seamless integration with smart hostel devices</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
