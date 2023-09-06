import {} from 'react'
import PDF from "../assets/MINICURSOS CONCIPE_atualizado dia 05.09.pdf"

export default function Evento(
  {bgImage, title, data, body, pdf}: 
  {bgImage: string, title: string, data: string, body: string, pdf?: boolean}
) {

  if(pdf) {
    return (
      <a
        style={{backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
        className='p-6 w-full lg:w-[20%] h-[300px] lg:h-[220px] flex justify-center items-center flex-col text-white rounded-md'
        href={PDF} rel="noopener noreferrer" target="_blank"
      >
        <h1 className='text-2xl text-center'>
          {title}
          <br />
          <p className='text-4xl'>{data}</p>
        </h1>
        <h1 className='text-xl text-center mt-3 px-2'>
          {body}
        </h1>
      </a>
    )
  }

  return (
    <div 
      style={{backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}} 
      className='p-6 w-full lg:w-[20%] h-[300px] lg:h-[220px] flex justify-center items-center flex-col text-white rounded-md'
    >
      <h1 className='text-2xl text-center'>
        {title}
        <br />
        <p className='text-4xl'>{data}</p>
      </h1>
      <h1 className='text-xl text-center mt-3 px-2'>
        {body}
      </h1>
    </div>
  )
}
