import {} from 'react'
import Title from './Title'
import BGImage from "../assets/WhatsAppImage2.jpeg"

export default function Localizacao() {
  return (
    <>
      {/* Fotos da palestra */}
      <div 
        style={{backgroundImage: `url(${BGImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
        className='text-center mt-[-40px] md:mt-[-40px] lg:mt-[-42px] xl:mt-[-32px] left-1/2 translate-x-[-50%] bg-white absolute p-4 rounded-md cursor-pointer box-shadow'>
        <a className='font-bold text-xs md:text-base lg:text-3xl text-white' href='https://priscilagiroletta.com.br/evento/150/palestra+com+caito+maia+no+15+concipe' target='_blank'>
          VEJA AQUI AS FOTOS DA ABERTURA DO 15° CONCIPE
        </a>
      </div>
      {/* Localização */}
      <div className='bg-gray-light p-16 py-20'>
        <Title text='LOCAL' />
        <div className='flex justify-center items-center w-full mt-8'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.9888609869963!2d-55.55142698486031!3d-11.836053391607916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a7819231b536cb%3A0xbb4d3c9b58732758!2sDMD%20-%20Centro%20de%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1660672479521!5m2!1spt-BR!2sbr" className='w-full lg:w-[70%] xl:w-[60%] h-[400px]'></iframe>
        </div>
      </div>
    </>
  )
}