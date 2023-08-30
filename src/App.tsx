import {} from 'react'
import Hero from './components/Hero'
import Inscricao from './components/Inscricao'
import Footer from './components/Footer'
import Countdown from 'react-countdown'
import renderer from './components/renderer'
import Aluno from "./assets/alunos.png"
import Comunidade from "./assets/comunidade.png"

function App() {

  return (
    <main className='w-full min-h-screen'>
      <Hero />
      <div className='flex overflow-hidden flex-col md:lg:flex-row'>
        <Inscricao body='ALUNO' bgColor='#ffb703' image={Aluno} />
        <Inscricao body='COMUNIDADE' bgColor='#00b4d8' image={Comunidade} />
      </div>
      <Countdown
        date={new Date("09-30-2023")}
        precision={3}
        renderer={renderer}
      />
      <Footer />
    </main>
  )
}

export default App
// https://picwish.com/