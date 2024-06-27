import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import star0 from '../assets/star0.png'
import star1 from '../assets/star1.png'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { db } from "../firebaseSetup"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { ScaleLoader } from "react-spinners"

const Review = () => {
  const [tempRating, setTempRating] = useState(0);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const getReviewData = async () => {
    try {
      const docRef = doc(db, "datas", "review");
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

  const postReview = async () => {
    try {
      setLoading(true);
      const reviewData = await getReviewData();
      if (reviewData) {
        const newReviewData = {
          review: [...reviewData.review, { rating: rating, comment: comment }]
        };
        await updateDoc(doc(db, "datas", "review"), {
          review: newReviewData.review,
        });
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          navigate("/");
        }, 3000);
      } else {
        console.log("Data does not exist in database!");
      }
    } catch (e) {
      console.error("Error getting document:", e);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = async () => {
    await postReview();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {submitted && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 bg-black font-sans text-3xl">
          <div>Thank you for your review! You'll be redirected to Home page shortly.</div>
          <ScaleLoader loading={true} color="white" margin={5} height={35} />
        </div>
      )}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black">
          <ScaleLoader loading={loading} color="white" margin={5} height={35} />
        </div>
      )}
      <Navbar />
      <div className="bg-gray-200 flex flex-grow flex-col w-screen bg-cover pt-24 text-black font-sans p-[10vh]">
        <div className="mt-[10vh] text-[6vh] font-semibold">How was your experience with our services?</div>  
        <div className="text-[3vh]">Provide us a review</div>

        <div className="flex mt-[5vh]">
          <button onClick={() => setRating(1)} onMouseEnter={() => setTempRating(1)} onMouseLeave={() => setTempRating(0)} className="hover:bg-transparent pr-3"><img src={`${tempRating > 0 || rating > 0 ? star1 : star0}`} alt="" className="w-[8vh]"/></button>
          <button onClick={() => setRating(2)} onMouseEnter={() => setTempRating(2)} onMouseLeave={() => setTempRating(0)} className="hover:bg-transparent pr-3"><img src={`${tempRating > 1 || rating > 1 ? star1 : star0}`} alt="" className="w-[8vh]"/></button>
          <button onClick={() => setRating(3)} onMouseEnter={() => setTempRating(3)} onMouseLeave={() => setTempRating(0)} className="hover:bg-transparent pr-3"><img src={`${tempRating > 2 || rating > 2 ? star1 : star0}`} alt="" className="w-[8vh]"/></button>
          <button onClick={() => setRating(4)} onMouseEnter={() => setTempRating(4)} onMouseLeave={() => setTempRating(0)} className="hover:bg-transparent pr-3"><img src={`${tempRating > 3 || rating > 3 ? star1 : star0}`} alt="" className="w-[8vh]"/></button>
          <button onClick={() => setRating(5)} onMouseEnter={() => setTempRating(5)} onMouseLeave={() => setTempRating(0)} className="hover:bg-transparent pr-3"><img src={`${tempRating > 4 || rating > 4 ? star1 : star0}`} alt="" className="w-[8vh]"/></button>
        </div>

        {rating > 0 && (
          <div className="w-full">
            <textarea name="" id="" placeholder="Comments" className="bg-transparent border border-5 border-gray-500 rounded-xl p-3 mt-10 text-lg w-full" value={comment} onChange={(e) => setComment(e.target.value)}/>
            <button onClick={() => handleSubmit()} className="bg-black w-fit px-10 py-3 rounded-2xl mt-10 text-white hover:bg-gray-500">Submit</button>
          </div>
        )}
        
      </div>
      <Footer />
    </div>
  )
}

export default Review