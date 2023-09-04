import {} from 'react'

export default function Button({text, color}: {text: string, color: string}) {
  return (
    <button style={{backgroundColor: color}} className={`outline-none rounded-full p-3 text-base md:text-lg text-white w-full hover:opacity-80 transition-all duration-200`}>
      {text}
    </button>
  )
}
