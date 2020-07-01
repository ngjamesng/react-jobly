import React from 'react';
import SkeletonCard from "./SkeletonCard";

function SkeletonCards({ count = 5 }) {
  let cards = [];
  for (let i = 0; i < count; i++) {
    cards.push(<SkeletonCard key={i} />);
  }
  return (
    <>
      {cards.map(c => c)}
    </>
  )
}

export default SkeletonCards;
