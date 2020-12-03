import React from 'react'

export default function OrderSummary() {
    return (
        <>
        
                <div className="col-md-4">
                    <div className="osahan-cart-item">
                        <h5 className="mb-3 mt-0 text-dark">Summary<span className="small text-success">(5 Item)</span></h5>
                        <div className="bg-white rounded shadow-sm mb-3">
                            <div className="cart-list-product">
                                <a className="float-right remove-cart" href="#"><i
                                        className="icofont icofont-close-circled"></i></a>
                                <img className="img-fluid" src="/assets/images/item/1.jpg" alt="" />
                                <span className="badge badge-success">50% OFF</span>
                                <h5><a href="#">Floret Printed Ivory Skater Dress</a></h5>
                                <div className="stars-rating"><i className="icofont icofont-star active"></i><i
                                        className="icofont icofont-star active"></i><i
                                        className="icofont icofont-star active"></i><i
                                        className="icofont icofont-star active"></i><i className="icofont icofont-star"></i>
                                    <span>613</span></div>
                                <p className="f-14 mb-0 text-dark float-right">$135.00 <del className="small text-secondary">$
                                        500.00 </del></p>
                                <p className="f-12 text-secondary float-left quantity-text">Quantity: 1</p>
                            </div>
                            <div className="cart-list-product">
                                <a className="float-right remove-cart" href="#"><i
                                        className="icofont icofont-close-circled"></i></a>
                                <img className="img-fluid" src="/assets/images/item/2.jpg" alt=""/>
                                <span className="badge badge-danger">55% OFF</span>
                                <h5><a href="#">Floret Printed Ivory Skater Dress</a></h5>
                                <div className="stars-rating"><i className="icofont icofont-star active"></i><i
                                        className="icofont icofont-star active"></i><i
                                        className="icofont icofont-star active"></i><i
                                        className="icofont icofont-star active"></i><i className="icofont icofont-star"></i>
                                    <span>613</span></div>
                                <p className="f-14 mb-0 text-dark float-right">$250.00 <del className="small text-secondary">$
                                        500.00 </del> <span
                                        className="bg-info rounded-sm pl-1 ml-1 pr-1 text-white small">NEW</span> </p>
                                <p className="f-12 text-secondary float-left quantity-text">Quantity: 1</p>
                            </div>
                            <div className="cart-list-product border-0">
                                <a className="float-right remove-cart" href="#"><i
                                        className="icofont icofont-close-circled"></i></a>
                                <img className="img-fluid" src="/assets/images/item/3.jpg" alt="" />
                                <span className="badge badge-info">NEW</span>
                                <h5><a href="#">Floret Printed Ivory Skater Dress</a></h5>
                                <div className="stars-rating"><i className="icofont icofont-star active"></i><i
                                        className="icofont icofont-star active"></i><i
                                        className="icofont icofont-star active"></i><i
                                        className="icofont icofont-star active"></i><i className="icofont icofont-star"></i>
                                    <span>613</span></div>
                                <p className="f-14 mb-0 text-dark float-right">$900.00 <del className="small text-secondary">$
                                        500.00 </del></p>
                                <p className="f-12 text-secondary float-left quantity-text">Quantity: 1</p>
                            </div>
                        </div>
                        <div className="mb-3 bg-white rounded shadow-sm p-3 clearfix">
                            <p className="mb-1">Item Total <span className="float-right text-dark">$3140</span></p>
                            <p className="mb-1">GST Charges 10% <span className="float-right text-dark">$62.8</span></p>
                            <p className="mb-1">Delivery Fee <span className="text-info" data-toggle="tooltip"
                                    data-placement="top" title="Total discount breakup">
                                    <i className="icofont-info-circle"></i>
                                </span> <span className="float-right text-dark">$10</span>
                            </p>
                            <p className="mb-1 text-info">Total Discount
                                <span className="float-right text-info">$1884</span>
                            </p>
                            <hr />
                            <h6 className="font-weight-bold text-danger mb-0">TO PAY <span className="float-right">$1329</span>
                            </h6>
                        </div>
                    </div>
                    <div className="text-info">
                        You have saved <strong>$1,884</strong> on the bill
                    </div>
                </div> 
        </>
    )
}
