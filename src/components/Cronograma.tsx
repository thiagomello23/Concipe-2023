import {} from 'react'
import Title from './Title'
import Dia1Evento from "../assets/cronograma_concipe_dia-01.png"
import Dia2Evento from "../assets/cronograma_concipe-dia-02.png"
import Dia3Evento from "../assets/cronograma_concipe_dia-03.png"
import Dia4Evento from "../assets/cronograma_concipe_dia-04 (1).png"
import ImagemBanner from './ImagemBanner'

const imagensDiasEventos = [
  Dia1Evento,
  Dia2Evento,
  Dia3Evento,
  Dia4Evento
]

export default function Cronograma() {

  return (
    <div className='pt-12 p-0 lg:p-12 bg-gray-light'>
      <Title text='Cronograma de eventos' />
      <div className='flex items-center justify-center flex-wrap gap-10 mt-12 mb-10'>
        {imagensDiasEventos.map(ev => (
          <ImagemBanner image={ev} link />
        ))}
        {/* <Evento bgImage={BGImage} title='Palestra' data='26/09' body={"18h - Palestra de abertura – DMD centro de eventos"} />
        <Evento bgImage={BGImage} title='Minicurso' data='27/09' body='19h - Minicursos – simultâneo nas duas unidades Unifasipe' pdf />
        <Evento bgImage={BGImage} title='Minicurso' data='28/09' body='19h - Minicursos – simultâneo nas duas unidades Unifasipe' pdf />
        <Evento bgImage={BGImage} title='Mostra Cientifica' data='29/09' body='19h - Mostra científica / exposição – Unifasipe Aquarela das Artes' /> */}
      </div>
    </div>
  )
}
