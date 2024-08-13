import {} from 'react'
import Hero from './components/Hero'
import Palestra from './components/Palestra'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cronograma from './components/Cronograma';
import Patrocinio from './components/Patrocinio';
import Localizacao from './components/Localizacao';
import Footer from "./components/Footer"
import BannerImage1 from "./assets/banner-1.png"
import BannerImage2 from "./assets/banner-2.png"
import BannerImage3 from "./assets/banner-3.png"
import BannerImage4 from "./assets/banner-4.png"
import BannerImage5 from "./assets/banner-5.png"
import BannerImage6 from "./assets/banner-6.png"
import Banner from "./components/Banner"

export const bannerImages = [
    BannerImage1,
    BannerImage2,
    BannerImage3,
    BannerImage4,
    BannerImage5,
    BannerImage6
]


function App() {
  return (
    <main className='w-full min-h-screen'>
      <Hero />
      <Palestra />
      <div className='w-full bg-gray-light'>
        {/* infiniteLoop={true} autoPlay={true} */}
        <div className='w-[93%] md:w-[93%] lg:w-[100%] xl:w-[85%] xl:h-[85%] m-auto lg:p-2 xl:p-0'>
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
            {bannerImages.map(ban => (
              <Banner banner={ban} key={ban} />
            ))}
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