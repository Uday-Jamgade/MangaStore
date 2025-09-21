          

import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';  
import { MdArrowBack } from "react-icons/md";


const quotes = [
  {
    img: 'https://th.bing.com/th/id/R.5bc0b02c842c537b339ef9271bb249f4?rik=HF%2f%2bDFD9NKH02A&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f14900000%2fEdward-edward-elric-14996414-1884-2560.jpg&ehk=%2bN582myiVZwEbbD8tKlH0gqEyDe2oshoEW3Y%2bxHa%2b7s%3d&risl=&pid=ImgRaw&r=0',
    text: '"A lesson without pain is meaningless. That’s because no one can gain without sacrificing something. But by enduring that pain and overcoming it, he shall obtain a powerful, unmatched heart."',
    author: '-Edward Elric'
  },
  {
    img: 'https://th.bing.com/th/id/OIP.W6bjTmCLGxtTdjfmBzdxSAHaGl?rs=1&pid=ImgDetMain',
    text: '"Kids who have never seen peace and kids who have never seen war have different values"',
    author: '-Donquixote Doflamingo'
  },
  
  {
    img: 'https://th.bing.com/th/id/R.7cd2ff116ce90ecd6509c7617c3596da?rik=tlgrGJWLNTUk2A&riu=http%3a%2f%2forig10.deviantart.net%2f9634%2ff%2f2011%2f221%2f1%2f7%2frangiku_matsumoto_by_foxdark111-d45yczn.png&ehk=DbZsSvapE7yxbpA2qYYaAMVragirWe9rrDqaf1niHOs%3d&risl=&pid=ImgRaw&r=0',
    text: '"To know sorrow is not terrifying. What is terrifying is to know you can not go back to happiness you could have.',
    author: '-Matsumoto Rangiku'
  },
  {
    img: 'https://assets.mycast.io/actor_images/actor-l-death-note-1019614_large.jpg?1710176354',
    text: '"Learn to treasure your life because unfortunately, it can be taken away from you anytime"',
    author: '-L Lawliet'
  },
  {
    img: 'https://i.pinimg.com/originals/11/46/54/114654efd2169c3ad5992c5df959dcef.jpg',
    text: '"As long as the concept of Winner exists, there will also be Loser"',
    author: '-Uchiha Madara'
  },
  {
    img: 'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/64202805dcfea1001d0b7a1a.jpg',
    text: '"People’s lives don’t end when they die, it ends when they lose faith."',
    author: '-Itachi Uchiha'
  },
  {
    img: 'https://th.bing.com/th/id/OIP.pLOuuX92YKjNEHQu_05iBQHaKl?rs=1&pid=ImgDetMain',
    text: '"No matter how deep the night, it always turns to day, eventually."',
    author: '-Brook'
  },
  {
    img: 'https://vignette.wikia.nocookie.net/fullmetal-alchemist-fanon-wiki-2/images/4/48/ColonelMustang2fmafnwiki2.png/revision/latest?cb=20160225050810',
    text: '"The world isn’t perfect. But it’s there for us, doing the best it can. That’s what makes it so damn beautiful."',
    author: '-Roy Mustang'
  },
 
];

const Quotes = () => {

  

  return (
    <>
     <Link to="/category/?category=Manga"><div > <button className='fixed top-20 left-4 bg-gray-400 text-xl  text-white px-4 py-2 rounded shadow-md hover:bg-gray-500 transition'> <MdArrowBack /></button></div></Link>
      <div className="max-w-8xl mx-auto p-6 ">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">Famous Manga Quotes</h1>
        <div className="flex flex-wrap -mx-4">
          {quotes.map((quote, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
              <div className="bg-zinc-800 shadow-lg rounded-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img className="h-65 w-full object-cover md:w-48" src={quote.img} alt="Author" />
                  </div>
                  <div className="p-8">
                    <p className="mt-2 text-white">{quote.text}</p>
                    <div className="mt-4">
                      <p className="text-lg font-medium text-gray-100">{quote.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </>
  );
};

export default Quotes;
