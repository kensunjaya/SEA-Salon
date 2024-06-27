import Navbar from "../components/Navbar"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../firebaseSetup"
import { doc, getDoc, setDoc } from "firebase/firestore"
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
      <div className="bg-gray-200 flex flex-grow flex-col w-screen bg-cover pt-24 text-black font-sans p-[10vh]">
        <div className="mt-[5vh] text-[4vh] font-semibold">Sign in to your account</div>  

        <div className="w-full">
          <input type="email" placeholder="Email" className="bg-transparent border border-5 border-gray-500 rounded-xl p-3 my-3 text-lg w-full" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" onKeyDown={handleKeyDown} placeholder="Password" className="bg-transparent border border-5 border-gray-500 rounded-xl p-3 my-3 text-lg w-full" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <div className="flex mt-2">
            <div className="mr-3">Don't have an account?</div>
            <a href="/register" className="text-gray-500">Register here</a>
          </div>
          <button onClick={() => signIn()} className="bg-black w-fit px-10 py-3 rounded-2xl mt-10 text-white hover:bg-gray-500">Sign in</button>
        </div>
        
      </div>
    </div>
  )
}

export default Login