import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebaseSetup";

const Navbar = (props) => {
  const { userData, setUserData, user } = useContext(AuthContext);
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
    <div className="fixed w-full h-[8vh] bg-white font-sans flex items-center px-[4vh]">
      <div className="text-black text-[2vh] font-medium">SEA Salon</div>
      {user && (
        <div className="flex flex-grow h-full ml-[10vh] text-black items-center px-[5vh]">
          <button className={`text-[1.75vh] py-[0.75vh] px-[2.5vh] rounded-full mx-[2.5vh] ${props.active === 'home' && 'bg-[#f0f0f0]'}`} onClick={() => handleClick("/")}>Home</button>
          {userData.role === "Admin" ? (
            <div>
              <button className={`text-[1.75vh] py-[0.75vh] px-[2.5vh] rounded-full mx-[2.5vh] ${props.active === 'addbranch' && 'bg-[#f0f0f0]'}`} onClick={() => handleClick("/addbranch")}>Add new branch</button>
              <button className={`text-[1.75vh] py-[0.75vh] px-[2.5vh] rounded-full mx-[2.5vh] ${props.active === 'addservice' && 'bg-[#f0f0f0]'}`} onClick={() => handleClick("/addservice")}>Add new service</button>
              <button className={`text-[1.75vh] py-[0.75vh] px-[2.5vh] rounded-full mx-[2.5vh] ${props.active === 'viewreview' && 'bg-[#f0f0f0]'}`} onClick={() => handleClick("/viewreview")}>View Review</button>
              <button className={`text-[1.75vh] py-[0.75vh] px-[2.5vh] rounded-full mx-[2.5vh] ${props.active === 'reservations' && 'bg-[#f0f0f0]'}`} onClick={() => handleClick("/reservations")}>View Reservations</button>
            </div>
          )
          :
          (
            <div>
              <button className={`text-[1.75vh] py-[0.75vh] px-[2.5vh] rounded-full mx-[2.5vh] ${props.active === 'review' && 'bg-[#f0f0f0]'}`} onClick={() => handleClick("/review")}>Review</button>
              <button className={`text-[1.75vh] py-[0.75vh] px-[2.5vh] rounded-full mx-[2.5vh] ${props.active === 'reservation' && 'bg-[#f0f0f0]'}`} onClick={() => handleClick("/reservation")}>Reservation</button>
            </div>
          )}
        </div>
      )}
      
      {!user ? (!props.authPage &&
        <div className="flex items-center flex-grow justify-end">
          <button className="text-[1.75vh] py-[0.75vh] px-[2.5vh] rounded-full mx-[3vh] bg-black hover:bg-gray-500" onClick={() => handleClick("/login")}>Sign In</button>
        </div>
      ) :
      (
        <div className="w-fit h-full flex items-center text-black text-[1.75vh]">
          <button className="px-[4vh] py-[0.75vh] rounded-full" onClick={() => signOut()}>
            {userData.name} - {userData.role}
          </button>
        </div>
      )}

    </div>
  )
  
}

export default Navbar