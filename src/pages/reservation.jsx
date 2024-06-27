import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import star0 from '../assets/star0.png'
import star1 from '../assets/star1.png'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Reservation = () => {
  const [tempRating, setTempRating] = useState(0);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name === "" || phoneNumber === "" || service === "" || date === "" || time === "") {
      alert("Please fill in all fields!");
      return;
    }
    navigate("/");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-gray-200 flex flex-grow flex-col w-screen bg-cover pt-24 text-black font-sans p-[10vh]">
        <div className="mt-[5vh] text-[4vh] font-semibold">Reservation Form</div>  
        

        <div className="w-full">
          <input name="" id="" placeholder="Name" className="bg-transparent border border-5 border-gray-500 rounded-xl p-3 my-3 text-lg w-full" value={name} onChange={(e) => setName(e.target.value)}/>
          <input name="" id="" placeholder="Active phone number" className="bg-transparent border border-5 border-gray-500 rounded-xl p-3 my-3 text-lg w-full" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
          <select name="Type of Service" id="cars" className="bg-transparent border border-5 border-gray-500 rounded-xl p-3 my-3 text-lg w-full font-sans">
            <option value="" disabled="true">Type of service</option>
            <option value="haircuts and styling">Haircuts and Styling</option>
            <option value="manicure and pedicure">Manicure and Pedicure</option>
            <option value="facial treatments">Facial Treatments</option>
          </select>
          <input type="date" id="" placeholder="Date" className="bg-transparent border border-5 border-gray-500 rounded-xl p-3 my-3 text-lg w-full" value={date} onChange={(e) => setDate(e.target.value)}/>
          <input type="time" id="" placeholder="Time" className="bg-transparent border border-5 border-gray-500 rounded-xl p-3 my-3 text-lg w-full" value={time} onChange={(e) => setTime(e.target.value)}/>
          <button onClick={() => handleSubmit()} className="bg-black w-fit px-10 py-3 rounded-2xl mt-10 text-white hover:bg-gray-500">Submit</button>
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default Reservation