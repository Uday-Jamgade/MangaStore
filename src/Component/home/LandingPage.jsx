import React from 'react';

const LandingPage = () => {
const product=[{
    name:"Manga",
    url:"https://th.bing.com/th/id/OIP.MitscpDKWtYDYOSROpJqjwHaFa?rs=1&pid=ImgDetMain"
},
{
    name:"Quotes",
    url:"https://th.bing.com/th/id/OIP.BxO25xfxFC4GPqAsugOGsAHaJg?rs=1&pid=ImgDetMain"
},{
    name:"Poster",
    url:"https://th.bing.com/th/id/OIP.wffuIzgNjsFM9N77hKRcQAHaJ5?w=673&h=900&rs=1&pid=ImgDetMain"
},
]

  return (
    <div className="bg-gray-100 min-h-screen">


      {/* Hero Section */}
      <section className="bg-cover bg-center h-96" style={{ backgroundImage: "url('https://via.placeholder.com/1200x600?text=Shop+Now')" }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
          <h2 className="text-4xl text-white font-bold">Welcome to Manga Mage</h2>
          <p className="text-lg text-gray-300 mt-4">Discover the best products at unbeatable prices.</p>
          <button className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Shop Now</button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8 bg-zinc-700">
  <div className="container mx-auto px-4">
    <h3 className="text-2xl font-bold text-white text-center mb-6">Featured Products</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {product.map((product, index) => (
        <div key={index} className="bg-zinc-900 rounded-lg shadow-md overflow-hidden">
          <div className="w-full h-80 relative">
            <img
              src={product.url}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h4 className="text-xl  text-gray-200 font-bold">{product.name}</h4>
            <p className="text-gray-300 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel ligula eu justo accumsan fringilla.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default LandingPage;
