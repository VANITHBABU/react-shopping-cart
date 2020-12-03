import React from 'react'

export default function Footer() {
    return (
        <>
        <footer className="bg-white border-bottom border-top">
        <div className="container">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <div className="border-right py-5 pr-5">
                        <h6 className="mt-0 mb-4 f-14 text-dark font-weight-bold">TOP CATEGORIES</h6>
                        <div className="row no-gutters">
                            <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                    <li><a href="#">Dresses for Girls</a></li>
                                    <li><a href="#">Maxi Dresses</a></li>
                                    <li><a href="#">Tops for Girls</a></li>
                                    <li><a href="#">Women Jumpsuits</a></li>
                                    <li><a href="#">Dungarees Dress</a></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                    <li><a href="#">T Shirts</a></li>
                                    <li><a href="#">Shoes for Men</a></li>
                                    <li><a href="#">Ripped Jeans</a></li>
                                    <li><a href="#">Jeans for Girls</a></li>
                                    <li><a href="#">Denim shirts</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="border-right py-5 px-5">
                        <h6 className="mt-0 mb-4 f-14 text-dark font-weight-bold">ABOUT US</h6>
                        <div className="row no-gutters">
                            <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                    <li><a href="#">History</a></li>
                                    <li><a href="#">Band of Trust</a></li>
                                    <li><a href="#">Brand Guidelines</a></li>
                                    <li><a href="#">TV Commercials</a></li>
                                    <li><a href="#">In the News
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                    <li><a href="#">Awards</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Offers</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="py-5 pl-5">
                        <h6 className="mt-0 mb-4 f-14 text-dark font-weight-bold">DOWNLOAD APP</h6>
                        <div className="app">
                            <a href="#">
                                <img className="img-fluid" src="/assets/images/google.png" />
                            </a>
                            <a href="#">
                                <img className="img-fluid" src="/assets/images/apple.png" />
                            </a>
                        </div>
                        <h6 className="mt-4 mb-4 f-14 text-dark font-weight-bold">KEEP IN TOUCH</h6>
                        <div className="footer-social">
                            <a className="btn-facebook" href="#"><i className="icofont-facebook"></i></a>
                            <a className="btn-twitter" href="#"><i className="icofont-twitter"></i></a>
                            <a className="btn-instagram" href="#"><i className="icofont-instagram"></i></a>
                            <a className="btn-whatsapp" href="#"><i className="icofont-whatsapp"></i></a>
                            <a className="btn-messenger" href="#"><i className="icofont-facebook-messenger"></i></a>
                            <a className="btn-google" href="#"><i className="icofont-google-plus"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </footer>

     <div class="copyright bg-light py-3">
        <div class="container">
            <div class="row">
                <div class="col-md-6 d-flex align-items-center">
                    <p class="mb-0">© Copyright 2020 <a href="#">Chpoee</a> . All Rights Reserved
                    </p>
                </div>
                <div class="col-md-6 text-right">
                    <img class="img-fluid" src="/assets/images/payment_methods.png" />
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
