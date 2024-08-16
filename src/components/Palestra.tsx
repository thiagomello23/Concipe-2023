import {} from 'react'
import Title from './Title'
// import Caito from "../assets/caito-maia.png"
import PalestranteBanner from "../assets/site-Concipe_palestrante.png"

export default function Palestra() {
  return (
    <div className='pb-12 lg:pb-12 xl:pb-14 bg-gray-light'>
      <div className='bg-green min-h-[60px] sm:min-h-[80px] flex justify-center items-center'>
        <Title text='Palestra de abertura - DIA 01 de Outubro no DMD Centro de Eventos' />
      </div>
      <div className='xl:w-[75%]  m-auto mt-0 sm:mt-6 lg:mt-10 flex flex-col p-3 lg:flex-row md:p-6 lg:p-0'>
        <img src={PalestranteBanner} alt="" className='w-full h-full' />
        {/* Caito */}
        {/* <div className='lg:w-[50%]'>
          <img src={Caito} alt="" className='w-full h-full' />
        </div>
        <div className='bg-orange p-6 text-white lg:w-[50%]'>
          <h1 className='md:text-2xl lg:text-4xl xl:text-6xl text-center font-bold mt-10'>CAITO MAIA</h1>
          <p className='tex-sm md:text-xl lg:text-2xl xl:text-4xl mt-5 leading-8 lg:p-5'>
            O descontraído proprietário da Chilli Beans, Caito Maia estudou música na Berkeley University of California. Em 1994 retornou ao Brasil e iniciou sua história no segmento de óculos escuros. Atualmente a Chilli Beans tem mais de 200 endereços exclusivos no Brasil, além de pontos em Portugal, Estados Unidos e Panamá. Em 2006 foi homenageado pela JCI - Junior Chamber International - durante o prêmio "The Outstanding Young Person", eleito o maior destaque
            brasileiro na categoria "sucesso Comercial, Econômico e Empresarial".
          </p>
        </div> */}
      </div>
    </div>
  )
}