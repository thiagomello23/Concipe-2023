import {} from 'react'
import Title from './Title'
import SanPetrus from "../assets/logo-San-Petrus.png"
import DentalNorte from "../assets/logo-Dental-norte.png"
import Stochera from "../assets/stochera.png"

import AlFormatura from "../assets/AL-FORMATURA.png"
import Croma from "../assets/croma (1).png"
import Horus from "../assets/HORUS LOGO - FUNDO BRANCO.png"
import TopTintas from "../assets/logo-fundo-claro.png"

export default function Patrocinio() {
  return (
    <div className='bg-white p-12 py-16 flex justify-center items-center flex-col'>
      <Title text='PATROCINADORES' />
      <div className='flex mt-8 items-center justify-center gap-12 flex-col lg:flex-row flex-wrap'>
        <div className='w-[180px]'>
          <img src={SanPetrus} alt="" className='w-full h-full' />
        </div>
        <div className='w-[160px]'>
          <img src={DentalNorte} alt="" className='w-full h-full' />
        </div>
        <div className='w-[180px]'>
          <img src={Stochera} alt="" className='w-full h-full' />
        </div>
        <div className='w-[140px] mb-4'>
          <img src={AlFormatura} alt="" className='w-full h-full' />
        </div>
        <div className='w-[160px] mt-3'>
          <img src={Croma} alt="" className='w-full h-full' />
        </div>
        <div className='w-[160px] mb-3'>
          <img src={Horus} alt="" className='w-full h-full' />
        </div>
        <div className='w-[160px]'>
          <img src={TopTintas} alt="" className='w-full h-full' />
        </div>
      </div>
    </div>
  )
}
