import React from 'react';
import Skeleton from 'react-loading-skeleton';
import "./CompanyCard.css";

function SkeletonCard(){
return (
  <section className="card CompanyCard" >
  <div className="CompanyCard-NameImg">
    <Skeleton className="CompanyCard-Name" height={25} width={300}/>
    <Skeleton height={50} width={50} className="card-img-top Company-Img"/>
  </div>
  <Skeleton count={2}/>
</section>
)
}
export default SkeletonCard;