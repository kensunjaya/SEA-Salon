import { useState } from 'react'
import haircut from './assets/haircut.png'
import manicure from './assets/manicure.png'
import facial_treatment from './assets/facial_treatment.png'

// import './App.css'

const App = () => {

  return (
    <main className="flex flex-col min-h-screen">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      <div className="fixed w-full h-[8vh] bg-white font-sans flex items-center px-10">
        <div className="text-black text-2xl font-medium">SEA Salon</div>
      </div>
      <div className="bg-[url('./assets/background.jpg')] flex flex-grow flex-col w-screen bg-cover pt-24 p-5 text-black font-sans">
        <div className="ml-[10vh] mt-[25vh] text-[10vh] font-semibold">SEA SALON</div>  
        <div className="ml-[10vh] text-[3vh]">Beauty and Elegance Redefined</div>
      </div>
      <div className="w-full bg-white h-[20vh] font-sans flex mt-auto text-black text-center items-center">
        <div className="border border-t-black w-[10%] h-full flex flex-col justify-center items-center">
          <div className="text-left w-full px-5">Contact Detail:</div>
          <div className="my-2 px-5 text-left w-full">
            <div className="font-semibold">Thomas</div>
            <div>08123456789</div>
          </div>
          <div className="my-2 px-5 text-left w-full">
            <div className="font-semibold">Sekar</div>
            <div>08164829372</div>
          </div>
        </div>
        <div className="border border-x-black border-t-black w-[30%] h-full font-light flex flex-col justify-center text-[3vh] bg-gray-300">
          Our Services
        </div>
        <div className="border border-t-black border-r-black w-[20%] h-full flex flex-col justify-center items-center">
          <img src={haircut} alt="Haircut" className="w-[8vh] h-[8vh] opacity-60 m-3"/>
          <div>Haircuts and styling</div>
        </div>
        <div className="border border-t-black border-r-black w-[20%] h-full flex flex-col justify-center items-center">
          <img src={manicure} alt="Manicure" className="w-[8vh] h-[8vh] opacity-60 m-3"/>
          <div>Manicure and Pedicure</div>
        </div>
        <div className="border border-t-black w-[20%] h-full flex flex-col justify-center items-center">
          <img src={facial_treatment} alt="Manicure" className="w-[8vh] h-[8vh] opacity-60 m-3"/>
          <div>Facial Treatments</div>
        </div>
      </div>
    </main>
  )
}

export default App
