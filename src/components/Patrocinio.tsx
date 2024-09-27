import {} from 'react'
import Title from './Title'
import Tira from './Tira'
// import Patrocinadores from "../assets/Patrocinadores.jpg"

import Patrocinadores from './Patrocinadores'
import Apoio from './Apoio'

export default function Patrocinio() {
  return (
    <div className='bg-white md:p-12 md:py-20 flex justify-center items-center flex-col relative'>
      <Tira />
      <div className='lg:w-[80%] mx-auto pt-12 flex flex-col-reverse lg:flex-row'>
        {/* Patrocinador */}
        <div className='lg:w-[70%]'>
          <Title text='Patrocinadores:' />
          <div className='w-full h-full'>
            <Patrocinadores />
          </div>
        </div>
        {/* Apoio */}
        <div className='lg:w-[30%]'>
          <Title text='Apoio:' />
          <div className='w-full h-full'>
            <Apoio />
          </div>
        </div>
      </div>
    </div>
  )
}