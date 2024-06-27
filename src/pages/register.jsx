import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useId, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../firebaseSetup"
import { doc, setDoc } from "firebase/firestore"
import { ScaleLoader } from "react-spinners"
import { v4 as uuidv4 } from 'uuid';

const Register = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const storeUserData = async () => {
    try {
      await setDoc(doc(db, "users", email),{
        uid: uuidv4(),
        name: name,
        email: email,
        phone: phoneNumber,
        password: password,
        role: "Customer"
      });
    }
    catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async () => {
    if (name === "" || phoneNumber === "" || password === "" || confirmPassword === "" || email === "") {
      alert("Please fill in all fields!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Password and confirm password do not match!");
      return;
    }
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth,
        email,
        password
      );
      await storeUserData();
      navigate("/");

    } catch (error) {
      console.log(error);
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
      <Navbar />
      <div className="bg-gray-200 flex flex-grow flex-col w-screen bg-cover pt-24 text-black font-sans p-[10vh]">
        <div className="mt-[5vh] text-[4vh] font-semibold">Register your account</div>  

        <div className="w-full">
          <input type="string" placeholder="Full Name" className="bg-transparent border border-5 border-gray-500 rounded-xl p-3 my-3 text-lg w-full" value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="email" placeholder="Email" className="bg-transparent border border-5 border-gray-500 rounded-xl p-3 my-3 text-lg w-full" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="text" placeholder="Phone Number" className="bg-transparent border border-5 border-gray-500 rounded-xl p-3 my-3 text-lg w-full" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
          <input type="password" placeholder="Password" className="bg-transparent border border-5 border-gray-500 rounded-xl p-3 my-3 text-lg w-full" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <input type="password" placeholder="Confirm Password" className="bg-transparent border border-5 border-gray-500 rounded-xl p-3 my-3 text-lg w-full" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          <button onClick={() => handleSubmit()} className="bg-black w-fit px-10 py-3 rounded-2xl mt-10 text-white hover:bg-gray-500">Submit</button>
        </div>
        
      </div>
    </div>
  )
}

export default Register