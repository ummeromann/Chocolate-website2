import React from 'react'

const About = () => {
  return (
    <div>
      <section
        className="bg-cover bg-center h-screen text-center text-[rgb(65,17,17)] pt-[200px] pb-[200px] sm:pt-40 sm:pb-40"
        style={{ backgroundImage: "url(aboutpic.jpg)" }}
      >
        <div className="main">
          <h2 className="text-4xl font-bold sm:text-3xl md:text-4xl">About Us</h2>
          <p className="pt-5 text-lg sm:text-base md:text-lg">
            The Choco Bliss Chocolates, we believe chocolate is more than just a treat it is a moment of joy,
            <br />
            a celebration of flavor, and a way to connect with others.
            <br />
            Founded with a passion for crafting artisanal chocolates,
            <br />
            we use only the finest ingredients to create unique and irresistible confections.
            <br />
            Each piece is made with care, blending tradition and creativity to deliver the perfect balance of taste and texture.
            <br />
            Whether you are treating yourself or sharing with loved ones,
            <br />
            Sweet Bliss is here to make every moment sweeter.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
