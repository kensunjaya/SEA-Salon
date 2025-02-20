import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { db } from "../firebaseSetup"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { ScaleLoader } from "react-spinners"
import { AuthContext } from "../context/AuthContext"
import { FaStar } from "react-icons/fa6"

const Review = () => {
  const { userData, user, loading, setLoading } = useContext(AuthContext);
  const [tempRating, setTempRating] = useState(0);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

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
          review: [...reviewData.review, { time: new Date().toLocaleString(), rating: rating, comment: comment, name: userData.name }]
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
          <ScaleLoader loading={submitted} color="white" margin={5} height={35} />
        </div>
      )}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black">
          <ScaleLoader loading={loading} color="white" margin={5} height={35} />
        </div>
      )}
      <Navbar active="review" />
      <div className="bg-gray-200 flex flex-grow flex-col w-screen bg-cover pt-[8vh] text-black font-sans p-[10vh]">
        <div className="mt-[10vh] text-[6vh] font-semibold">How was your experience with our services?</div>  
        <div className="text-[3vh]">Your review means a lot to us</div>

        <div className="flex mt-[5vh]">
          <button onClick={() => setRating(1)} onMouseEnter={() => setTempRating(1)} onMouseLeave={() => setTempRating(0)} className="hover:bg-transparent pr-[1vh]"><FaStar color={`${tempRating > 0 || rating > 0 ? '#ffb900' : 'gray'}`} size={'8vh'}/></button>
          <button onClick={() => setRating(2)} onMouseEnter={() => setTempRating(2)} onMouseLeave={() => setTempRating(0)} className="hover:bg-transparent pr-[1vh]"><FaStar color={`${tempRating > 1 || rating > 1 ? '#ffb900' : 'gray'}`} size={'8vh'}/></button>
          <button onClick={() => setRating(3)} onMouseEnter={() => setTempRating(3)} onMouseLeave={() => setTempRating(0)} className="hover:bg-transparent pr-[1vh]"><FaStar color={`${tempRating > 2 || rating > 2 ? '#ffb900' : 'gray'}`} size={'8vh'}/></button>
          <button onClick={() => setRating(4)} onMouseEnter={() => setTempRating(4)} onMouseLeave={() => setTempRating(0)} className="hover:bg-transparent pr-[1vh]"><FaStar color={`${tempRating > 3 || rating > 3 ? '#ffb900' : 'gray'}`} size={'8vh'}/></button>
          <button onClick={() => setRating(5)} onMouseEnter={() => setTempRating(5)} onMouseLeave={() => setTempRating(0)} className="hover:bg-transparent pr-[1vh]"><FaStar color={`${tempRating > 4 || rating > 4 ? '#ffb900' : 'gray'}`} size={'8vh'}/></button>
        </div>

        {rating > 0 && (
          <div className="w-full">
            <textarea name="" id="" placeholder="Comments" className="bg-transparent border border-5 border-gray-500 rounded-[1vh] p-[0.75vh] mt-[5vh] text-[2vh] w-full" value={comment} onChange={(e) => setComment(e.target.value)}/>
            <button onClick={() => handleSubmit()} className="bg-black w-fit px-[4vh] py-[1vh] rounded-[1vh] mt-[4vh] text-white hover:bg-gray-500 text-[1.5vh]">Submit</button>
          </div>
        )}
        
      </div>
      <Footer />
    </div>
  )
}

export default Review