import {} from 'react'
import Title from './Title'
import SanPetrus from "../assets/logo-San-Petrus.png"
import DentalNorte from "../assets/logo-Dental-norte.png"

export default function Patrocinio() {
  return (
    <div className='bg-white p-12 py-16 flex justify-center items-center flex-col'>
      <Title text='PATROCINADORES' />
      <div className='flex mt-8 items-center justify-center gap-12'>
        <div className='w-[180px]'>
          <img src={SanPetrus} alt="" className='w-full h-full' />
        </div>
        <div className='w-[160px]'>
          <img src={DentalNorte} alt="" className='w-full h-full' />
        </div>
      </div>
    </div>
  )
}
