import Navbar from "../components/Navbar"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../firebaseSetup"
import { doc, getDoc } from "firebase/firestore"
import { ScaleLoader } from "react-spinners"
import { AuthContext } from "../context/AuthContext"

const Login = () => {
  const { setUserData, setAdmin } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signIn = async () => {
    if (email === "" || password === "") {
      alert("Please fill in all required fields!");
      return;
    }
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      const userData = await getUser();
      if (userData.role === "Admin") {
        setAdmin(true);
      }
      setUserData(userData);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert(error.message.slice(10));
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      signIn();
    }
  };

  const getUser = async () => {
    try {
      const docRef = doc(db, "users", email);
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

  return (
    <div className="flex flex-col min-h-screen">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black">
          <ScaleLoader loading={loading} color="white" margin={5} height={35} />
        </div>
      )}
      <Navbar authPage={true}/>
      <div className="bg-gray-200 flex flex-grow flex-col w-screen bg-cover pt-[10vh] text-black font-sans p-[10vh]">
        <div className="mt-[5vh] text-[4vh] font-semibold">Sign in to your account</div>  

        <div className="w-full">
          <input type="email" placeholder="Email" className="bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full font-sans" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" onKeyDown={handleKeyDown} placeholder="Password" className="bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[1vh] my-[1vh] text-[1.75vh] w-full font-sans" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <div className="flex mt-[1vh] text-[1.5vh]">
            <div className="mr-[1vh]">Don't have an account?</div>
            <a onClick={() => navigate('/register')} className="text-gray-500 cursor-pointer hover:underline">Register here</a>
          </div>
          <button onClick={() => signIn()} className="bg-black w-fit px-[4vh] py-[1vh] rounded-[1vh] mt-[4vh] text-white hover:bg-gray-500 text-[1.5vh]">Sign in</button>
        </div>
        
      </div>
    </div>
  )
}

export default Login