import React from 'react'

const HomePage = () => {
  return (
    <div>
      <section
        className="bg-cover bg-center h-screen flex justify-start items-center text-center text-white pl-4 sm:pl-10 md:pl-16"
        style={{ backgroundImage: "url(chocolateshop.jpg)" }}
      >
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-shadow-lg">
            The Choco Bliss Shop
          </h1>
          <p className="text-sm sm:text-base lg:text-lg mt-2">
            Indulge in the art of fine chocolate at Sweet Bliss!<br /> We craft every treat with love,<br />
            using the finest ingredients to bring you a little piece of happiness in every bite.<br />
            From velvety truffles to handcrafted bars and unique seasonal delights,<br />
            there is something for every chocolate lover.<br />
            Visit us today and let the magic of chocolate brighten your day!
          </p>
          <button className="mt-5 py-2 px-6 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition duration-300">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  )
}

export default HomePage
