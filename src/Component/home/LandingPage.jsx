import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
const product=[{
    name:"Biography",
    url:"https://images.squarespace-cdn.com/content/v1/59e235dcd7bdcec81eb68962/1575923346420-JMLCLRCDNM4XYX2CMNOQ/ke17ZwdGBToddI8pDm48kJF5ay-l9V8mB6cQnyuVGMB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdsRu93NJnnTnrF3G04NpZpQlvqhrKdh3AxLE5JFQSUVDi005ms6_8u9A4oz400EjQ/Historical+Fiction+Mistress+of+the+Ritz+by+Melanie+Benjamin.jpg",
    link:"/category/?category=Biography"
},
{
    name:"Novel",
    url:"https://celadonbooks.com/wp-content/uploads/2023/01/11-Nonfiction-Book_blue-scaled.jpg",
    link:"/category/?category=Novel"
},{
    name:"Graphic Novels/Manga",
    url:"https://th.bing.com/th/id/R.1a2193f0c7779fa7c7095e7be041ddf6?rik=OBm9yQfUZ4lN%2fw&riu=http%3a%2f%2fbooks.disney.com%2fcontent%2fuploads%2f2023%2f03%2f1368092373-scaled.jpg&ehk=iYJ%2b3tFmXdOd0DEJscEbMYM9xEB2C57hDh1OsIBCNs4%3d&risl=&pid=ImgRaw&r=0",
    link:"/category/?category=Manga"
},
]

  return (
    <div className="bg-gray-100 min-h-screen">


      {/* Hero Section */}
      <section className="bg-cover bg-center h-96" style={{ backgroundImage: "url('https://via.placeholder.com/1200x600?text=Shop+Now')" }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
          <h2 className="text-4xl text-white font-bold">Welcome to OtakuShelf</h2>
          <p className="text-lg text-gray-300 mt-4">Discover the best products at unbeatable prices.</p>
          <Link to="/category/?category=Manga">
            <button className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Shop Now</button>
          </Link>
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
            <Link to={product.link}>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Buy Now
              </button>
            </Link>
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
