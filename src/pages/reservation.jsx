import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../firebaseSetup"
import { ScaleLoader } from "react-spinners"

const Reservation = () => {
  const { user, branchData, loading, setLoading } = useContext(AuthContext);
  const [inputTypeTime, setInputTypeTime] = useState('text');
  const [inputTypeDate, setInputTypeDate] = useState('text');
  const [name, setName] = useState("");
  const [selectedBranch, setSelectedBranch] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const convertTimeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);



  const getReservationData = async () => {
    try {
      const docRef = doc(db, "datas", "reservation");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log("Data does not exist in database!");
        return null;
      }
    } catch (e) {
      console.error("Error getting document:", e);
      return null;
    }
  };

  const postReservation = async () => {
    try {
      setLoading(true);
      const reservationData = await getReservationData();
      if (reservationData) {
        const newReservationData = {
          reservations: [...reservationData.reservations, { reservedAt: new Date().toLocaleString(), name: name, phone: phoneNumber, service: branchData[selectedBranch].services[service].name, branch: branchData[selectedBranch].name, location: branchData[selectedBranch].location, date: date, time: time}]
        };
        await updateDoc(doc(db, "datas", "reservation"), {
          reservations: newReservationData.reservations,
        });
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          navigate("/");
        }, 3000);
      } else {
        console.log("Data does not exist in database!");
      }
    } catch (e) {
      console.error("Error getting document:", e);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = async () => {
    if (name === "" || phoneNumber === "" || date === "" || time === "") {

      console.log(service)
      alert("Please fill in all fields!");
      return;
    }
    if (convertTimeToMinutes(time) < convertTimeToMinutes(branchData[selectedBranch].open) || convertTimeToMinutes(time) > convertTimeToMinutes(branchData[selectedBranch].close)) {
      setErrorMsg("Please select a time within the operating hours!");
      return;
    }
    if (convertTimeToMinutes(time) + parseInt(branchData[selectedBranch].services[service].duration) > convertTimeToMinutes(branchData[selectedBranch].close)) {
      setErrorMsg("Please select a time that allows for the duration of the service!");
      return;
    }
    await postReservation();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {submitted && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 bg-black font-sans text-3xl">
          <div>Your reservation has been confirmed! You'll be redirected to Home page shortly.</div>
          <ScaleLoader loading={submitted} color="white" margin={5} height={35} />
        </div>
      )}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black">
          <ScaleLoader loading={loading} color="white" margin={5} height={35} />
        </div>
      )}
      <Navbar active="reservation" />
      <div className="bg-gray-200 flex flex-grow flex-col w-screen bg-cover pt-[8vh] text-black font-sans p-[10vh]">
        <div className="mt-[5vh] mb-[1vh] text-[4vh] font-semibold">Reservation Form</div>  
        

        <div className="w-full">
          <input name="" id="" placeholder="Name" className="bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full" value={name} onChange={(e) => setName(e.target.value)}/>
          <input name="" id="" placeholder="Active phone number" className="bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
          <select onChange={(e) => {setSelectedBranch(parseInt(e.target.value))}} name="Branch Name" className="bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full font-sans">
            <option value="" disabled={true}>Select a branch</option>
            {branchData.map((branch, index) => {
              return (
                <option key={index} value={index}>{`${branch.name} - ${branch.location} (${branch.open} - ${branch.close})`}</option>
              )
            })}
          </select>
          <select onChange={(e) => {setService(parseInt(e.target.value))}} name="Type of Service" className="bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full font-sans">
            <option value="" disabled={true}>Type of service</option>
            {branchData[selectedBranch].services.map((serviceData, index) => {
              return (
                <option key={index} value={index}>{`${serviceData.name} (${serviceData.duration} minutes)`}</option>
              )
            })}
          </select>
          
          <input 
            type={inputTypeDate} 
            placeholder="Select date" 
            className="bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full" 
            value={date} 
            onChange={(e) => setDate(e.target.value)}
            onFocus={() => setInputTypeDate('date')}
            onBlur={() => setInputTypeDate('text')}
          />

          <input 
            type={inputTypeTime} 
            placeholder="Select time" 
            className="bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full" 
            value={time} 
            onChange={(e) => setTime(e.target.value)}
            onFocus={() => setInputTypeTime('time')}
            onBlur={() => setInputTypeTime('text')}
          />
          <div className="text-red-500">{errorMsg}</div>
          <button onClick={() => handleSubmit()} className="bg-black w-fit px-[4vh] py-[1vh] rounded-[1vh] mt-[4vh] text-white hover:bg-gray-500 text-[1.5vh]">Submit</button>
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default Reservation