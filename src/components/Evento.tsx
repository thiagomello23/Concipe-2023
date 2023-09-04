import {} from 'react'

export default function Evento({bgImage, title, data}: {bgImage: string, title: string, data: string}) {
  return (
    <div 
      style={{backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}} 
      className='p-6 w-full lg:w-[20%] h-[170px] lg:h-[200px] flex justify-center items-center text-white rounded-md'
    >
      <h1 className='text-3xl text-center'>
        {title}
        <br />
        {data}
      </h1>
    </div>
  )
}
