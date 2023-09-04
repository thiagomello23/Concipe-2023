import {} from 'react'

export default function Title({text}: {text: string}) {
  return (
    <h1 className='text-2xl md:text-3xl font-bold text-black w-full text-center'>
      {text}
    </h1>
  )
}
