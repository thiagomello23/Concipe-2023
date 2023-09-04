import {} from 'react'
import Hero from './components/Hero'
import Palestra from './components/Palestra'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import EventoAnterior from "./assets/evento-anterior.png"
import Cronograma from './components/Cronograma';
import Patrocinio from './components/Patrocinio';
import Localizacao from './components/Localizacao';
import Footer from "./components/Footer"

function App() {
  return (
    <main className='w-full min-h-screen'>
      <Hero />
      <Palestra />
      <div className='w-full'>
        {/* infiniteLoop={true} autoPlay={true} */}
        <Carousel swipeScrollTolerance={50} preventMovementUntilSwipeScrollTolerance={true} emulateTouch={true} showThumbs={false} showStatus={false} stopOnHover={true} interval={5000}>
          <div className='h-[600px] object-cover'>
            <img src={EventoAnterior} alt="" className='w-full h-full' />
          </div>
          <div className='h-[600px] object-cover'>
            <img src="" alt="" />
          </div>
          <div className='h-[600px] object-cover'>
            <img src="" alt="" />
          </div>
        </Carousel>
      </div>
      <Cronograma />
      <Patrocinio />
      <Localizacao />
      <Footer />
    </main>
  )
}

export default App
// https://picwish.com/
// Problema com o componente Palestra