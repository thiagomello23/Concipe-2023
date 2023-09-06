import {} from 'react'
import Title from './Title'
import Evento from './Evento'
import BGImage from "../assets/WhatsAppImage2.jpeg"

export default function Cronograma() {
  return (
    <div className='p-12 bg-gray-light'>
      <Title text='CRONOGRAMA DE EVENTOS' />
      <div className='flex items-center justify-center flex-wrap gap-10 mt-8'>
        <Evento bgImage={BGImage} title='Palestra' data='26/09' body={"26/09 – 18h - Palestra de abertura – DMD centro de eventos"} />
        <Evento bgImage={BGImage} title='Minicurso' data='27/09' body='27/09 – 19h - Minicursos – simultâneo nas duas unidades Unifasipe' />
        <Evento bgImage={BGImage} title='Minicurso' data='28/09' body='28/09 – 19h - Minicursos – simultâneo nas duas unidades Unifasipe' />
        <Evento bgImage={BGImage} title='Mostra Cientifica' data='29/09' body='29/09 – 19h - Mostra científica / exposição – Unifasipe Aquarela das Artes' />
      </div>
    </div>
  )
}
