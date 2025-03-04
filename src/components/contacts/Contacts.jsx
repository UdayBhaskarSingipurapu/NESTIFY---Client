import React from 'react';

function Contacts() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg mb-4">
          Have any questions or need support? Get in touch with us!
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Our Contact Details</h2>
          <p className="text-gray-600 text-lg"><strong>Email:</strong> support@nestify.com</p>
          <p className="text-gray-600 text-lg"><strong>Phone:</strong> +1 234 567 890</p>
          <p className="text-gray-600 text-lg"><strong>Address:</strong> 123 Smart Home St, Tech City, USA</p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 text-lg">Facebook</a>
            <a href="#" className="text-blue-400 text-lg">Twitter</a>
            <a href="#" className="text-pink-600 text-lg">Instagram</a>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Send Us a Message</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
            <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg h-32"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
