import {} from 'react'
import Timer from '../components/Timer'

export default function renderer({
  days, hours, minutes, seconds, completed
}: {days: number, hours: number, minutes: number, seconds: number, completed: boolean}) {
  if(completed)
  {
    return (
      <div className='bg-[#009045] p-6'>
        <h1 className='text-7xl font-extrabold text-[#009045] text-center mb-5'>
          EXPIROU
        </h1>
        <div className='flex justify-center gap-6'>
          <Timer date={0} text='dia(s)' />
          <Timer date={0} text='horas(s)' />
          <Timer date={0} text='minuto(s)' />
          <Timer date={0} text='segundo(s)' />
        </div>
      </div>
    )
  } else {
    return (
      <div className='flex justify-center items-center flex-col bg-[#009045]/90 p-16'>
        <h1 className='text-5xl mb-6 text-white font-bold'>
          FALTAM
        </h1>
        <div className='flex gap-6 flex-col lg:flex-row'>
          <Timer date={days} text='dia(s)' />
          <Timer date={hours} text='horas(s)' />
          <Timer date={minutes} text='minuto(s)' />
          <Timer date={seconds} text='segundo(s)' />
        </div>
      </div>
    )
  }
    
}
