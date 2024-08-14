import {} from 'react'
import Title from './Title'
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io"
import FasipeLogo from "../assets/fasipe.png"
import AdsLogo from "../assets/ads.png"
import GrupoFasipeLogo from "../assets/grupo_fasipe_logo_comprimida.png"

export default function Footer() {
  return (
    <div className='bg-gray-bold p-12'>
      <div className='lg:w-[500px] m-auto flex-col gap-4'>
        <Title text='ENTRE EM CONTATO CONOSCO' />
        <div className='w-full md:w-[70%] lg:w-[90%] mx-auto mt-5'>
          <div className='flex justify-between gap-2'>
            <div className='text-4xl'>
              <IoLogoWhatsapp />
            </div>
            <h3 className='text-base md:text-xl'>66 98420-6315</h3>
          </div>
          <div className='flex justify-between gap-2 mt-3'>
            <div className='text-4xl'>
              <IoMdMail />
            </div>
            <h3 className='text-base md:text-xl'>npepgrupofasipe@gmail.com</h3>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center flex-col mt-10 gap-10'>
        <div className='flex flex-wrap justify-center gap-10'>
          <a href="https://grupofasipe.com.br/" target='_blank'>
            <img src={GrupoFasipeLogo} alt="" className='w-[200px] md:w-[240px]' />
          </a>
          <img src={FasipeLogo} alt="" className='w-[180px]' />
        </div>
        <img src={AdsLogo} alt="" className='w-[180px]' />
      </div>
    </div>
  )
}