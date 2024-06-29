import Navbar from "../components/Navbar"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { db } from "../firebaseSetup"
import { doc, getDoc } from "firebase/firestore"
import { ScaleLoader } from "react-spinners"
import { AuthContext } from "../context/AuthContext"
import Footer from "../components/Footer"

const Reservations = () => {
  const { admin } = useContext(AuthContext);
  const [reservationData, setReservationData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!admin) {
      navigate("/login");
    }
    else {
      getReservationData();
    }
  }, []);

  const getReservationData = async () => {
    try {
      const docRef = doc(db, "datas", "reservation");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setReservationData(docSnap.data().reservations);
      } else {
        console.log("Data does not exist in database!");
      }
    } catch (e) {
      console.error("Error getting document:", e);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black">
          <ScaleLoader loading={loading} color="white" margin={5} height={35} />
        </div>
      )}
      <Navbar authPage={true} active="reservations"/>
      <div className="bg-gray-200 flex flex-grow flex-col w-screen bg-cover pt-[8vh] text-black font-sans p-[10vh] text-[1.5vh]">
        <div className="mt-[5vh] text-[4vh] font-semibold">Reservation list</div>
        {reservationData.map((data, index) => {
          return (
            <div key={index} className="mt-[2vh] p-[1.5vh] border border-black">
              <div className="flex mb-[0.5vh] font-regular">{data.reservedAt}</div>
              <div className="font-semibold flex">Branch: <div className="font-regular ml-[1vh]">{data.branch}</div></div>
              <div className="font-semibold flex">Name: <div className="font-regular ml-[1vh]">{data.name}</div></div>
              <div className="font-semibold flex">Phone Number: <div className="font-regular ml-[1vh]">{data.phone}</div></div>
              <div className="font-semibold flex">Location: <div className="font-regular ml-[1vh]">{data.location}</div></div>
              <div className="font-semibold flex">Service: <div className="font-regular ml-[1vh]">{data.service}</div></div>
              <div className="font-semibold flex">Reserved for: <div className="font-regular ml-[1vh]">{`${data.date} · ${data.time}`}</div></div>
              
            </div>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Reservations