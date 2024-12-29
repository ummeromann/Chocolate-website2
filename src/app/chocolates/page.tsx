import React from 'react'

const Chocolates = () => {

  const chocolateData = [
    {id: 1, name: "Almond Bliss Bar", price: "$9.00", description: "Milk chocolate with toasted almonds.", image: "/chocolate1.jpg"},
    {id: 2, name: "Hazelnut Haven", price: "$6.00", description: "Chocolate with roasted hazelnut pieces.", image: "/chocolate2.jpg"},
    {id: 3, name: "Berry Burst", price: "$6.50", description: "Dark chocolate infused with raspberry.", image: "/chocolate3.jpg"},
    {id: 4, name: "Pistachio Perfection", price: "$7.00", description: "A luxurious blend of creamy milk chocolate and roasted pistachios.", image: "/chocolate4.jpg"},
    {id: 5, name: "Cookie Crumble Craze", price: "$8.00", description: "Milk chocolate with crunchy cookie bits. You can enjoy every little bit of it.", image: "/chocolate5.jpg"},
    {id: 6, name: "Crunch & Munch Magic", price: "$12.00", description: "Chocolate with crisped rice, caramel chunks, and roasted nuts.", image: "/chocolate6.jpg"},
  ]

  return (
    <div className="mt-12 mx-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {chocolateData.map((chocolate) => (
          <div key={chocolate.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src={chocolate.image} alt={chocolate.name} className="w-full h-72 object-cover rounded-lg"/>
            <h3 className="mt-4 text-xl font-semibold">{chocolate.name}</h3>
            <p className="mt-2 text-gray-700">{chocolate.description}</p>
            <div className="mt-4 text-lg font-bold text-gray-800">{chocolate.price}</div>
            <button className="mt-4 px-6 py-2 bg-[rgb(65,17,17)] text-white font-bold rounded-lg transition duration-300 hover:bg-[rgb(55,12,12)]">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Chocolates
