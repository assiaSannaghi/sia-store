import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

function RatingStars({ rate, count, size = "text-xs" }) {
  const fillStars = Math.round(rate);
  const emptyStars = 5 - fillStars;

  return (
    <div className={`flex gap-0.5 ${size} items-center`}>
      {Array.from({ length: fillStars }).map((star, i) => (
        <BsStarFill key={i + 1} className="text-yellow-400" />
      ))}
      {Array.from({ length: emptyStars }).map((star, i) => (
        <BsStar key={i + 1} className="text-yellow-400" />
      ))}
      <span className="text-gray-400 font-medium">({count})</span>
    </div>
  );
}

export default RatingStars;
