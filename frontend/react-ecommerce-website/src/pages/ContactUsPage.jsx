import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="max-w-screen-2xl xl:px-28 px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <p className="mb-2"><strong>Phone:</strong> +1-800-123-4567</p>
          <p className="mb-2"><strong>Email:</strong> info@lostandbeyond.com</p>
          <p className="mb-2"><strong>Address:</strong> 123 Main St, New York, NY 10001</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Send Us a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
