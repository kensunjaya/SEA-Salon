import haircut from '../assets/haircut.png'
import manicure from '../assets/manicure.png'
import facial_treatment from '../assets/facial_treatment.png'
import default_icon from '../assets/default_icon.png'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Footer = () => {
  const { serviceData } = useContext(AuthContext);

  return (
    <div className="w-screen bg-white h-[20vh] font-sans flex mt-auto text-black text-center items-center">
      <div className="border border-t-black w-[25vh] h-full flex flex-col justify-center items-center">
        <div className="text-left w-full px-[2vh] text-[1.5vh]">Contact Detail:</div>
        <div className="my-[0.75vh] px-[2vh] text-left w-full text-[1.5vh]">
          <div className="font-semibold">Thomas</div>
          <div>08123456789</div>
        </div>
        <div className="my-[0.75vh] px-[2vh] text-left w-full text-[1.5vh]">
          <div className="font-semibold">Sekar</div>
          <div>08164829372</div>
        </div>
      </div>
      <div className="border border-x-black border-t-black w-[50vh] h-full font-light flex flex-col justify-center text-[3vh] bg-gray-300">
        Our Services
      </div>
      <div className="flex h-full overflow-x-auto w-full">
        <div className="flex h-full">
          {serviceData.map((service, index) => {
            return (
              <div key={index} className="border border-t-black border-r-black min-w-[40vh] h-full flex flex-col justify-center items-center text-[1.5vh]">
                <img src={service.name === "Haircuts and styling" ? (haircut) : (service.name === "Manicure and Pedicure" ? (manicure) : (service.name === "Facial Treatments" ? (facial_treatment) : default_icon))} alt="Service" className="w-[8vh] h-[8vh] opacity-60 m-[1vh]"/>
                <div>{service.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
