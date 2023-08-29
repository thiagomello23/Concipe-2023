import {} from 'react'

export default function Inscricao({body}: {body: string, bgColor: string}) {
  return (
    <div style={{backgroundImage: ""}} className={`w-full lg:md:w-[50%] h-[400px] md:lg:h-[700px] bg-transparent hover:bg-black/50 cursor-pointer flex justify-center items-center text-center`}>
      <h1 className='uppercase'>
        Inscrição
        <br />
        <span className='text-3xl'>{body}</span>
      </h1>
    </div>
  )
}
