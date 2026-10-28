import p2 from '../../assets/diverse/2.jpg'
import p1 from '../../assets/diverse/1.jpg'
import p7 from '../../assets/diverse/7.jpg'
import p5 from '../../assets/diverse/5.jpg'
import p6 from '../../assets/diverse/6.jpg'
import p16 from '../../assets/diverse/8.jpg'
import p9 from '../../assets/diverse/9.jpg'
import p11 from '../../assets/diverse/13.jpg'
import p15 from '../../assets/diverse/3.jpg'
import p12 from '../../assets/diverse/15.jpg'




export default function OurWorks(){
    return(
        <div id='OurWorks' className="my-10 p-2 flex justify-center items-center">
            
            <div className='p-2  w-[90%] sm:w-[80%] lg:w-[70%]'>
                {/* texts */}
                <div className='my-8 lg:w-[80%]'>
                    <h1 className="text-3xl font-bold text-[#18193b] my-2 lg:text-5xl">Our Awesome Works</h1>
                    <p className='text-[14.5px] text-[#3F41A6] lg:w-[50%] w-[70%]'>See what we shooted</p>
                </div>

                {/* images */}
                <div className='grid  grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-x-3 lg:gap-y-10 '>
                    <img src={p2} alt="our works" className='w-50 h-50 rounded-4xl object-cover lg:h-60 lg:w-60 '  />
                    <img src={p1} alt="our works" className='w-50 h-50 rounded-4xl object-cover lg:h-60 lg:w-60' />
                    <img src={p7} alt="our works" className='w-50 h-50 rounded-4xl object-cover lg:h-60 lg:w-60' />
                    <img src={p5} alt="our works" className='w-50 h-50 rounded-4xl object-cover lg:h-60 lg:w-60' />
                    <img src={p6} alt="our works" className='w-50 h-50 rounded-4xl object-cover lg:h-60 lg:w-60' />
                    <img src={p16} alt="our works" className='w-50 h-50 rounded-4xl object-cover lg:h-60 lg:w-60' />
                    <img src={p9} alt="our works" className='w-50 h-50 rounded-4xl object-cover lg:h-60 lg:w-60' />
                    <img src={p11} alt="our works" className='w-50 h-50 rounded-4xl object-cover lg:h-60 lg:w-60' />
                    <img src={p15} alt="our works" className='w-50 h-50 rounded-4xl object-cover  lg:h-60 lg:w-60' />
                    <img src={p12} alt="our works" className='w-50 h-50 rounded-4xl object-cover sm:hidden' />

                </div>
            </div>

        </div>
    )
}

