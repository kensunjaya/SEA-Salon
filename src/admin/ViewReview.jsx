import Navbar from "../components/Navbar"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { db } from "../firebaseSetup"
import { doc, getDoc } from "firebase/firestore"
import { ScaleLoader } from "react-spinners"
import { AuthContext } from "../context/AuthContext"
import Footer from "../components/Footer"
import { FaStar } from "react-icons/fa6"

const ViewReview = () => {
  const { admin, loading, setLoading } = useContext(AuthContext);
  const [reviewData, setReviewData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!admin) {
      navigate("/login");
    }
    else {
      getReviewData();
    }
  }, []);

  const getReviewData = async () => {
    try {
      setLoading(true);
      const docRef = doc(db, "datas", "review");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setReviewData(docSnap.data().review);
      } else {
        console.log("Data does not exist in database!");
      }
    } catch (e) {
      console.error("Error getting document:", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black">
          <ScaleLoader loading={loading} color="white" margin={5} height={35} />
        </div>
      )}
      <Navbar authPage={true} active="viewreview"/>
      <div className="bg-gray-200 flex flex-grow flex-col w-screen bg-cover pt-[8vh] text-black font-sans p-[10vh] text-[1.5vh]">
        <div className="mt-[5vh] text-[4vh] font-semibold">Customer reviews</div>
        {reviewData.map((review, index) => {
          return (
            <div key={index} className="mt-[2vh] border-2">
              <div className="flex mb-[0.5vh] font-regular text-[1.25vh]">{review.time}</div>
              <div className="flex mb-[0.5vh]">

                <FaStar color={review.rating > 0 ? '#ffb900' : 'gray'}/>
                <FaStar color={review.rating > 1 ? '#ffb900' : 'gray'}/>
                <FaStar color={review.rating > 2 ? '#ffb900' : 'gray'}/>
                <FaStar color={review.rating > 3 ? '#ffb900' : 'gray'}/>
                <FaStar color={review.rating > 4 ? '#ffb900' : 'gray'}/>
  
              </div>
              <div className="font-semibold flex">Comment: <div className="font-regular ml-[1vh]">{review.comment}</div></div>
              <div className="font-semibold flex">Name: <div className="font-regular ml-[1vh]">{review.name}</div></div>
            </div>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default ViewReview