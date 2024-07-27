import React from 'react';
import './RatingShowing.css'; 
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';

const RatingShowing = ({ averageRating = 0, totalStars = 5, fontSize = '16px', fontSizeInfo = '13px' }) => { 
  // Calculate whole and fractional parts of the rating
  const wholeStars = Math.floor(averageRating);
  const hasHalfStar = averageRating % 1 !== 0;
  
  return (
    <div className="rating-showing">
      <div>
      {[...Array(totalStars)].map((star, index) => {
        const starValue = index + 1;
        if (starValue <= wholeStars) {
          return (
            <span key={index} className="star filled" style={{fontSize: fontSize, marginTop: fontSize === '20px' ? '-6px' : '0px'}}>
              <IoIosStar />
            </span>
          );
        } else if (hasHalfStar && starValue === wholeStars + 1) {
          return (
            <span key={index} className="star half-filled" style={{fontSize: fontSize, marginTop: fontSize === '20px' ? '-6px' : '0px'}}>
              <IoIosStarHalf />
            </span>
          );
        } else {
          return (
            <span key={index} className="star" style={{fontSize: fontSize, marginTop: fontSize === '20px' ? '-6px' : '0px'}}>
              <IoIosStarOutline />
            </span>
          );
        }
      })}
      </div>
      <span className="rating-text" style={{fontSize: fontSizeInfo ?? '10px'}}>({averageRating.toFixed(1)} out of {totalStars})</span>
    </div>
  );
};

export default RatingShowing;