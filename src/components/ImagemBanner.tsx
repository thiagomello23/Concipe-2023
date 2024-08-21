import {} from 'react'

export default function ImagemBanner({link, image}: {link?: boolean, image: any}) {

  if(link) {
    return (
    <a
        className='w-[85%] md:w-[80%] lg:w-[85%] xl:w-[17%] bg-cover'
        href={"#"}
        rel="noopener noreferrer" 
        // target="_blank"
    >
        <img src={image} alt="" className='w-full h-full' />
      </a>
    )
  }

  return (
    <div className='w-[85%] md:w-[80%] lg:w-[85%] xl:w-[17%]'>
        <img src={image} alt="" />
    </div>
  )
}
