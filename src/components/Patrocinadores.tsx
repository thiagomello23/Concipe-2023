
import ToGo from "../assets/patrocinadores/to-go.png"
import Madeiras2D from "../assets/patrocinadores/2d madeiras.png"
import E3Lajes from "../assets/patrocinadores/3E.png"
import AllDental from "../assets/patrocinadores/all-dental.png"
import Amigo from "../assets/patrocinadores/Amigo.png"
import AutoEscola from "../assets/patrocinadores/auto-escola.png"
import DentalCenter from "../assets/patrocinadores/dental-center.png"
import Golden from "../assets/patrocinadores/Golden.png"
import Infinity from "../assets/patrocinadores/Infinity.png"
import Inspirar from "../assets/patrocinadores/Inspirar.png"
import Lua2 from "../assets/patrocinadores/Lua2.png"
import Missmaker from "../assets/patrocinadores/Miss make.png"
import Velocity from "../assets/patrocinadores/Velocity.png"
import Fabular from "../assets/patrocinadores/fabular.png"
import Acm from "../assets/patrocinadores/acm.png" 
import AlFormaturas from "../assets/patrocinadores/al-formaturas.png"
import Confederados from "../assets/patrocinadores/confederados.png"
import Croma from "../assets/patrocinadores/croma.png"
import Ferraz from "../assets/patrocinadores/ferraz.png"
import Mg from "../assets/patrocinadores/mg.png"

export default function Patrocinadores() {
  return (
    <>
        <div className='flex mt-8 items-center justify-center flex-col lg:flex-row'>
            <div className='w-[220px] lg:w-[25%]'>
                <img src={ToGo} alt="" className='w-full h-full' />
            </div>
            <div className='w-[220px] lg:w-[25%]'>
                <img src={AutoEscola} alt="" className='w-full h-full' />
            </div>
            <div className='w-[220px] lg:w-[25%]'>
                <img src={AlFormaturas} alt="" className='w-full h-full' />
            </div>
            <div className='w-[220px] lg:w-[25%]'>
                <img src={Amigo} alt="" className='w-full h-full' />
            </div>
        </div>
        <div className='flex mt-8 items-center justify-center flex-col lg:flex-row'>
            <div className='w-[220px] lg:w-[25%]'>
                <img src={Confederados} alt="" className='w-full h-full' />
            </div>
            <div className='w-[220px] lg:w-[25%]'>
                <img src={AllDental} alt="" className='w-full h-full' />
            </div>
            <div className='w-[220px] lg:w-[25%]'>
                <img src={Acm} alt="" className='w-full h-full' />
            </div>
            <div className='w-[220px] lg:w-[25%]'>
                <img src={Madeiras2D} alt="" className='w-full h-full' />
            </div>
        </div>
        <div className='flex mt-8 items-center justify-center flex-col lg:flex-row'>
            <div className='w-[220px] lg:w-[25%]'>
                <img src={Ferraz} alt="" className='w-full h-full' />
            </div>
            <div className='w-[220px] lg:w-[25%]'>
                <img src={DentalCenter} alt="" className='w-full h-full' />
            </div>
            <div className='w-[220px] lg:w-[25%]'>
                <img src={Fabular} alt="" className='w-full h-full' />
            </div>
            <div className='w-[220px] lg:w-[25%]'>
                <img src={Croma} alt="" className='w-full h-full' />
            </div>
        </div>
        <div className='flex mt-8 items-center justify-center flex-col lg:flex-row'>
            <div className='w-[220px] lg:w-[25%]'>
                <img src={Mg} alt="" className='w-full h-full' />
            </div>
            <div className='w-[220px] lg:w-[25%]'>
                <img src={Golden} alt="" className='w-full h-full' />
            </div>
            <div className='w-[220px] lg:w-[25%]'>
                <img src={Inspirar} alt="" className='w-full h-full' />
            </div>
            <div className='w-[220px] lg:w-[25%]'>
                <img src={Infinity} alt="" className='w-full h-full' />
            </div>
        </div>
        <div className='flex mt-8 items-center justify-center flex-col lg:flex-row'>
            <div className='w-[220px] lg:w-[25%]'>
                <img src={Missmaker} alt="" className='w-full h-full' />
            </div>
            <div className='w-[220px] lg:w-[25%]'>
                <img src={Lua2} alt="" className='w-full h-full' />
            </div>
            <div className='w-[220px] lg:w-[25%]'>
                <img src={Velocity} alt="" className='w-full h-full' />
            </div>
            <div className='w-[220px] lg:w-[25%]'>
                <img src={E3Lajes} alt="" className='w-full h-full' />
            </div>
        </div>
    </>
  )
}
