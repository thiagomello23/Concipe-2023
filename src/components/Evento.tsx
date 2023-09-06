import {} from 'react'

export default function Evento({bgImage, title, data, body}: {bgImage: string, title: string, data: string, body: string}) {
  return (
    <div 
      style={{backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}} 
      className='p-6 w-full lg:w-[20%] h-[170px] lg:h-[200px] flex justify-center items-center flex-col text-white rounded-md'
    >
      <h1 className='text-3xl text-center'>
        {title}
        <br />
        {data}
      </h1>
      <p className='text-center mt-2 px-2'>
        {body}
      </p>
    </div>
  )
}
