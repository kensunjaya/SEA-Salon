import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// import './App.css'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-[url('./assets/background.jpg')] flex flex-grow flex-col w-screen bg-cover pt-24 p-5 text-black font-sans">
        <div className="ml-[10vh] mt-[25vh] text-[10vh] font-semibold">SEA SALON</div>
        <div className="ml-[10vh] text-[3vh]">Beauty and Elegance Redefined</div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
