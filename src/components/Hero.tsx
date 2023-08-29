import {} from 'react'
import FasipeLogo from "../assets/fasipe.png"
import TesteBG from "../assets/teste.jpg"

export default function Hero() {
  return (
    <div 
      className='w-full h-screen bg-black' 
      style={{backgroundImage: `url(${TesteBG})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}
    >
      <div className='lg:w-[1000px] m-auto pt-12'>
        {/* "Navbar" */}
        <div className='flex items-center justify-between px-2 lg:px-0'>
          <h1 className='text-xl md:lg:text-3xl text-[#009045] font-bold'>CONCIPE 2023</h1>
          <img src={FasipeLogo} className='w-[130px]' alt="" />
        </div>
        <div className='lg:w-[50%] mt-24 text-center lg:text-left'>
          <h3 className='uppercase text-white text-2xl  pl-1'>APRESENTA</h3>
          <h2 className='text-7xl text-[#009045] font-extrabold'>TESTE TESTE TESTE</h2>
          <p className='text-3xl my-6 text-white pl-1 lg:w-[40ch]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis nihil deleniti totam tempora sapiente ratione.</p>
          <button className='bg-[#009045] text-white ml-2 p-3 w-[70%] lg:w-full hover:bg-opacity-70 transition-all duration-200 ease-in-out'>
            INSCREVA-SE
          </button>
        </div>
      </div>
    </div>
  )
}
