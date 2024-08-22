import {} from 'react'
import Title from './Title'
import Tira from './Tira'
// import Patrocinadores from "../assets/Patrocinadores.jpg"
import Patrocinio1 from "../assets/Patrocinador-01.png"
import Patrocinio2 from "../assets/Patrocinador-02.png"
import Patrocinio3 from "../assets/Patrocinador-03.png"
import Patrocinio4 from "../assets/Patrocinador-04.png"
import ImagemBanner from './ImagemBanner'

const imagensPatrocinio = [
  Patrocinio1,
  Patrocinio2,
  Patrocinio3,
  Patrocinio4
]

export default function Patrocinio() {
  return (
    <div className='bg-white md:p-12 md:py-20 flex justify-center items-center flex-col relative'>
      <Tira />
      <div className='pt-12 md:pt-0'>
        <Title text='Patrocinadores' />
      </div>
      <div className='w-full flex items-center justify-center flex-wrap gap-10 pt-10'>
        {imagensPatrocinio.map(patro => (
          <ImagemBanner image={patro} key={patro} />
        ))}
      </div>
      {/* <div className='flex mt-8 items-center justify-center gap-8 flex-col lg:flex-row flex-wrap'>
        <div className='w-[180px]'>
          <img src={SanPetrus} alt="" className='w-full h-full' />
        </div>
        <div className='w-[160px]'>
          <img src={DentalNorte} alt="" className='w-full h-full' />
        </div>
        <div className='w-[160px] mb-7'>
          <img src={Stochera} alt="" className='w-full h-full' />
        </div>
        <div className='w-[140px] mb-4'>
          <img src={AlFormatura} alt="" className='w-full h-full' />
        </div>
        <div className='w-[160px] mt-3'>
          <img src={Croma} alt="" className='w-full h-full' />
        </div>
        
        <div className='flex justify-center items-center flex-wrap gap-10 flex-col lg:flex-row'>
          <div className='w-[160px] mb-3'>
            <img src={Horus} alt="" className='w-full h-full' />
          </div>
          <div className='w-[160px]'>
            <img src={TopTintas} alt="" className='w-full h-full' />
          </div>
          <div className='w-[160px]'>
            <img src={Cafe} alt="" className='w-full h-full' />
          </div>
          <div className='w-[130px] mb-3'>
            <img src={ChilliBeans} alt="" className='w-full h-full' />
          </div>
          <div className='w-[130px] mb-3'>
            <img src={Ferraz} alt="" className='w-full h-full' />
          </div>
        </div>
        <div className='w-[140px] mb-3'>
          <img src={AmigoLogo} alt="" className='w-full h-full' />
        </div>
      </div> */}
    </div>
  )
}