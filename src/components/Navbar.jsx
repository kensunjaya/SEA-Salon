import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebaseSetup";

const Navbar = (props) => {
  const { userData, setUserData } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  }

  const signOut = async () => {
    await auth.signOut();
    setUserData({
      name: "Not Signed In",
      email:"null@mail.com",
      phone: "000000000",
      role: "Customer",
      uid: "000000000000000000000000"
    });
    navigate("/login");
  }

  return (
    <div className="fixed w-full h-[8vh] bg-white font-sans flex items-center px-10">
      <div className="text-black text-2xl font-medium">SEA Salon</div>
      {userData.name !== "Not Signed In" && (
        <div className="flex flex-grow h-full ml-10 text-black items-center px-10">
          <button className="text-xl py-2 px-5 rounded-full mx-5" onClick={() => handleClick("/")}>Home</button>
          {userData.role === "Admin" ? (
            <div>
              <button className="text-xl py-2 px-5 rounded-full mx-5" onClick={() => handleClick("/addservice")}>Add new service</button>
              <button className="text-xl py-2 px-5 rounded-full mx-5" onClick={() => handleClick("/viewreview")}>View Review</button>
            </div>
          )
          :
          (
            <div>
              <button className="text-xl py-2 px-5 rounded-full mx-5" onClick={() => handleClick("/review")}>Review</button>
              <button className="text-xl py-2 px-5 rounded-full mx-5" onClick={() => handleClick("/reservation")}>Reservation</button>
            </div>
          )}
        </div>
      )}
      
      {userData.name === "Not Signed In" ? (!props.authPage &&
        <div className="flex items-center flex-grow justify-end">
          <button className="text-lg py-2 px-5 rounded-full mx-5 bg-black hover:bg-gray-500" onClick={() => handleClick("/login")}>Sign In</button>
        </div>
      ) :
      (
        <div className="w-fit h-full flex items-center text-black text-lg">
          <button className="px-10 py-3 rounded-full" onClick={() => signOut()}>
            {userData.name} - {userData.role}
          </button>
        </div>
      )}

    </div>
  )
  
}

export default Navbar