
import SanPetrus from "../assets/patrocinadores/san-petrus.png"
import Pos from "../assets/patrocinadores/pos.png"
import DMD from "../assets/patrocinadores/DMD.png"

export default function Apoio() {
  return (
    <>
        <div className='flex justify-center items-center flex-col'>
            <div className='w-[300px] lg:w-[70%]'>
                <img src={Pos} alt="" className='w-full h-full' />
            </div>
            <div className='w-[300px] lg:w-[70%]'>
                <img src={SanPetrus} alt="" className='w-full h-full' />
            </div>
            <div className='w-[300px] lg:w-[70%]'>
                <img src={DMD} alt="" className='w-full h-full' />
            </div>
        </div>
    </>
  )
}
