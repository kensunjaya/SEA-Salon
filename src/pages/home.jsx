import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useContext, useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseSetup';
import { AuthContext } from '../context/AuthContext';
import { ScaleLoader } from 'react-spinners';

const Home = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [isMaintenance, setIsMaintenance] = useState(false);

  const getMaintenanceStatus = async () => {
    try {
      setLoading(true);
      const docRef = doc(db, "datas", "system");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setIsMaintenance(docSnap.data().isMaintenance);
      } else {
        console.log("Data does not exist in database!");
      }
    } catch (e) {
      console.error("Error getting document:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMaintenanceStatus();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black">
          <ScaleLoader loading={loading} color="white" margin={5} height={35} />
        </div>
      )}
      {!isMaintenance ? (
        <>
          <Navbar active="home" />
          <div className="bg-[url('./assets/background.jpg')] flex flex-grow flex-col w-screen bg-cover pt-[8vh] p-[3vh] text-black font-sans">
            <div className="ml-[10vh] mt-[25vh] text-[10vh] font-semibold">SEA SALON</div>
            <div className="ml-[10vh] text-[3vh]">Beauty and Elegance Redefined</div>
          </div>
          <Footer />
        </>
      )
      :
      (
        <div className="bg-[url('./assets/background.jpg')] flex flex-grow flex-col w-screen bg-cover pt-[8vh] p-[3vh] text-black font-sans items-center">
          <div className="ml-[10vh] mt-[25vh] text-[10vh] font-semibold">SEA SALON</div>
          <div className="ml-[10vh] text-[3vh]">Beauty and Elegance Redefined</div>
          <div className="ml-[10vh] text-[3vh]">We are currently under maintenance. Please check back later.</div>
        </div>
      )}
      
    </div>
  )
}

export default Home
