import {} from 'react'

export default function Timer({timer, body}: {timer: number, body: string}) {
  return (
    <div>
      <h2>{timer < 10 ? "0": ""}{timer}</h2>
      <h2>{body}</h2>
    </div>
  )
}
