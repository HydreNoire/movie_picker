import style from "./style.module.css";
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export function Ratings({ rating }) {
  const starArray = [];

  const starFillCount = Math.floor(rating);
  const starHalfCount = rating - starFillCount >= 0.5;
  const starEmptyCount = 5 - starFillCount - (starHalfCount ? 1 : 0);

  for (let i = 1; i <= starFillCount; i++) {
    starArray.push(<StarFill key={"star-fill" + i} />);
  }

  if (starHalfCount) {
    starArray.push(<StarHalf key={"star-half"} />);
  }

  for (let i = 1; i <= starEmptyCount; i++) {
    starArray.push(<StarEmpty key={"star-empty" + i} />);
  }

  // console.log(starArray);
  return <div>{starArray}</div>;
}
