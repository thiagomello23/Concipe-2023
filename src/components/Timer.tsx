import {} from 'react'

export default function Timer({date, text}: {date: number, text: string}) {
  return (
    <div className='bg-white p-6 px-8 rounded-xl text-center text-[#009045] font-bold text-2xl'>
      <h1>{date < 10 ? "0" + date : date}</h1>
      <span>{text}</span>
    </div>
  )
}
