import Navbar from './components/Navbar/Navbar'
import Home from './components/home/Home'
import KnowUs from './components/KnowUs/KnowUs'
import './App.css'


export default function App() {
  return (
    <div className='selection:bg-[#4b4db6] selection:text-white '>
      <Navbar />
      <Home />
      <KnowUs />
    </div>
  )
}

