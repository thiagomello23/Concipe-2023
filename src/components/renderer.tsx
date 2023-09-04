import {} from 'react'
import Timer from './Timer'

export default function renderer({
  days, hours, minutes, seconds, completed
}: {days: number, hours: number, minutes: number, seconds: number, completed: boolean}) {
  return (
    <div className='text-white flex flex-col md:flex-row gap-4 md:gap-6 md:text-2xl'>
      <Timer timer={days} body='Dias' />
      <Timer timer={hours} body='Horas' />
      <Timer timer={minutes} body='Minutos' />
      <Timer timer={seconds} body='Segundos' />
      {completed}
    </div>
  )
}
