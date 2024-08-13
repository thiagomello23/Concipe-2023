import {} from 'react'

export default function Button({title, subtitle, color}: {title: string, subtitle?: string, color: string}) {
  return (
    <button 
      style={{backgroundColor: color}} 
      className={`outline-none p-3 rounded-md text-base md:text-xl text-center text-white w-full hover:opacity-80 transition-all duration-200`}
    >
      {title}
      <br />
      {subtitle}
    </button>
  )
}
