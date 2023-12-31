import {} from 'react'
import Fundo from "../assets/fundo_desfocado.png"
import ConcipeLogo from "../assets/LOGO-CONCIPE-horizontal_branco-2.png"
import Button from './Button'
import Countdown from "react-countdown"
import renderer from './renderer'
import LogoFasipe from "../assets/logo-UNIFASIPE_BANNER_BRANCO.png"

export default function Hero() {
  return (
    <div 
      className='w-full min-h-screen bg-black overflow-hidden' 
      style={{backgroundImage: `url(${Fundo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", filter: "blur(0px)"}}
    >
      <div className='bg-primary w-full min-h-[40px] flex items-center justify-between px-2 md:px-5 md:p-2 text-white'>
        <div className='flex items-center justify-between w-full lg:w-[75%] m-auto text-[10px] md:text-lg'>
          <h3>15º CONCIPE - de 26 à 29 de setembro</h3>
          <h3>UNIFASIPE CENTRO EDUCACIONAL</h3>
        </div>
      </div>
      <div className='w-full lg:w-[1000px] xl:w-[1200px] m-auto p-6'>
        <div className='w-full flex justify-center items-center'>
          <a href="https://grupofasipe.com.br/" target='_blank'>
            <img src={LogoFasipe} alt="" className='w-[250px] mb-5 mt-4' />
          </a>
        </div>
        <img src={ConcipeLogo} alt="" className='mt-6 md:mt-6 lg:mt-20' />
        <div className='w-full mt-8 flex justify-between flex-col gap-4 md:gap-0 md:flex-row'>
          <div className='w-full md:w-[40%]'>
            <a href="https://www.eventosecursos.grupofasipe.com.br///?a=Sinop" target='_blank'>
              <Button text='Inscrição Aluno' color='#8DC641'/>
            </a>
          </div>
          <div className='w-full md:w-[40%]'>
            <a href="https://sis.bilheteagora.com.br/lojanew/detalhes_evento.asp?tploja=&eve_cod=1284" target='_blank'>
              <Button text='Inscrição Palestra de Abertura' color='#E03A4E'/>
            </a>
          </div>
        </div>
        <div className='w-full text-center'>
          <h1 className='text-3xl md:text-4xl font-medium text-white mt-14 md:mt-24'>Faltam</h1>
          <div className='flex justify-center items-center mt-4'>
            <Countdown
              date={new Date("2023-09-26")}
              renderer={renderer}
            />
          </div>
        </div>
      </div>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-gray-950/70 -z-10'></div>
    </div>
  )
}