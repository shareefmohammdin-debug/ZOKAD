import v0 from '../../assets/flowers/vase0.jpg'
import v00 from '../../assets/flowers/vase00.jpg'
import {ChevronRight} from 'lucide-react'

export default function KnowUs() {
    return (
        <div id='KnowUs' className='flex items-center justify-center px-4 my-8 lg:my-38'>

            <div className='flex flex-col lg:flex-row items-center justify-center gap-1 w-full max-w-8xl p-0'>

                <div className='flex items-center justify-center lg:justify-center gap-2 lg:gap-10 w-full p-1 lg:p-10 '>

                    <img src={v00} alt="" className='w-[40%] rounded-4xl lg:w-[35%]' />
                    <img src={v0} alt="" className='w-[40%] rounded-4xl lg:w-[35%]' />

                </div>

                <div className='grid grid-cols-1 p-2 my-5 gap-2 lg:gap-6'>
                    <p className='sm:text-4xl font-bold text-[#3F41A6]'>GET TO KNOW US</p>
                    <h2 className='sm:text-6xl font-extrabold text-4xl text-[#18193b]'>Why we make it happens</h2>
                    <p className='text-[14.5px] text-[#3F41A6] w-[60%]'>Your ceremony & reception venues, your vision, your dress, your colours and anything else you would like.</p>

                    <button className=' 
                        w-full sm:w-[60%] bg-[#3F41A6] text-white p-3 rounded-full flex items-center justify-center gap-3
                        cursor-pointer hover:bg-[#343684] transition-all shadow-md
                    '>
                        <span>Get in Touch</span>

                        <ChevronRight />

                    </button>
                </div>

            </div>

        </div>
    )
}