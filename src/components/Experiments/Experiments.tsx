// import c1 from '../../assets/camera/camera1.jpg'
import c5 from '../../assets/camera/camera5.jpg'
import c6 from '../../assets/camera/camera6.jpg'
import c7 from '../../assets/camera/camera7.jpg'
import c8 from '../../assets/camera/camera8.jpg'
import c9 from '../../assets/camera/camera9.jpg'
import c10 from '../../assets/camera/camera10.jpg'


export default function Experiments() {
    return (
        <div id='experiments' className="my-20 relative ">

            <div className="lg:mb-10 p-10 lg:w-full lg:flex lg:items-center  lg:justify-end">
                <div className='lg:w-[35%] lg:pr-20'>
                    <h1 className="text-5xl font-extrabold text-[#18193b] mb-3">Experiments and personal projects.</h1>
                    <p className="text-[13.5px] text-[#3F41A6]">Your ceremony & reception venues, your vision, your dress, your colours and anything else you would like to share with us. I am a Gold Coast and Brisbane.</p>
                </div>

            </div>


            {/* images */}
            <div className='flex justify-center items-center mb-5
                lg:absolute lg:-top-2 lg:-left-24 lg:z-50 lg:w-[70%]'>

                <div className='w-[95%] shadow rounded-2xl '>
                    <div className=' bg-[#cebbed25] w-full p-3 rounded-t-2xl flex justify-end items-center gap-2'>
                        <span className='h-3 w-3 rounded-[50%] bg-red-500'></span>
                        <span className='h-3 w-3 rounded-[50%] bg-yellow-400'></span>
                        <span className='h-3 w-3 rounded-[50%] bg-green-500'></span>
                    </div>
                    <div className="grid grid-cols-4  gap-3 w-full py-4 p-6 ">
                        <img
                            src={c6}
                            alt="Main Camera"
                            className="col-span-2 sm:h-52  w-full h-35 object-cover rounded-2xl shadow-md"
                        />
                        <img
                            src={c8}
                            alt="Small Camera 1"
                            className="w-full h-35 sm:h-52 object-cover rounded-2xl shadow-md"
                        />
                        <img
                            src={c9}
                            alt="Small Camera 2"
                            className="w-full h-35 sm:h-52 object-cover rounded-2xl shadow-md"
                        />
                        <img
                            src={c5}
                            alt="Small Camera 2"
                            className="w-full h-35 sm:h-52 object-cover rounded-2xl shadow-md"
                        />
                        <img
                            src={c10}
                            alt="Small Camera 2"
                            className="w-full h-35 sm:h-52 object-cover rounded-2xl shadow-md"
                        />
                        <img
                            src={c7}
                            alt="Small Camera 2"
                            className="col-span-2 w-full h-35 sm:h-52 object-cover rounded-2xl shadow-md"
                        />
                    </div>
                </div>

            </div>


            <div className="w-full bg-[#cebbed25] flex items-center justify-around lg:justify-end lg:pr-52 h-40">

                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-extrabold">58+</h1>
                    <p className="text-[10.5px] text-[#22235e]">Cute Customer</p>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-extrabold">38+</h1>
                    <p className="text-[10.5px] text-[#22235e]">Rewards</p>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-extrabold">98+</h1>
                    <p className="text-[10.5px] text-[#22235e]">Project Completed</p>
                </div>

            </div>

        </div>
    )
}

