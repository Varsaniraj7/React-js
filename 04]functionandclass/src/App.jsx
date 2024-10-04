import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import img1 from '../public/IMG1.jpg'

function App() {

  return (
    <>
     <Navbar/>
     <div className='content-container'>
      <img src={img1} alt="" className='img' srcset="" />
     </div>
     <Footer/>
    </>
  )
}

export default App
