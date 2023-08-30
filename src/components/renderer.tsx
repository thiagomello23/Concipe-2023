import {} from 'react'
import Timer from '../components/Timer'
import Banner from "../assets/WhatsAppImage2.jpeg"

export default function renderer({
  days, hours, minutes, seconds, completed
}: {days: number, hours: number, minutes: number, seconds: number, completed: boolean}) {
  if(completed)
  {
    return (
      <div className='bg-[#1E1E1E] p-6'>
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
      <div className='flex justify-center items-center flex-col bg-[#1E1E1E] p-16' style={{backgroundImage: `url(${Banner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <h1 className='text-5xl mb-6 text-white md:lg:text-[#009045] font-bold'>
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
