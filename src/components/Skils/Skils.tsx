
import { Camera, Image as ImageIcon, Crosshair } from 'lucide-react'


export default function Skils() {
    return (
        <div className='p-2 grid grid-cols-1 gap-4 my-20 lg:my-24'>
            <h1 className='text-center text-5xl font-bold text-[#18193b] my-5 lg:my-10 lg:text-6xl' >why choose us</h1>

            <div className='flex justify-center items-center gap-8 flex-wrap'>
                <div className='flex flex-col items-center'>
                    <ImageIcon size={100} className=' text-[#3F41A6] font-extrabold p-4  rounded-[50%] shadow-2xl'/>
                    <p className='text-[15.5px] font-bold mt-5'>Professional editing</p>
                    <p className='w-[70%] text-center text-[13.5px] text-[#3F41A6]'>Your creativity our inspiration. Whate ever your want</p>
                </div>

                <div className='flex flex-col items-center'>
                    <Crosshair size={100} className=' text-[#3F41A6] font-extrabold p-4  rounded-[50%] shadow-2xl'/>
                    <p className='text-[15.5px] font-bold mt-5'>Long hour shoots</p>
                    <p className='w-[70%] text-center text-[13.5px] text-[#3F41A6]'>Your creativity our inspiration. Whate ever your want</p>
                </div>

                <div className='flex flex-col items-center'>
                    <Camera size={100} className=' text-[#3F41A6] font-extrabold p-4  rounded-[50%] shadow-2xl'/>
                    <p className='text-[15.5px] font-bold mt-5'>Extensive equipment</p>
                    <p className='w-[70%] text-center text-[13.5px] text-[#3F41A6]'>Your creativity our inspiration. Whate ever your want</p>
                </div>
            </div>

        </div>
    )
}