import Navbar from "../components/Navbar"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { db } from "../firebaseSetup"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { ScaleLoader } from "react-spinners"
import { AuthContext } from "../context/AuthContext"
import Footer from "../components/Footer"

const AddService = () => {
  const { setServiceData, admin, branchData, setBranchData, serviceData } = useContext(AuthContext);
  const [selectedBranch, setSelectedBranch] = useState(0);
  const [service, setService] = useState("");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const isServiceExist = (service) => {
    if (serviceData) {
      for (let i = 0; i < serviceData.length; i++) {
        if (serviceData[i].name === service) {
          return true;
        }
      }
      return false;
    }
  }

  useEffect(() => {
    if (!admin) {
      navigate("/login");
    }
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      postService();
    }
  };

  const getServiceData = async () => {
    try {
      const docRef = doc(db, "datas", "services");
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
    if (service === "" || duration <= 0) {
      alert("Please fill in all fields!");
      return;
    }
    try {
      setLoading(true);
      const serviceData = await getServiceData();
      if (serviceData) {
        const newServiceData = {
          service: [...serviceData.service, { duration: duration.toString(), name: service }]
        };
        let tempBranchData = branchData;
        console.log(typeof(selectedBranch))
        tempBranchData[selectedBranch].services = [...tempBranchData[selectedBranch].services, { duration: duration.toString(), name: service }];
        
        await updateDoc(doc(db, "datas", "branch"), {
          branches: tempBranchData,
        });
        setBranchData(tempBranchData);

        if (!isServiceExist(service)) {
          await updateDoc(doc(db, "datas", "services"), {
            service: newServiceData.service,
          });
          setServiceData(newServiceData.service);
        }
        
        alert("Service added successfully!");
        setService("");
        setDuration(0);
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
      <Navbar authPage={true} active="addservice"/>
      <div className="bg-gray-200 flex flex-grow flex-col w-screen bg-cover pt-[10vh] text-black font-sans p-[10vh]">
        <div className="mt-[5vh] text-[4vh] font-semibold">Add a new service</div>  

        <div className="w-full">
          <input type="text" placeholder="Service name" className="bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full" value={service} onChange={(e) => setService(e.target.value)}/>
          <select onChange={(e) => {setSelectedBranch(parseInt(e.target.value))}} name="Branch Name" className="bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full font-sans">
            <option value="" disabled="true">Select a branch</option>
            {branchData.map((branch, index) => {
              return (
                <option key={index} value={index}>{branch.name} - {branch.location}</option>
              )
            })}
          </select>
          <input type="number" onKeyDown={handleKeyDown} placeholder="Duration" className="bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full" value={duration} onChange={(e) => setDuration(e.target.value)}/>
          <button onClick={() => postService()} className="bg-black w-fit px-[4vh] py-[1vh] rounded-[1vh] mt-[4vh] text-white hover:bg-gray-500 text-[1.5vh]">Add service</button>
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default AddService