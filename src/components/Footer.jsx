import haircut from '../assets/haircut.png'
import manicure from '../assets/manicure.png'
import facial_treatment from '../assets/facial_treatment.png'

const Footer = () => {
  return (
    <div className="w-full bg-white h-[20vh] font-sans flex mt-auto text-black text-center items-center">
      <div className="border border-t-black w-[10%] h-full flex flex-col justify-center items-center">
        <div className="text-left w-full px-5">Contact Detail:</div>
        <div className="my-2 px-5 text-left w-full">
          <div className="font-semibold">Thomas</div>
          <div>08123456789</div>
        </div>
        <div className="my-2 px-5 text-left w-full">
          <div className="font-semibold">Sekar</div>
          <div>08164829372</div>
        </div>
      </div>
      <div className="border border-x-black border-t-black w-[30%] h-full font-light flex flex-col justify-center text-[3vh] bg-gray-300">
        Our Services
      </div>
      <div className="border border-t-black border-r-black w-[20%] h-full flex flex-col justify-center items-center">
        <img src={haircut} alt="Haircut" className="w-[8vh] h-[8vh] opacity-60 m-3"/>
        <div>Haircuts and styling</div>
      </div>
      <div className="border border-t-black border-r-black w-[20%] h-full flex flex-col justify-center items-center">
        <img src={manicure} alt="Manicure" className="w-[8vh] h-[8vh] opacity-60 m-3"/>
        <div>Manicure and Pedicure</div>
      </div>
      <div className="border border-t-black w-[20%] h-full flex flex-col justify-center items-center">
        <img src={facial_treatment} alt="Manicure" className="w-[8vh] h-[8vh] opacity-60 m-3"/>
        <div>Facial Treatments</div>
      </div>
    </div>
  );
}

export default Footer;