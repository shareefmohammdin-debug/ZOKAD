import c4 from '../../assets/camera/camera4.jpg'
import c3 from '../../assets/camera/camera3.jpg'
import c2 from '../../assets/camera/camera2.jpg'
import {ChevronRight} from 'lucide-react'

export default function Home() {
    return (
        <div className='flex items-center justify-center px-4 my-24'>

            <div className='flex flex-col lg:flex-row items-center justify-center gap-1 w-full max-w-6xl p-0'>

                <div className='w-full lg:w-[40%] flex flex-col gap-6 text-center lg:text-left items-center lg:items-start'>
                    <h1 className='font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#18193b] mb-2'>
                        Where creative process happens
                    </h1>
                    <p className='text-[#25265c] w-full sm:w-[80%] lg:w-[70%] text-sm sm:text-base'>
                        Your creativity, our inspiration. Whatever your story, set it free.
                    </p>
                    <button className=' 
                        w-full sm:w-[60%] bg-[#3F41A6] text-white p-3 rounded-full flex items-center justify-center gap-3
                        cursor-pointer hover:bg-[#343684] transition-all shadow-md
'>
                        <span>Get in Touch</span>

                        <ChevronRight  />

                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-[50%] py-4">
                    <img
                        src={c4}
                        alt="Main Camera"
                        className="col-span-1 sm:col-span-2 w-full h-56 sm:h-64 object-cover rounded-2xl shadow-md"
                    />
                    <img
                        src={c3}
                        alt="Small Camera 1"
                        className="w-full h-48 sm:h-52 object-cover rounded-2xl shadow-md"
                    />
                    <img
                        src={c2}
                        alt="Small Camera 2"
                        className="w-full h-48 sm:h-52 object-cover rounded-2xl shadow-md"
                    />
                </div>

            </div>

        </div>
    );
}