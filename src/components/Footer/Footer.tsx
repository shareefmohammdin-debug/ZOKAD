import {ChevronRight} from 'lucide-react'


export default function Footer(){
    return(
        <div className='p-2 mt-25 mb-8 flex flex-col gap-16 justify-center items-center'>
            <div className='sm:w-[80%] lg:w-[70%] w-[95%] bg-[#431898] p-8 py-12 sm:py-15 lg:py-20 flex flex-col rounded-4xl gap-8'>
                <h1 className='text-4xl font-bold lg:w-[70%] text-white'>Get Started With Us</h1>
                <p className='text-white text-[13.5px] lg:w-[60%] w-[80%]'>Your ceremony & reception venues, yourvision, your dress, your colours and anythingelse you would like to share with us. </p>
                <button className=' 
                        w-full sm:w-[60%] bg-[#ffffffec] text-[#3F41A6] p-3 rounded-full flex items-center justify-center gap-3
                        cursor-pointer hover:bg-[#ffffff] transition-all shadow-md
'>
                        <span>Get in Touch</span>

                        <ChevronRight  />

                    </button>
            </div>

            <div className='w-full flex gap-3.5 justify-around'>
                <div>
                    <p>ZOKA © 2022. Crafted by YEV YEV ❤️</p>
                </div>
                <div className='hidden sm:flex sm:justify-center sm:items-center sm:gap-2 lg:gap-4'>
                    <p>Home</p>
                    <p>Pages</p>
                    <p>Photography</p>
                    <p>Photoshoots</p>
                </div>
            </div>
        </div>
    )
}