import {} from 'react'
import FasipeLogo from "../assets/fasipe.png"
import ADSLogo from "../assets/ads.png"

export default function Footer() {
  return (
    <div className='flex justify-center w-full bg-[#2C2C2C] p-12 gap-16 lg:flex-row flex-col'>
      <div className='text-center lg:md:text-left'>
        <h1 className='text-4xl text-[#009045] font-bold mb-4'>CONCIPE 2023</h1>
        <p className='lg:w-[35ch] text-white text-2xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet pariatur dolores quod obcaecati id dignissimos.
        </p>
        <button className='bg-[#009045] hover:bg-opacity-70 text-white p-3 w-[200px] mt-3'>
          Inscreva-se
        </button>
        <div className='mt-32 flex justify-between flex-col md:lg:flex-row items-center gap-10 lg:md:gap-0'>
          <img src={FasipeLogo} className='w-[170px]' alt="" />
          <img src={ADSLogo} className='w-[170px]' alt="" />
        </div>
      </div>
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.9888609869963!2d-55.55142698486031!3d-11.836053391607916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a7819231b536cb%3A0xbb4d3c9b58732758!2sDMD%20-%20Centro%20de%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1660672479521!5m2!1spt-BR!2sbr" className='w-full lg:w-[450px] h-[400px]'></iframe>
      </div>
    </div>
  )
}