import {} from 'react'
import Hero from './components/Hero'
import Palestra from './components/Palestra'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cronograma from './components/Cronograma';
import Patrocinio from './components/Patrocinio';
import Localizacao from './components/Localizacao';
import Footer from "./components/Footer"

import Banner1 from "./assets/banner-CONCIPE-SITE-1.png"
import Banner2 from "./assets/banner-CONCIPE-SITE-2.png"
import Banner3 from "./assets/banner-CONCIPE-SITE-3.png"
import Banner4 from "./assets/banner-CONCIPE-SITE-4.png"
import Banner5 from "./assets/banner-CONCIPE-SITE-5.png"

function App() {
  return (
    <main className='w-full min-h-screen'>
      <Hero />
      <Palestra />
      <div className='w-full bg-gray-light'>
        {/* infiniteLoop={true} autoPlay={true} */}
        <div className='w-[93%] md:w-[93%] lg:w-[100%] xl:w-[84%] m-auto lg:p-2 xl:p-0'>
          <Carousel 
            swipeScrollTolerance={50} 
            preventMovementUntilSwipeScrollTolerance={true} 
            emulateTouch={true} 
            showThumbs={false} 
            showStatus={false} 
            stopOnHover={true} 
            interval={5000} 
            infiniteLoop={true} 
            autoPlay={true}
          >
            <div className='h-[230px] md:h-[400px] xl:h-[670px] lg:h-[560px] object-cover w-full'>
              <img src={Banner1} alt="" className='w-full h-full' />
            </div>
            <div className='h-[230px] md:h-[400px] xl:h-[670px] lg:h-[560px] object-cover w-full'>
              <img src={Banner2} alt="" className='w-full h-full' />
            </div>
            <div className='h-[230px] md:h-[400px] xl:h-[670px] lg:h-[560px] object-cover w-full'>
              <img src={Banner3} alt="" className='w-full h-full' />
            </div>
            <div className='h-[230px] md:h-[400px] xl:h-[670px] lg:h-[560px] object-cover w-full'>
              <img src={Banner4} alt="" className='w-full h-full' />
            </div>
            <div className='h-[230px] md:h-[400px] xl:h-[670px] lg:h-[560px] object-cover w-full'>
              <img src={Banner5} alt="" className='w-full h-full' />
            </div>
          </Carousel>
        </div>
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