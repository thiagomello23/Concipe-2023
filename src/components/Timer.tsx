import {} from 'react'

export default function Timer({date, text}: {date: number, text: string}) {
  return (
    <div className='bg-[#D9D9D9] p-5 px-8 rounded-xl text-center text-[#009045] font-bold text-xl'>
      <h1>{date < 10 ? "0" + date : date}</h1>
      <span>{text}</span>
    </div>
  )
}
