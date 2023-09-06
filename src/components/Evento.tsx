import {} from 'react'

export default function Evento({bgImage, title, data, body}: {bgImage: string, title: string, data: string, body: string}) {
  return (
    <div 
      style={{backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}} 
      className='p-6 w-full lg:w-[20%] h-[170px] lg:h-[220px] flex justify-center items-center flex-col text-white rounded-md'
    >
      <h1 className='text-2xl text-center'>
        {title}
        <br />
        <p className='text-4xl'>{data}</p>
      </h1>
      <h1 className='text-xl text-center mt-3 px-2'>
        <span className='text-2xl'>{data}</span> {body}
      </h1>
    </div>
  )
}
