import Navbar from "../components/Navbar"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { db } from "../firebaseSetup"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { ScaleLoader } from "react-spinners"
import { AuthContext } from "../context/AuthContext"
import Footer from "../components/Footer"

const AddBranch = () => {
  const { setBranchData, admin } = useContext(AuthContext);
  const [inputTypeOpening, setInputTypeOpening] = useState('text');
  const [inputTypeClosing, setInputTypeClosing] = useState('text');
  const [branch, setBranch] = useState("");
  const [location, setLocation] = useState(""); 
  const [openTime, setOpenTime] = useState();
  const [closeTime, setCloseTime] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!admin) {
      navigate("/login");
    }
  }, []);


  const getBranchData = async () => {
    try {
      const docRef = doc(db, "datas", "branch");
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

  const postService = async () => {
    if (branch === "" || location === "" || openTime === "" || closeTime === "") {
      alert("Please fill in all fields!");
      return;
    }
    try {
      setLoading(true);
      const branchData = await getBranchData();
      if (branchData) {
        const newBranchData = {
          branches: [...branchData.branches, { name: branch, location: location, open: openTime, close: closeTime, services: [
            { name: "Haircuts and styling", duration: "60"},
            { name: "Manicure and Pedicure", duration: "60"},
            { name: "Facial Treatments", duration: "60"},
          ] }]
        };
        await updateDoc(doc(db, "datas", "branch"), {
          branches: newBranchData.branches,
        });
        setBranchData(newBranchData.branches);
        alert("New branch added successfully!");
        setBranch("");
        setLocation("");
        setOpenTime("");
        setCloseTime("");
      } else {
        console.log("Data does not exist in database!");
      }
    } catch (e) {
      console.error("Error getting document:", e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black">
          <ScaleLoader loading={loading} color="white" margin={5} height={35} />
        </div>
      )}
      <Navbar authPage={true} active="addbranch"/>
      <div className="bg-gray-200 flex flex-grow flex-col w-screen bg-cover pt-[10vh] text-black font-sans p-[10vh]">
        <div className="mt-[5vh] text-[4vh] font-semibold">Add a new branch</div>  

        <div className="w-full">
          <input type="text" placeholder="Branch name" className="bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full" value={branch} onChange={(e) => setBranch(e.target.value)}/>
          <input type="text" placeholder="Location" className="bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full" value={location} onChange={(e) => setLocation(e.target.value)}/>
          <input 
            type={inputTypeOpening} 
            placeholder="Opening time" 
            className="bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full" 
            value={openTime} 
            onChange={(e) => setOpenTime(e.target.value)}
            onFocus={() => setInputTypeOpening('time')}
            onBlur={() => setInputTypeOpening('text')}
          />
          <input 
            type={inputTypeClosing} 
            placeholder="Closing time" 
            className="bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full" 
            value={closeTime} 
            onChange={(e) => setCloseTime(e.target.value)}
            onFocus={() => setInputTypeClosing('time')}
            onBlur={() => setInputTypeClosing('text')}
          />
          <button onClick={() => postService()} className="bg-black w-fit px-[4vh] py-[1vh] rounded-[1vh] mt-[4vh] text-white hover:bg-gray-500 text-[1.5vh]">Add Branch</button>
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default AddBranch