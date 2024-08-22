
export default function Tira() {
  return (
    <div 
        // style={{backgroundImage: `url(${BGImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
        className='
            text-center 
            left-1/2 
            translate-x-[-50%] 
          bg-white
            absolute 
            p-4 
            rounded-md 
            cursor-pointer 
            box-shadow
            w-[80%] 
            top-[-2%] 
            md:top-[-0%]
            lg:top-[-1%] 
            xl:top-[-6%]
            lg:w-[800px]
            '
        >
        <a 
          className='font-bold text-xs md:text-base lg:text-3xl text-black' 
          href='http://revistas.fasipe.com.br:3000/index.php/CONCIPE' 
          target='_blank'
        >
          Acesse nossa revista científica
        </a>
    </div>
  )
}
