import {} from 'react'
import Title from './Title'

export default function Localizacao() {
  return (
    <div className='bg-gray-light p-12'>
      <Title text='LOCAL' />
      <div className='flex justify-center items-center w-full mt-8'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.9888609869963!2d-55.55142698486031!3d-11.836053391607916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a7819231b536cb%3A0xbb4d3c9b58732758!2sDMD%20-%20Centro%20de%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1660672479521!5m2!1spt-BR!2sbr" className='w-full lg:w-[70%] xl:w-[60%] h-[400px]'></iframe>
      </div>
    </div>
  )
}
