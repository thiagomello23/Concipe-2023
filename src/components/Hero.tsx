import {} from 'react'
import FasipeLogo from "../assets/fasipe.png"
import Fundo from "../assets/fundo_desfocado.png"
import Caito from "../assets/caito_maia.png"

export default function Hero() {
  return (
    <div 
      className='w-full h-[110vh] md:h-[110vh] lg:h-screen bg-black relative' 
      style={{backgroundImage: `url(${Fundo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", filter: "blur(0px)"}}
    >
      <div className='w-full lg:w-[1000px] xl:w-[1200px] m-auto pt-12 z-10 absolute top-0 left-1/2 translate-x-[-50%]'>
        {/* "Navbar" */}
        <div className='flex items-center justify-between px-2 lg:px-0'>
          <h1 className='text-xl md:lg:text-3xl text-[#009045] font-bold'>CONCIPE 2023</h1>
          <img src={FasipeLogo} className='w-[130px]' alt="" />
        </div>
        <div className='lg:w-[50%] mt-24 text-center lg:text-left'>
          <h3 className='uppercase text-white text-2xl  pl-1'>APRESENTA</h3>
          <h2 className='text-7xl text-[#009045] font-extrabold'>CAITO MAIA</h2>
          <p className='text-3xl my-6 text-white pl-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis nihil deleniti totam tempora sapiente ratione.</p>
          <button className='bg-[#009045] text-white ml-2 p-3 w-[70%] lg:w-full hover:bg-opacity-70 transition-all duration-200 ease-in-out'>
            INSCREVA-SE
          </button>
        </div>
      </div>
      <div className='absolute left-[50%] translate-x-[-50%] lg:left-[55%] lg:translate-x-0 z-10 bottom-0'>
        <img src={Caito} className='md:w-[330px] lg:w-[480px]' alt="" />
      </div>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70'></div>
    </div>
  )
}
