import { ChevronUp } from "lucide-react";


function scrollUp(){
    window.scrollTo({top:0,behavior: 'smooth' })
}

export default function ScrollButton() {
    return (
        <button onClick={scrollUp} className="
         fixed bottom-5 right-5 z-50 shadow p-2 sm:p-3 lg:p-3.5 bg-[#3F41A6] hover:bg-[#5557ce] text-white rounded-[50%]
        ">
            <ChevronUp/>
        </button>
    )
}