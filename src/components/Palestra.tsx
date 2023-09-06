import {} from 'react'
import Title from './Title'
// import Caito from "../assets/caito-maia.png"
import Caito from "../assets/CONCIPE_FEED_CAITO_SITE.png"

export default function Palestra() {
  return (
    <div className='py-12 lg:py-12 lg:px-2 xl:py-14 bg-gray-light'>
      <Title text='PALESTRA DE ABERTURA - DMD CENTRO DE EVENTOS' />
      <div className='xl:w-[85%] m-auto mt-10 flex flex-col p-3 lg:flex-row md:p-6 lg:p-0'>
        <div className='lg:w-[50%]'>
          <img src={Caito} alt="" className='w-full h-full' />
        </div>
        <div className='bg-orange p-6 text-white lg:w-[50%]'>
          <h1 className='md:text-2xl lg:text-4xl xl:text-6xl text-center font-bold mt-10'>CAITO MAIA</h1>
          <p className='tex-sm md:text-xl lg:text-2xl xl:text-4xl mt-5 leading-8 lg:p-5'>
            O descontraído proprietário da Chilli Beans, Caito Maia estudou música na Berkeley University of California. Em 1994 retornou ao Brasil e iniciou sua história no segmento de óculos escuros. Atualmente a Chilli Beans tem mais de 200 endereços exclusivos no Brasil, além de pontos em Portugal, Estados Unidos e Panamá. Em 2006 foi homenageado pela JCI - Junior Chamber International - durante o prêmio "The Outstanding Young Person", eleito o maior destaque
            brasileiro na categoria "sucesso Comercial, Econômico e Empresarial".
          </p>
        </div>
      </div>
    </div>
  )
}