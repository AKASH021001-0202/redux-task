import React from "react";

const StarRating = ({ rating }) => {
  // Calculate the number of full stars
  const fullStars = Math.floor(rating);

  // Array to hold JSX elements for stars
  const stars = [];

  // Render full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={i} className="fa fa-star checked"></i>);
  }

  // Check if rating is 4 or higher, then add an extra star
  if (rating >= 4) {
    stars.push(<i key="extra" className="fa fa-star checked"></i>);
  }

  return <div>{stars}</div>;
};

export default StarRating;
