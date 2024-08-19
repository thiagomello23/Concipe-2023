import {} from 'react'

export default function Title({text}: {text: string}) {
  return (
    <h1 className='text-xl md:text-3xl xl:text-4xl font-bold text-black w-full text-center'>
      {text}
    </h1>
  )
}
