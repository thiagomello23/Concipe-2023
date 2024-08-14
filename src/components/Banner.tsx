
export default function Banner({banner}: {banner: any}) {
  return (
    <div className='h-[230px] md:h-[400px] lg:h-[560px] xl:h-full object-cover w-full'>
        <img src={banner} alt="" className='w-full h-full' />
    </div>
  )
}
