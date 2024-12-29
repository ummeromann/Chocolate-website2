import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className="max-w-3xl mx-auto my-12 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form>
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(65,17,17)]"
          />
          <input
            type="email"
            placeholder="Add Email"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(65,17,17)]"
          />
          <input
            type="text"
            placeholder="Phone Number"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(65,17,17)]"
          />
          <textarea
            placeholder="Your Message" 
            rows={5}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(65,17,17)]"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-[rgb(65,17,17)] text-white font-bold rounded-lg hover:bg-[rgb(55,12,12)] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  )
}

export default Contact
