import {} from 'react'
import FasipeLogo from "../assets/fasipe.png"
import Fundo from "../assets/fundo_desfocado.png"
import Caito from "../assets/caito_maia.png"

export default function Hero() {
  return (
    <div 
      className='w-full min-h-screen bg-black overflow-hidden' 
      style={{backgroundImage: `url(${Fundo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", filter: "blur(0px)"}}
    >
      <div className='w-full lg:w-[1000px] xl:w-[1200px] h-full m-auto pt-12'>
        {/* "Navbar" */}
        <div className='flex items-center justify-between px-2 lg:px-0'>
          <h1 className='text-xl md:lg:text-3xl text-[#009045] font-bold'>CONCIPE 2023</h1>
          <img src={FasipeLogo} className='w-[130px]' alt="" />
        </div>
        <div className='flex flex-1 mt-28 justify-between items-center lg:items-start flex-col lg:flex-row'>
          <div className='w-full lg:w-[50%] text-center lg:text-left'>
            <h3 className='uppercase text-white text-2xl  pl-1'>APRESENTA</h3>
            <h2 className='text-7xl text-[#009045] font-extrabold'>CAITO MAIA</h2>
            <p className='text-3xl my-6 text-white pl-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis nihil deleniti totam tempora sapiente ratione.</p>
            <button className='bg-[#009045] text-white ml-2 p-3 w-[60%] lg:w-[90%] hover:bg-[#077544] transition-all duration-200 ease-in-out'>
              INSCREVA-SE
            </button>
          </div>
          <div className='mt-[5%]'>
            <img src={Caito} className='w-[170px] md:w-[250px] lg:w-[480px]' alt="" />
          </div>
        </div>
      </div>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-gray-950/70 -z-10'></div>
    </div>
  )
}
