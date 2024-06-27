import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

const Reservation = () => {
  const { serviceData, user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

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
      <div className="bg-gray-200 flex flex-grow flex-col w-screen bg-cover pt-[8vh] text-black font-sans p-[10vh]">
        <div className="mt-[5vh] mb-[1vh] text-[4vh] font-semibold">Reservation Form</div>  
        

        <div className="w-full">
          <input name="" id="" placeholder="Name" className="bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full" value={name} onChange={(e) => setName(e.target.value)}/>
          <input name="" id="" placeholder="Active phone number" className="bg-transparent border border-5 border-gray-500 rounded-xl p-[1vh] my-[1vh] text-[1.75vh] w-full" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
          <select name="Type of Service" id="cars" className="bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full font-sans">
            <option value="" disabled="true">Type of service</option>
            <option value="Haircuts and Styling">Haircuts and Styling</option>
            <option value="Manicure and Pedicure">Manicure and Pedicure</option>
            <option value="Facial Treatments">Facial Treatments</option>
            {serviceData.map((service, index) => {
              return (
                <option key={index} value={service.name}>{service.name}</option>
              )
            })}
          </select>
          <input type="date" id="" placeholder="Date" className="bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full" value={date} onChange={(e) => setDate(e.target.value)}/>
          <input type="time" id="" placeholder="Time" className="bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full" value={time} onChange={(e) => setTime(e.target.value)}/>
          <button onClick={() => handleSubmit()} className="bg-black w-fit px-[4vh] py-[1vh] rounded-[1vh] mt-[4vh] text-white hover:bg-gray-500 text-[1.5vh]">Submit</button>
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default Reservation