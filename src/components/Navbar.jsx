import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  }

  return (
    <div className="fixed w-full h-[8vh] bg-white font-sans flex items-center px-10">
      <div className="text-black text-2xl font-medium">SEA Salon</div>
      <div className="flex flex-grow h-full ml-10 text-black items-center px-10">
        <button className="text-xl py-2 px-5 rounded-full mx-5" onClick={() => handleClick("/")}>Home</button>
        <button className="text-xl py-2 px-5 rounded-full mx-5" onClick={() => handleClick("/review")}>Review</button>
        <button className="text-xl py-2 px-5 rounded-full mx-5" onClick={() => handleClick("/reservation")}>Reservation</button>
      </div>
    </div>
  )
  
}

export default Navbar