import {} from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Inscricao({body, image}: {body: string, bgColor: string, image: any}) {
  return (
    <div style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}} 
    className={`w-full lg:md:w-[50%] h-[400px] md:lg:h-[700px] cursor-pointer flex justify-center items-center text-center relative`}>
      <h1 className='uppercase text-white z-10'>
        Inscrição
        <br />
        <span className='text-3xl'>{body}</span>
      </h1>
      <div className='absolute top-0 left-0 right-0 bottom-0 hover:bg-black/60 transition-all duration-200'></div>
    </div>
  )
}
