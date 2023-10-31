import { useState } from "react"

const ratingArr = [1, 2, 3, 4, 5]

export default function App() {
  const [rating, setRating] = useState("")
  const [submitted, setSubmitted] = useState(false)

  return submitted ? (
    <div className="card card--submitted">
      <div className="submitted-logo">
        <img src="illustration-thank-you.svg" alt="thank you illustration" />
      </div>
      <p className="submitted-box">You selected {rating} out of 5</p>
      <div className="text-box text-box--submitted">
        <h1 className="text-box__heading">Thank you!</h1>
        <p className="text-box__description">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  ) : (
    <div className="card">
      <div className="logo">
        <img src="icon-star.svg" alt="star icon" />
      </div>
      <div className="text-box">
        <h1 className="text-box__heading">How did we do?</h1>
        <p className="text-box__description">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="rating-box">
        {ratingArr.map((i, rat) => (
          <div
            key={i}
            className={`rating ${rat === rating - 1 ? "rating--active" : ""}`}
            onClick={() => setRating(rat + 1)}
          >
            {rat + 1}
          </div>
        ))}
      </div>
      <button onClick={() => setSubmitted(true)} className="btn">
        Submit
      </button>
    </div>
  )
}
