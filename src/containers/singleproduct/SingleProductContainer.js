import React from 'react'
import ProductDetails from '../productdetails/ProductDetails'

export default function SingleProductContainer() {
    return (
        <div>
            <ProductDetails/>
             <section className="product-list pt-5 bg-light pb-4 pbc-5 border-top">
     <div className="container">
         <h6 className="mt-1 mb-0 float-right"><a href="#">View All Items</a></h6>
         <h4 className="mt-0 mb-3 text-dark">Items You Recently Viewed</h4>
         <div className="row">
             <div className="col-md-12">
                 <div className="owl-carousel owl-carousel-category owl-theme">

                     <div className="item">
                         <div className="card list-item bg-white rounded overflow-hidden position-relative shadow-sm">
                             <span className="like-icon"><a href="#"> <i className="icofont icofont-heart"></i></a></span>
                             <a href="#">
                                 <span className="badge badge-danger">NEW</span>
                                 <img src="/assets/images/item/1.jpg" className="card-img-top" alt="..." /></a>
                             <div className="card-body">
                                 <h6 className="card-title mb-1">Floret Printed Ivory Skater Dress</h6>
                                 <div className="stars-rating"><i className="icofont icofont-star active"></i><i
                                         className="icofont icofont-star active"></i><i
                                         className="icofont icofont-star active"></i><i
                                         className="icofont icofont-star active"></i><i className="icofont icofont-star"></i>
                                     <span>613</span></div>
                                 <p className="mb-0 text-dark">$ 135.00 <span className="text-black-50"><del>$500.00
                                         </del></span> <span
                                         className="bg-danger  rounded-sm pl-1 ml-1 pr-1 text-white small"> 50%
                                         OFF</span></p>
                             </div>
                         </div>
                     </div>
                   
                 </div>
             </div>
         </div>
     </div>
 </section>  
        </div>
    )
}
