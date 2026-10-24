import { Play } from "lucide-react";

export default function Navbar() {
    return (
        <div className="flex items-center justify-around p-4 w-full">
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold">ZOKAD</h1>
            </div>

            <div className="hidden sm:flex items-center gap-4 lg:gap-6 text-gray-700 text-sm lg:text-base">
                <p className="hover:text-black transition-all hover:border-b-2 border-[#3F41A6] cursor-pointer">Home</p>
                <p className="hover:text-black transition-all hover:border-b-2 border-[#3F41A6] cursor-pointer">Pages</p>
                <p className="hover:text-black transition-all hover:border-b-2 border-[#3F41A6] cursor-pointer">Photography</p>
                <p className="hover:text-black transition-all hover:border-b-2 border-[#3F41A6] cursor-pointer">Photoshoots</p>
            </div>

            <a className="transition-all hover:bg-[#3f41a612]  cursor-pointer flex items-center gap-2 text-[#3F41A6] border-2 border-[#3F41A6] px-3 py-1.5 sm:p-2 rounded-2xl text-xs sm:text-sm">
                <span>Youtube</span>
                <Play size={16} fill="currentColor" />
            </a>
        </div>
    )
}