import React from 'react';
import Rating from '../Rating/Rating';

export default function ProductList({image,title,price,discount_price,rating,total_review_count}) {
    return (
      
                <div className="card list-item bg-white rounded overflow-hidden position-relative shadow-sm">
                        <span className="like-icon"><a href="#"> <i className="icofont icofont-heart"></i></a></span>
                        <a href="#">
                            <span className="badge badge-danger">NEW</span>
                            <img src={image} className="card-img-top"  alt={title} />
                        </a>
                        <div className="card-body">
                            <h6 className="card-title mb-1">{title}</h6>
                            <div className="stars-rating">
                          <Rating  rating={rating}/>
                          <span>{total_review_count}</span>
                            </div>
                            <p className="mb-0 text-dark">${price} <span className="text-black-50"><del>${discount_price} </del></span></p>
                        </div>
                </div>
        
    )
}
