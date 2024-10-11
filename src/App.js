import { useState } from "react";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={18} onSetRating={setMovieRating} />
      <p>This was Movie {movieRating} Stars</p>
    </div>
  );
}
export default function App() {
  return (
    <div>
      <StarRating messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />
      <StarRating
        size={24}
        maxRating={7}
        color="red"
        className="test"
        defaultRating={3}
      />
      <Test />
    </div>
  );
}
