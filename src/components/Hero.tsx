import {} from 'react'
import Fundo from "../assets/Fundo-Concipe.png"
import ConcipeLogo from "../assets/LOGO-CONCIPE-2024_horizontal.png"
import Button from './Button'
import LogoFasipe from "../assets/grupo_fasipe_logo_comprimida.png"

export default function Hero() {
  return (
    <div 
      className='w-full min-h-screen bg-white overflow-hidden'
      style={{backgroundImage: `url(${Fundo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}
    >
      <div className='bg-primary w-full min-h-[65px] flex items-center justify-between px-2 md:px-5 md:p-2 text-white'>
        <div className='flex items-center justify-between w-full lg:w-[75%] m-auto text-[10px] md:text-lg'>
          <h3>16º CONCIPE - Congresso Científico da Fasipe</h3>
          <h3>de 01 à 04 de outubro</h3>
        </div>
      </div>
      <div className='w-full lg:w-[1000px] xl:w-[1200px] m-auto p-6'>
        {/* Logo Fasipe */}
        <div className='w-full flex'>
          <a href="https://grupofasipe.com.br/" target='_blank'>
            <img src={LogoFasipe} alt="" className='w-[250px] mb-5 mt-4' />
          </a>
        </div>
        {/* Logo Concipe */}
        <img src={ConcipeLogo} alt="" className='mt-6 md:mt-6 lg:mt-20 lg:w-[85%] mx-auto' />
        {/* Botões Concipe */}
        <div className='w-full mt-12 flex justify-between flex-col gap-4 md:gap-0 md:flex-row'>
          <div className='w-full md:w-[35%] border-b-8 border-secondary'>
            <a href="https://www.eventosecursos.grupofasipe.com.br///?a=Sinop" target='_blank'>
              <Button title='Inscrições' subtitle='Alunos FASIPE' color='#46654E'/>
            </a>
            <p className='text-center text-black font-medium text-lg py-4'>
              Participantes que são alunos do Grupo FASIPE devem participar todos os dias do CONCIPE no DMD e unidades UNIFASIPE
            </p>
          </div>
          <div className='w-full md:w-[35%] border-b-8 border-primary'>
            <a href="https://sis.bilheteagora.com.br/lojanew/detalhes_evento.asp?tploja=&eve_cod=1284" target='_blank'>
              <Button title='Inscrições' subtitle='Público Externo' color='#5EA752'/>
              <p className='text-center text-black font-medium text-lg py-4'>
                Participantes que são alunos do Grupo FASIPE devem participar todos os dias do CONCIPE no DMD e unidades UNIFASIPE
              </p>
            </a>
          </div>
        </div>
        {/* Timer */}
        {/* <div className='w-full text-center'>
          <h1 className='text-3xl md:text-4xl font-medium text-white mt-14 md:mt-24'>Faltam</h1>
          <div className='flex justify-center items-center mt-4'>
            <Countdown
              date={new Date("2023-09-26")}
              renderer={renderer}
            />
          </div>
        </div> */}
      </div>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-gray-950/70 -z-10'></div>
    </div>
  )
}