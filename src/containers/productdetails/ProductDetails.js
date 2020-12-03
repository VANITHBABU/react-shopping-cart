import React from 'react'

export default function ProductDetails() {
    return (
        <>
           <section className="py-2  inner-header">
     <div className="container">
         <div className="row d-flex align-items-center">
             <div className="col-lg-12">
                 <div className="breadcrumbs">
                     <p className="mb-0"><a href="#"><span className="icofont icofont-ui-home"></span> Home</a> <span
                             className="icofont icofont-thin-right"></span> <a href="#">Topwear</a> <span
                             className="icofont icofont-thin-right"></span> <span>Sweatshirts</span>
                     </p>
                 </div>
             </div>
         </div>
     </div>
 </section>
 <section className="py-5 shop-single bg-light">
     <div className="container">
         <div className="row">
             <div className="col-md-6">
                 <div className="shop-detail-left">
                     <div className="shop-detail-slider position-relative">
                         <div className="favourite-icon"> <a className="fav-btn" title="" data-placement="bottom"
                                 data-toggle="tooltip" href="#" data-original-title="59% OFF"><i
                                     className="icofont-ui-tag"></i></a>
                         </div>
                         <div id="sync1" className="border rounded shadow-sm bg-white mb-2 owl-carousel text-center">
                             <div className="item bg-b">
                                 <img alt="" src="/assets/images/item/1.jpg" className="img-fluid img-center" />
                             </div>
                             <div className="item bg-r">
                                 <img alt="" src="/assets/images/item/2.jpg" className="img-fluid img-center" />
                             </div>
                             <div className="item bg-b">
                                 <img alt="" src="/assets/images/item/3.jpg" className="img-fluid img-center" />
                             </div>
                             <div className="item bg-r">
                                 <img alt="" src="/assets/images/item/4.jpg" className="img-fluid img-center" />
                             </div>
                             <div className="item bg-b">
                                 <img alt="" src="/assets/images/item/5.jpg" className="img-fluid img-center" />
                             </div>
                             <div className="item bg-r">
                                 <img alt="" src="/assets/images/item/6.jpg" className="img-fluid img-center" />
                             </div>
                         </div>
                         <div id="sync2" className="owl-carousel">
                             <div className="item">
                                 <img alt="" src="/assets/images/item/1.jpg" className="img-fluid img-center" />
                             </div>
                             <div className="item">
                                 <img alt="" src="/assets/images/item/2.jpg" className="img-fluid img-center" />
                             </div>
                             <div className="item">
                                 <img alt="" src="/assets/images/item/3.jpg" className="img-fluid img-center" />
                             </div>
                             <div className="item">
                                 <img alt="" src="/assets/images/item/4.jpg" className="img-fluid img-center" />
                             </div>
                             <div className="item">
                                 <img alt="" src="/assets/images/item/5.jpg" className="img-fluid img-center" />
                             </div>
                             <div className="item">
                                 <img alt="" src="/assets/images/item/6.jpg" className="img-fluid img-center" />
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="col-md-6">
                 <div className="shop-detail-right">
                     <div className="border rounded shadow-sm bg-white p-4">
                         <div className="product-name">
                             <p className="text-danger text-uppercase mb-0"> <i className="icofont-sale-discount"></i> 50%
                                 Off</p>
                             <h2>Chikankari Flared Sleeves Pink Top</h2>
                             <span>Product code: <b>OSAHAN456</b> | <strong className="text-info">FREE Delivery</strong>
                                 on orders over $299</span>
                         </div>
                         <div className="price-box">
                             <h5>
                                 <span className="product-desc-price">$145.00</span>
                                 <span className="product-price text-danger">$78.00</span>
                                 <small className="text-success">You Save : $78.00</small>
                             </h5>
                         </div>
                         <div className="ratings">
                             <div className="stars-rating"> <i className="icofont icofont-star active"></i>
                                 <i className="icofont icofont-star active"></i>
                                 <i className="icofont icofont-star"></i>
                                 <i className="icofont icofont-star"></i>
                                 <i className="icofont icofont-star"></i> <span>(613)</span>
                                 <span className="rating-links float-right"> <a href="#">1 Review(s)</a> <span
                                         className="separator"> </span> <a href="#det"><i
                                             className="icofont icofont-comment"></i> Add Your Review</a>
                                 </span>
                             </div>
                         </div>
                         <div className="clearfix"></div>
                         <div className="product-color-size-area mt-3">
                             <span className="d-inline-block pt-1">Apparel size : </span>
                             <div className="btn-group btn-group-toggle float-right" data-toggle="buttons">
                                 <label className="btn btn-sm btn-outline-secondary active">
                                     <input type="radio" name="options" id="option1" autocomplete="off"
                                         checked />XS</label>
                                 <label className="btn btn-sm btn-outline-secondary">
                                     <input type="radio" name="options" id="option2" autocomplete="off" />S</label>
                                 <label className="btn btn-sm btn-outline-secondary">
                                     <input type="radio" name="options" id="option3" autocomplete="off" />M</label>
                                 <label className="btn btn-sm btn-outline-secondary">
                                     <input type="radio" name="options" id="option4" autocomplete="off" />L</label>
                                 <label className="btn btn-sm btn-outline-secondary">
                                     <input type="radio" name="options" id="option5" autocomplete="off" />XL</label>
                             </div>
                         </div>
                         <div className="clearfix"></div>
                         <div className="product-variation">
                             <form action="#" method="post">
                                 <div className="mt-1 pt-2 float-left mr-2">Quantity :</div>
                                 <div className="input-group quantity-input"> <span className="input-group-btn">
                                         <button type="button" className="btn btn-outline-secondary btn-number btn-lg"
                                             data-type="minus" data-field="quant[1]">
                                             <span className="fa fa-minus"></span>
                                         </button>
                                     </span>
                                     <input type="text" name="quant[1]"
                                         className="text-center form-control border-form-control form-control-sm input-number"
                                         value="1" /> <span className="input-group-btn">
                                         <button type="button" className="btn btn-outline-secondary btn-number btn-lg"
                                             data-type="plus" data-field="quant[1]">
                                             <span className="fa fa-plus"></span>
                                         </button>
                                     </span>
                                 </div>
                                 <span className="float-right">
                                     <button type="button" title="" data-placement="top" data-toggle="tooltip" href="#"
                                         data-original-title="Add to Wishlist" className="btn btn-outline-primary btn-lg"><i
                                             className="icofont icofont-heart"></i></button>
                                     <button type="button" className="btn btn-primary btn-lg">&nbsp;&nbsp;&nbsp; <i
                                             className="icofont icofont-shopping-cart"></i> Add To Cart
                                         &nbsp;&nbsp;&nbsp;</button>
                                 </span>
                             </form>
                         </div>
                         <div className="short-description border-bottom">
                             <h6 className="mb-3">
                                 <span className="text-dark font-weight-bold">Quick Overview</span>
                                 <small className="float-right">Availability: <strong className="badge badge-danger">In
                                         Stock</strong></small>
                             </h6>
                             <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b> Nam fringilla augue
                                 nec est tristique auctor. Donec non est at libero vulputate rutrum.</p>
                             <p>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.
                                 className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                 hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis.
                                 Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui
                                 vulputate mollis eget non arcu. Aenean et <a className="font-weight-bold" href="#det">View
                                     More[...]</a></p>
                         </div>
                         <div className="product-cart-option">
                             <ul className="list-inline mb-0 mt-3">
                                 <li className="list-inline-item"><a href="https://askbootstrap.com/"><i
                                             className="icofont icofont-heart"></i> <span>Add to Wishlist</span></a>
                                 </li>
                                 <li className="list-inline-item"><a href="#"><i className="icofont icofont-retweet"></i>
                                         <span>Add to Compare</span></a>
                                 </li>
                                 <li className="list-inline-item"><a href="#"><i className="icofont icofont-send-mail"></i>
                                         <span>Email to a Friend</span></a>
                                 </li>
                             </ul>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </section>
 <section id="det" className="pb-5 pt-0 shop-single-detail bg-light">
     <div className="container">
         <div className="row">
             <div className="col-md-12">
                 <div className="rounded shadow-sm bg-white">
                     <ul className="nav nav-pills p-3" id="pills-tab" role="tablist">
                         <li className="nav-item"> <a className="nav-link active" id="pills-home-tab" data-toggle="pill"
                                 href="#pills-home" role="tab" aria-controls="pills-home"
                                 aria-selected="true">DETAILS</a>
                         </li>
                         <li className="nav-item"> <a className="nav-link" id="pills-profile-tab" data-toggle="pill"
                                 href="#pills-profile" role="tab" aria-controls="pills-profile"
                                 aria-selected="false">ADDITIONAL</a>
                         </li>
                         <li className="nav-item"> <a className="nav-link" id="pills-contact-tab" data-toggle="pill"
                                 href="#pills-contact" role="tab" aria-controls="pills-contact"
                                 aria-selected="false">REVIEWS (25445)</a>
                         </li>
                     </ul>
                     <div className="tab-content p-4 border-top" id="pills-tabContent">
                         <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                             aria-labelledby="pills-home-tab">
                             <table className="table table-bordered">
                                 <thead>
                                     <tr>
                                         <th>Standard Size</th>
                                         <th><span>S</span></th>
                                         <th><span>M</span></th>
                                         <th><span>L</span></th>
                                         <th><span>Xl</span></th>
                                     </tr>
                                 </thead>
                                 <tbody className="c6">
                                     <tr>
                                         <td>Brand Size</td>
                                         <td><span>S</span></td>
                                         <td><span>M</span></td>
                                         <td><span>L</span></td>
                                         <td><span>Xl</span></td>
                                     </tr>
                                     <tr>
                                         <td>Waist</td>
                                         <td>32</td>
                                         <td>34</td>
                                         <td>36</td>
                                         <td>38</td>
                                     </tr>
                                     <tr>
                                         <td>Bust</td>
                                         <td>35</td>
                                         <td>37</td>
                                         <td>39</td>
                                         <td>41</td>
                                     </tr>
                                     <tr>
                                         <td>Length</td>
                                         <td>23.5</td>
                                         <td>24</td>
                                         <td>24.5</td>
                                         <td>25</td>
                                     </tr>
                                     <tr>
                                         <td>Across Shoulder</td>
                                         <td>13.5</td>
                                         <td>14</td>
                                         <td>14.5</td>
                                         <td>15</td>
                                     </tr>
                                 </tbody>
                             </table>
                         </div>
                         <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                             aria-labelledby="pills-profile-tab">
                             <h5 className="mt-0 mb-3">Aliquam ultricies est ut quam vulputate accumsan</h5>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit erat, accumsan
                                 non accumsan in, dictum ut odio. Pellentesque iaculis pulvinar ligula eget sagittis.
                                 Vivamus consectetur tortor ac bibendum bibendum. Vestibulum turpis mi, efficitur ut
                                 metus ac, tempus dapibus eros. Nunc molestie lobortis magna eget auctor. Lorem ipsum
                                 dolor sit amet, consectetur adipiscing elit. Maecenas nec tincidunt nulla,
                                 scelerisque facilisis ante. Sed dapibus suscipit ipsum ut mattis. Donec dignissim
                                 arcu ipsum, a dapibus massa lobortis sit amet. Fusce sed nunc mollis mi imperdiet
                                 lobortis. Fusce sed tincidunt felis, ut iaculis sapien. Nam sollicitudin lacus id
                                 vulputate viverra. Morbi hendrerit nibh odio, non posuere ipsum convallis a.
                                 Pellentesque rhoncus efficitur iaculis.
                             </p>
                             <ul className="m-0 ml-3 p-0">
                                 <li>Suspendisse varius libero id arcu facilisis blandit.</li>
                                 <li>Nam suscipit leo in eros maximus commodo.</li>
                                 <li>Sed condimentum mauris eget nibh dapibus accumsan.</li>
                                 <li>Cras eget quam et quam dignissim dictum a sit amet eros.</li>
                                 <li>Nullam ultricies diam a sapien mollis tincidunt.</li>
                             </ul>
                         </div>
                         <div className="tab-pane fade" id="pills-contact" role="tabpanel"
                             aria-labelledby="pills-contact-tab">
                             <div className="card-body p-0 reviews-card">
                                 <div className="media mb-4">
                                     <img className="d-flex mr-3 rounded-circle" src="/assets/images/user/1.jpg" alt="" />
                                     <div className="media-body">
                                         <div className="mt-0 mb-1">
                                             <span className="h6 mr-2 font-weight-bold">Stave Martin</span> <span><i
                                                     className="icofont-ui-calendar"></i> Feb 12, 2018</span>
                                             <div className="stars-rating float-right"> <i
                                                     className="icofont icofont-star active"></i>
                                                 <i className="icofont icofont-star active"></i>
                                                 <i className="icofont icofont-star"></i>
                                                 <i className="icofont icofont-star"></i>
                                                 <i className="icofont icofont-star"></i> <span
                                                     className="rounded bg-warning text-dark pl-1 pr-1">5/3</span>
                                             </div>
                                         </div>
                                         <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                             ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                                             viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                             Donec lacinia congue felis in faucibus.</p>
                                     </div>
                                 </div>
                                 <div className="media">
                                     <img className="d-flex mr-3 rounded-circle" src="/assets/images/user/2.jpg" alt="" />
                                     <div className="media-body">
                                         <div className="mt-0 mb-1">
                                             <span className="h6 mr-2 font-weight-bold">Mark Smith</span> <span><i
                                                     className="icofont-ui-calendar"></i> Feb 12, 2018</span>
                                             <div className="stars-rating float-right"> <i
                                                     className="icofont icofont-star active"></i>
                                                 <i className="icofont icofont-star active"></i>
                                                 <i className="icofont icofont-star"></i>
                                                 <i className="icofont icofont-star"></i>
                                                 <i className="icofont icofont-star"></i> <span
                                                     className="rounded bg-warning text-dark pl-1 pr-1">5/3</span>
                                             </div>
                                         </div>
                                         <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                             ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                                             viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                             Donec lacinia congue felis in faucibus.</p>
                                         <div className="media mt-4">
                                             <img className="d-flex mr-3 rounded-circle" src="/assets/images/user/3.jpg" alt="" />
                                             <div className="media-body">
                                                 <div className="mt-0 mb-1">
                                                     <span className="h6 mr-2 font-weight-bold">Ryan Printz</span>
                                                     <span><i className="icofont-ui-calendar"></i> Feb 12, 2018</span>
                                                     <div className="stars-rating float-right"> <i
                                                             className="icofont icofont-star active"></i>
                                                         <i className="icofont icofont-star active"></i>
                                                         <i className="icofont icofont-star"></i>
                                                         <i className="icofont icofont-star"></i>
                                                         <i className="icofont icofont-star"></i> <span
                                                             className="rounded bg-warning text-dark pl-1 pr-1">5/3</span>
                                                     </div>
                                                 </div>
                                                 <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                     scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                                                     vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                                                     nisi vulputate fringilla. Donec lacinia congue felis in
                                                     faucibus.</p>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="media mt-4">
                                     <img className="d-flex mr-3 rounded-circle" src="/assets/images/user/1.jpg" alt="" />
                                     <div className="media-body">
                                         <div className="mt-0 mb-1">
                                             <span className="h6 mr-2 font-weight-bold">Stave Mark</span> <span><i
                                                     className="icofont-ui-calendar"></i> Feb 12, 2018</span>
                                             <div className="stars-rating float-right"> <i
                                                     className="icofont icofont-star active"></i>
                                                 <i className="icofont icofont-star active"></i>
                                                 <i className="icofont icofont-star"></i>
                                                 <i className="icofont icofont-star"></i>
                                                 <i className="icofont icofont-star"></i> <span
                                                     className="rounded bg-warning text-dark pl-1 pr-1">5/3</span>
                                             </div>
                                         </div>
                                         <p className="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                             scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate
                                             at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                             fringilla. Donec lacinia congue felis in faucibus.</p>
                                     </div>
                                 </div>
                             </div>
                             <div className="p-4 bg-light rounded mt-4">
                                 <h5 className="card-title mb-4">Leave a Review</h5>
                                 <form name="sentMessage">
                                     <div className="row">
                                         <div className="control-group form-group col-lg-4 col-md-4">
                                             <div className="controls">
                                                 <label>Your Name <span className="text-danger">*</span></label>
                                                 <input type="text" className="form-control" required="" />
                                             </div>
                                         </div>
                                         <div className="control-group form-group col-lg-4 col-md-4">
                                             <div className="controls">
                                                 <label>Your Email <span className="text-danger">*</span></label>
                                                 <input type="email" className="form-control" required="" />
                                             </div>
                                         </div>
                                         <div className="control-group form-group col-lg-4 col-md-4">
                                             <div className="controls">
                                                 <label>Rating <span className="text-danger">*</span></label>
                                                 <select className="form-control custom-select">
                                                     <option>1 Star</option>
                                                     <option>2 Star</option>
                                                     <option>3 Star</option>
                                                     <option>4 Star</option>
                                                     <option>5 Star</option>
                                                 </select>
                                             </div>
                                         </div>
                                     </div>
                                     <div className="control-group form-group">
                                         <div className="controls">
                                             <label>Review <span className="text-danger">*</span></label>
                                             <textarea rows="3" cols="100" className="form-control"></textarea>
                                         </div>
                                     </div>
                                     <div className="text-right">
                                         <button type="submit" className="btn btn-primary">Send Message</button>
                                     </div>
                                 </form>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </section>
   
        
        
        </>
    )
}
