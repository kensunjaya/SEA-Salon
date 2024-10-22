import { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Review from './pages/review';
import Reservation from './pages/reservation';
import Register from './pages/register';
import Login from './pages/login';
import AddService from './admin/AddService';
import { AuthContext } from './context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebaseSetup';
import ViewReview from './admin/ViewReview';
import AddBranch from './admin/AddBranch';
import Reservations from './admin/Reservations';

const App = () => {
  const [isMaintenance, setIsMaintenance] = useState(false);
  const {setServiceData, setBranchData, setUserData, user, setLoading} = useContext(AuthContext);
  const getServiceData = async () => {
    try {
      setLoading(true);
      const docRef = doc(db, "datas", "services");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setServiceData(docSnap.data().service);
      } else {
        console.log("Data does not exist in database!");
        setServiceData([]);
      }
    } catch (e) {
      console.error("Error getting document:", e);
      setServiceData([]);
    } finally {
      setLoading(false);
    }
  };


  const getBranchData = async () => {
    try {
      setLoading(true);
      const docRef = doc(db, "datas", "branch");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBranchData(docSnap.data().branches);
      } else {
        console.log("Data does not exist in database!");
        return null;
      }
    } catch (e) {
      console.error("Error getting document:", e);
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getServiceData().then(getBranchData()); 
  }, []);

  return (
    <main className="flex flex-col min-h-screen">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      <Router basename='/SEA-Salon'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review" element={<Review />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addservice" element={<AddService />} />
          <Route path="/viewreview" element={<ViewReview />} />
          <Route path="/addbranch" element={<AddBranch />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
