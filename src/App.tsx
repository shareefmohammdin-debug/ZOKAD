import Navbar from './components/Navbar/Navbar'
import Home from './components/home/Home'
import KnowUs from './components/KnowUs/KnowUs'
import Skils from './components/Skils/Skils'
import Experiments from './components/Experiments/Experiments'
import Flowers from './components/Flowers/Flowers'
import OurWorks from './components/OurWorks/OurWorks'
import Footer from './components/Footer/Footer'
import ScrollButton from './components/ScrollButton/ScrollButton'
import './App.css'


export default function App() {
  return (
    <div className='selection:bg-[#4b4db6] selection:text-white '>
      <Navbar />
      <Home />
      <KnowUs />
      <Skils/>
      <Experiments/>
      <Flowers/>
      <OurWorks/>
      <Footer/>
      <ScrollButton />
    </div>
  )
}

