import {} from 'react'
import Title from './Title'
import Dia1Evento from "../assets/Dia-1-Evento.png"
import Dia2Evento from "../assets/Dia-2&3-Evento.png"
import Dia4Evento from "../assets/Dia-4-Evento.png"

export default function Cronograma() {

  return (
    <div className='pt-12 p-0 lg:p-12 bg-gray-light'>
      <Title text='Cronograma de eventos' />
      <div className='flex items-center justify-center flex-wrap gap-10 mt-8 mb-10'>
        <a
          className='w-full lg:w-[80%] xl:w-[40%] bg-cover'
        >
          <img src={Dia1Evento} alt="" className='w-full h-full' />
        </a>
        <a
          className='w-full lg:w-[80%] xl:w-[40%] bg-cover'
        >
          <img src={Dia2Evento} alt="" className='w-full h-full' />
        </a>
        <a
          className='w-full lg:w-[80%] xl:w-[40%] bg-cover'
        >
          <img src={Dia4Evento} alt="" className='w-full h-full' />
        </a>
        {/* <Evento bgImage={BGImage} title='Palestra' data='26/09' body={"18h - Palestra de abertura – DMD centro de eventos"} />
        <Evento bgImage={BGImage} title='Minicurso' data='27/09' body='19h - Minicursos – simultâneo nas duas unidades Unifasipe' pdf />
        <Evento bgImage={BGImage} title='Minicurso' data='28/09' body='19h - Minicursos – simultâneo nas duas unidades Unifasipe' pdf />
        <Evento bgImage={BGImage} title='Mostra Cientifica' data='29/09' body='19h - Mostra científica / exposição – Unifasipe Aquarela das Artes' /> */}
      </div>
    </div>
  )
}
