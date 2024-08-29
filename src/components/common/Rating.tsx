import React from "react";

type RattingProps = {
  averageRating: number;
};
const Ratting = ({ averageRating }: RattingProps) => {
  const roundedRatings = Math.floor(averageRating);
  const isHalfStar = averageRating % 1 !== 0;

  const emptyRatingCount = 5 - roundedRatings - (isHalfStar ? 1 : 0);
  const ratings = [];

  for (let i = 0; i < roundedRatings; i++) {
    ratings.push(<i className="flaticon-star" key={`l-${i}`}></i>);
  }

  if (isHalfStar) {
    ratings.push(<i className="fas fa-star-half-alt" key="half-star"></i>);
  }

  for (let i = 0; i < emptyRatingCount; i++) {
    ratings.push(<i className="flaticon-star unrate" key={`p-${i}`}></i>);
  }
  
  return ratings;
};

export default Ratting;
