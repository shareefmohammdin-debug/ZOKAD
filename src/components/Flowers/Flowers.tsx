
import v1 from '../../assets/flowers/vase1.jpg'
import v2 from '../../assets/flowers/vase2.jpg'
import v3 from '../../assets/flowers/vase3.jpg'
import v4 from '../../assets/flowers/vase4.jpg'
import { ChevronRight } from 'lucide-react'


export default function Flowers() {
    return (
        <div className='mb-20 lg:p-4  lg:pl-35'>
            {/* flower page */}
            <div className=''>
                {/* text and button */}
                <div className='p-5 lg:flex lg:items-center lg:justify-between '>
                    <div className='lg:w-[60%]'>
                    <h1 className='text-5xl font-bold text-[#18193b] my-5 lg:my-10 lg:text-6xl'>Floral Design in a event planning company</h1>
                    <p className='text-[13.5px] text-[#3F41A6] lg:w-[50%] w-[70%]'>Your ceremony & reception venues, your vision, your dress, your colours and anything else you would like to share with us. I am a Gold Coast and Brisbane.</p>
                    <button className=' 
                        w-full lg:w-[30%] sm:w-[60%] bg-[#3F41A6] text-white p-3 rounded-full flex items-center justify-center gap-3
                        cursor-pointer hover:bg-[#343684] transition-all shadow-md my-3'>
                        <span>Get in Touch</span>

                        <ChevronRight />

                    </button>
                    </div>
                    <div className='lg:w-[40%] lg:flex lg:items-center lg:justify-between hidden '>
                    <img src={v4} alt="flowers" className='lg:h-65 lg:w-50 h-55 rounded-[50%] w-40 mb-2' />
                    </div>
                </div>

                <div className='grid grid-cols-3'>

                    <div className='p-2 '>
                        <img src={v1} alt="flowers" className='lg:h-65 lg:w-50 h-55 rounded-3xl w-40 mb-2' />
                        <p className=''><span className='text-3xl font-bold'>01</span><small>/18</small></p>
                    </div>

                    <div className='p-2 '>
                        <img src={v2} alt="flowers" className='lg:h-65 lg:w-50 h-55 rounded-3xl w-40 mb-2' />
                        <p className=''><span className='text-3xl font-bold'>02</span><small>/18</small></p>
                    </div>

                    <div className='p-2  '>
                        <img src={v3} alt="flowers" className='lg:h-65 lg:w-50 h-55 rounded-3xl w-40 mb-2' />
                        <p className=''><span className='text-3xl font-bold'>03</span><small>/18</small></p>
                    </div>

                </div>


            </div>

            {/* next line */}
            <div>

            </div>

        </div>
    )
}