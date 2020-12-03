import React from 'react'

export default function ContactContainer() {
    
   
    return (
        <>
 <section className="py-4 bg-light inner-header">
<div className="container">
<div className="row d-flex align-items-center">
<div className="col-lg-6 col-md-6">
<h4 className="mt-0 mb-0 text-dark">
Contact Us
</h4>
</div>
<div className="col-lg-6 col-md-6 text-right">
<div className="breadcrumbs">
<p className="mb-0"><a href="#"><i className="icofont-ui-home"></i> Home</a> / <span>Contact Us</span></p>
</div>
</div>
</div>
</div>
</section>
<section className="py-5 bg-light border-top">
<div className="container">
<div className="row">
<div className="col-lg-4 col-md-4">
<div className="p-4 h-100 bg-white rounded overflow-hidden position-relative shadow-sm">
<h4 className="mt-0 mb-4 text-dark">Get In Touch</h4>
<h6 className="text-dark"><i className="icofont-location-pin pr-1"></i> Address :</h6>
<p className="pl-4">86 Petersham town, New South wales Waedll Steet, Australia PA 6550</p>
<h6 className="text-dark"><i className="icofont-smart-phone pr-1"></i> Phone :</h6>
<p className="pl-4">+91 12345-67890, (+91) 123 456 7890</p>
<h6 className="text-dark"><i className="icofont-mobile-phone pr-1"></i> Mobile :</h6>
<p className="pl-4">(+20) 220 145 6589, +91 12345-67890</p>
<h6 className="text-dark"><i className="icofont-email pr-1"></i> Email :</h6>
<p className="pl-4"><a href="https://askbootstrap.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="2a69425a454f4f6a4d474b434604494547">[email&#160;protected]</a>, <a href="https://askbootstrap.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="264f48404966654e564943430845494b">[email&#160;protected]</a></p>
<h6 className="text-dark"><i className="icofont-link pr-1"></i> Website :</h6>
<p className="pl-4">www.askbootstrap.com</p>
</div>
</div>
<div className="col-lg-4 col-md-4">
<div className="p-4 bg-white rounded overflow-hidden position-relative shadow-sm">
<h4 className="mt-0 mb-4 text-dark">Feedback</h4>
<form name="sentMessage" id="contactForm" novalidate>
<div className="control-group form-group">
<div className="controls">
<label>Full Name <span className="text-danger">*</span></label>
<input type="text" placeholder="Full Name" className="form-control" id="name" required data-validation-required-message="Please enter your name." />
<p className="help-block"></p>
</div>
</div>
<div className="row">
<div className="control-group form-group col-md-6">
<label>Phone Number <span className="text-danger">*</span></label>
<div className="controls">
<input type="tel" placeholder="Phone Number" className="form-control" id="phone" required data-validation-required-message="Please enter your phone number." />
</div>
</div>
<div className="control-group form-group col-md-6">
<div className="controls">
<label>Email Address <span className="text-danger">*</span></label>
<input type="email" placeholder="Email Address" className="form-control" id="email" required data-validation-required-message="Please enter your email address." />
</div>
</div>
</div>
<div className="control-group form-group">
<div className="controls">
<label>Message <span className="text-danger">*</span></label>
<textarea rows="4" cols="100" placeholder="Message" className="form-control" id="message" required data-validation-required-message="Please enter your message" maxlength="999" ></textarea>
</div>
</div>
<div id="success"></div>

<button type="submit" className="btn btn-primary btn-sm float-right">Send Message</button>
</form>
</div>
</div>
<div className="col-lg-4 col-md-4">
<div className="h-100 p-4 bg-white rounded overflow-hidden position-relative shadow-sm">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109552.19658195564!2d75.78663251672796!3d30.900473637371658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a7d%3A0x681102348ec60610!2sLudhiana%2C+Punjab!5e0!3m2!1sen!2sin!4v1530462134939" width="100%" height="370" frameborder="0"  allowfullscreen></iframe>
</div>
</div>
</div>
</div>
</section>
        </>
    )
}
