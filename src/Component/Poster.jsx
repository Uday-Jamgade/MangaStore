import React from 'react'
import { Link } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";

const Poster = () => {


  const posters = [
    { title: 'MONKEY D LUFFY', img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8ddfe70-0b23-4aef-8d58-769268414fcb/df8hkla-de1c17e1-ac29-48a2-8ea2-433f07674987.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q4ZGRmZTcwLTBiMjMtNGFlZi04ZDU4LTc2OTI2ODQxNGZjYlwvZGY4aGtsYS1kZTFjMTdlMS1hYzI5LTQ4YTItOGVhMi00MzNmMDc2NzQ5ODcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Es4AZST2FnD5P8NeYt6-VU4rO4W_GxiDJia0pefc-GU' },
    { title: 'RORONOA ZORO', img: 'https://ih1.redbubble.net/image.4612895624.1218/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg' },
    { title: 'NAMI', img: 'https://i.pinimg.com/originals/b2/80/da/b280da9df368c494eb6845cad594cac9.jpg' },
    { title: 'NICO ROBIN', img: 'https://ih1.redbubble.net/image.2439983229.3731/flat,750x,075,f-pad,750x1000,f8f8f8.jpg' },
    { title: 'SANJI', img: 'https://ih1.redbubble.net/image.4610195247.3818/flat,750x,075,f-pad,750x1000,f8f8f8.jpg' },
    { title: 'JINBE', img: 'https://ih1.redbubble.net/image.4233150831.7097/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg' },
    { title: 'FRANKY', img: 'https://render.fineartamerica.com/images/rendered/default/print/5.5/8/break/images/artworkimages/medium/3/one-piece-franky-bounty-anime-one-piece.jpg' },
    { title: 'CHOPPER', img: 'https://th.bing.com/th/id/OIP.mLu_vuf6zg1cvgFcbDODxwAAAA?rs=1&pid=ImgDetMain' },
    {title:"GOD USOPP", img:'https://i.pinimg.com/originals/ee/f9/42/eef94282fb731257030d6c41c2950b3f.jpg'},
    {title:"THE SK BROOK", img:"https://wallpapercave.com/wp/wp11656433.jpg"}
  ];

  return (
    <div className="max-w-8xl mx-auto p-6">
       <Link to="/category/?category=Manga"><div > <button className='fixed top-20 left-4 bg-gray-400 text-xl  text-white px-4 py-2 rounded shadow-md hover:bg-gray-500 transition'> <MdArrowBack /></button></div></Link>
    <div className="flex flex-wrap -mx-2">
      {posters.map((poster, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-2">
         <div className="poster bg-white shadow-lg rounded-lg p-4 m-2">
      <img className="h-70 w-full object-cover rounded-lg mb-4" src={poster.img} alt={poster.title} />
      <div className="text-center text-3xl font-bold">{poster.title}</div>
    </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Poster
