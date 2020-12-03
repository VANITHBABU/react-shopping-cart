import React from 'react'

export default function ShippingDetails() {
    return (
        <>
         <div className="col-md-8">
    <div className="checkout-body-left">
        <div className="accordion checkout-step" id="accordionExample">
            <div className="bg-white rounded shadow-sm mb-3 overflow-hidden">
                <div className="card-header bg-white" id="headingOne">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse"
                            data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <i className="icofont-simple-down float-right mt-1"></i>
                            1. Phone Number Verification
                        </button>
                    </h2>
                </div>
                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                        <p>We need your phone number so that we can update you about your order.</p>
                        <form>
                            <div className="form-row align-items-center">
                                <div className="col-auto">
                                    <label className="sr-only">phone number</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="icofont-smart-phone"></i></div>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Enter phone number" />
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button type="button" data-toggle="collapse" data-target="#collapseTwo"
                                        aria-expanded="false" aria-controls="collapseTwo"
                                        className="btn btn-primary mb-2 collapsed">NEXT</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded shadow-sm mb-3 overflow-hidden">
                <div className="card-header bg-white" id="headingTwo">
                    <h2 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="false" aria-controls="collapseTwo">
                            <i className="icofont-simple-down float-right mt-1"></i>
                            2. Delivery Address
                        </button>
                    </h2>
                </div>
                <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo"
                    data-parent="#accordionExample">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="bg-white card addresses-item mb-0  shadow-sm">
                                    <div className="gold-members p-3">
                                        <div className="media">
                                            <div className="media-body">
                                                <span className="badge badge-danger">Default - Home</span>
                                                <h6 className="mb-3 mt-3 text-dark">Gurdeep Singh Osahan
                                                </h6>
                                                <p>Model Town Rd Delhi Bypass Rd, Jawaddi Taksal,
                                                    Ludhiana, Punjab 141002, India
                                                </p>
                                                <p className="text-secondary">Phone: <span className="text-dark">+91
                                                        85680-79956</span></p>
                                                <button data-toggle="collapse" data-target="#collapseThree"
                                                    aria-expanded="false" aria-controls="collapseThree" type="button"
                                                    className="btn btn-primary btn-block">DELIVER
                                                    HERE</button>
                                                <hr />
                                                <p className="mb-0 text-black"><a className="text-success mr-3"
                                                        data-toggle="modal" data-target="#add-address-modal" href="#"><i
                                                            className="icofont-ui-edit"></i> EDIT</a> <a className="text-danger"
                                                        data-toggle="modal" data-target="#delete-address-modal"
                                                        href="#"><i className="icofont-ui-delete"></i> DELETE</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="bg-white card addresses-item mb-0  shadow-sm">
                                    <div className="gold-members p-3">
                                        <div className="media">
                                            <div className="media-body">
                                                <span className="badge badge-secondary">Office</span>
                                                <h6 className="mb-3 mt-3 text-dark">Askbootstrap</h6>
                                                <p>MT, Model Town Rd, Pritm Nagar, Model Town, Ludhiana,
                                                    Punjab 141002, India
                                                </p>
                                                <p className="text-secondary">Phone: <span
                                                        className="text-dark">8568079956</span></p>
                                                <button data-toggle="collapse" data-target="#collapseThree"
                                                    aria-expanded="false" aria-controls="collapseThree" type="button"
                                                    className="btn btn-outline-primary btn-block">DELIVER
                                                    HERE</button>
                                                <hr />
                                                <p className="mb-0 text-black"><a className="text-success mr-3"
                                                        data-toggle="modal" data-target="#add-address-modal" href="#"><i
                                                            className="icofont-ui-edit"></i> EDIT</a> <a className="text-danger"
                                                        data-toggle="modal" data-target="#delete-address-modal"
                                                        href="#"><i className="icofont-ui-delete"></i> DELETE</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <a data-toggle="modal" data-target="#add-address-modal" href="#">
                                    <div
                                        className="bg-light p-4 border rounded  mb-0  shadow-sm text-center h-100 d-flex align-items-center">
                                        <h6 className="text-center m-0 w-100"><i
                                                className="icofont-plus-circle icofont-3x mb-5"></i><br/><br/>Add
                                            New Address</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded shadow-sm mb-3 overflow-hidden">
                <div className="card-header bg-white" id="headingThree">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse"
                            data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <i className="icofont-simple-down float-right mt-1"></i>
                            3. Review Order
                        </button>
                    </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body p-0">
                        <div className="cart-table">
                            <div className="table-responsive">
                                <table className="table cart_summary">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Description</th>
                                            <th>Delivery Options</th>
                                            <th>Quantity</th>
                                            <th>Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="cart_product"><a href="#"><img className="img-fluid"
                                                        src="/assets/images/item/1.jpg" alt="" /></a></td>
                                            <td className="cart_description">
                                                <h6 className="product-name"><a href="#">Floret Printed
                                                        Ivory Skater Dress </a></h6>
                                                <p className="f-12 text-secondary mb-1 pt-1 pb-1">5/4 Review
                                                </p>
                                                <hr />
                                                <a className="text-info" href="#"><i className="icofont-heart"></i> Move to
                                                    Shortlist</a>
                                                &nbsp; &nbsp; <a className="text-danger" href="#"><i
                                                        className="icofont-trash"></i> Remove Item</a>
                                            </td>
                                            <td>
                                                <p className="text-secondary"><i className="icofont-check-circled"></i> 17 Aug
                                                    to 19
                                                    Aug <span className="text-dark">+$. 49</span></p>
                                            </td>
                                            <td className="qty">
                                                <select className="custom-select custom-select-sm">
                                                    <option selected>1</option>
                                                    <option value="1">2</option>
                                                    <option value="2">3</option>
                                                    <option value="3">4</option>
                                                </select>
                                            </td>
                                            <td className="price">
                                                <p className="f-14 mb-0 text-dark">$250.00<br /> <del
                                                        className="small text-secondary">$ 500.00 </del></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="cart_product"><a href="#"><img className="img-fluid"
                                                        src="/assets/images/item/2.jpg" alt="" /></a></td>
                                            <td className="cart_description">
                                                <h6 className="product-name"><a href="#">Floret Printed
                                                        Ivory Skater Dress </a></h6>
                                                <p className="f-12 text-secondary mb-1 pt-1 pb-1">5/4 Review
                                                </p>
                                                <hr />
                                                <a className="text-info" href="#"><i className="icofont-heart"></i> Move to
                                                    Shortlist</a>
                                                &nbsp; &nbsp; <a className="text-danger" href="#"><i
                                                        className="icofont-trash"></i> Remove Item</a>
                                            </td>
                                            <td>
                                                <p className="text-secondary"><i className="icofont-check-circled"></i> 17 Aug
                                                    to 19
                                                    Aug <span className="text-dark">+$. 49</span></p>
                                            </td>
                                            <td className="qty">
                                                <select className="custom-select custom-select-sm">
                                                    <option selected>1</option>
                                                    <option value="1">2</option>
                                                    <option value="2">3</option>
                                                    <option value="3">4</option>
                                                </select>
                                            </td>
                                            <td className="price">
                                                <p className="f-14 mb-0 text-dark">$250.00 <br /><del
                                                        className="small text-secondary">$ 500.00 </del></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="cart_product"><a href="#"><img className="img-fluid"
                                                        src="/assets/images/item/3.jpg" alt="" /></a></td>
                                            <td className="cart_description">
                                                <h6 className="product-name"><a href="#">Floret Printed
                                                        Ivory Skater Dress </a></h6>
                                                <p className="f-12 text-secondary mb-1 pt-1 pb-1">5/4 Review
                                                </p>
                                                <hr />
                                                <a className="text-info" href="#"><i className="icofont-heart"></i> Move to
                                                    Shortlist</a>
                                                &nbsp; &nbsp; <a className="text-danger" href="#"><i
                                                        className="icofont-trash"></i> Remove Item</a>
                                            </td>
                                            <td>
                                                <p className="text-secondary"><i className="icofont-check-circled"></i> 17 Aug
                                                    to 19
                                                    Aug <span className="text-dark">+$. 49</span></p>
                                            </td>
                                            <td className="qty">
                                                <select className="custom-select custom-select-sm">
                                                    <option selected>1</option>
                                                    <option value="1">2</option>
                                                    <option value="2">3</option>
                                                    <option value="3">4</option>
                                                </select>
                                            </td>
                                            <td className="price">
                                                <p className="f-14 mb-0 text-dark">$250.00<br /><del
                                                        className="small text-secondary">$ 500.00 </del></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="cart_product"><a href="#"><img className="img-fluid"
                                                        src="/assets/images/item/4.jpg" alt="" /></a></td>
                                            <td className="cart_description">
                                                <h6 className="product-name"><a href="#">Floret Printed
                                                        Ivory Skater Dress </a></h6>
                                                <p className="f-12 text-secondary mb-1 pt-1 pb-1">5/4 Review
                                                </p>
                                                <hr />
                                                <a className="text-info" href="#"><i className="icofont-heart"></i> Move to
                                                    Shortlist</a>
                                                &nbsp; &nbsp; <a className="text-danger" href="#"><i
                                                        className="icofont-trash"></i> Remove Item</a>
                                            </td>
                                            <td>
                                                <p className="text-secondary"><i className="icofont-check-circled"></i> 17 Aug
                                                    to 19
                                                    Aug <span className="text-dark">+$. 49</span></p>
                                            </td>
                                            <td className="qty">
                                                <select className="custom-select custom-select-sm">
                                                    <option selected>1</option>
                                                    <option value="1">2</option>
                                                    <option value="2">3</option>
                                                    <option value="3">4</option>
                                                </select>
                                            </td>
                                            <td className="price">
                                                <p className="f-14 mb-0 text-dark">$250.00 <br /><del
                                                        className="small text-secondary">$ 500.00 </del></p>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colspan="3">
                                                <form className="form-inline float-right">
                                                    <div className="form-group">
                                                        <input type="text" placeholder="Have a promo code?"
                                                            className="form-control border-form-control form-control-sm" />
                                                    </div>
                                                    &nbsp;
                                                    <button className="btn btn-outline-primary float-left btn-sm"
                                                        type="submit">Apply</button>
                                                </form>
                                            </td>
                                            <td colspan="2">Discount : $237.88 </td>
                                        </tr>
                                        <tr>
                                            <td className="text-right" colspan="3">Total products (tax
                                                incl.)</td>
                                            <td colspan="2">$437.88 </td>
                                        </tr>
                                        <tr>
                                            <td className="text-right" colspan="3"><strong>You Pay</strong>
                                            </td>
                                            <td className="text-danger" colspan="2"><strong>$337.88
                                                </strong></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <button data-toggle="collapse" data-target="#collapsefour" aria-expanded="false"
                                aria-controls="collapsefour" className="btn btn-primary btn-lg btn-block text-left"
                                type="button"><span className="float-left"><i className="icofont icofont-cart"></i> PROCEED TO
                                    PAYMENT </span><span className="float-right"><strong>$1200.69</strong>
                                    <span className="icofont icofont-bubble-right"></span></span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded shadow-sm overflow-hidden">
                <div className="card-header bg-white" id="headingfour">
                    <h2 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapsefour"
                            aria-expanded="true" aria-controls="collapsefour">
                            <i className="icofont-simple-down float-right mt-1"></i> 4. Make Payment
                        </button>
                    </h2>
                </div>
                <div id="collapsefour" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body osahan-payment">
                        <div className="row">
                            <div className="col-sm-4 pr-0">
                                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                    aria-orientation="vertical">
                                    <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill"
                                        href="#v-pills-home" role="tab" aria-controls="v-pills-home"
                                        aria-selected="true"><i className="icofont-credit-card"></i>
                                        Credit/Debit Cards</a>
                                    <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill"
                                        href="#v-pills-profile" role="tab" aria-controls="v-pills-profile"
                                        aria-selected="false"><i className="icofont-id-card"></i> Shop Cards</a>
                                    <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill"
                                        href="#v-pills-messages" role="tab" aria-controls="v-pills-messages"
                                        aria-selected="false"><i className="icofont-card"></i> Credit</a>
                                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill"
                                        href="#v-pills-settings" role="tab" aria-controls="v-pills-settings"
                                        aria-selected="false"><i className="icofont-bank-alt"></i> Netbanking</a>
                                    <a className="nav-link" id="v-pills-cash-tab" data-toggle="pill" href="#v-pills-cash"
                                        role="tab" aria-controls="v-pills-cash" aria-selected="false"><i
                                            className="icofont-money"></i> Pay on
                                        Delivery</a>
                                </div>
                            </div>
                            <div className="col-sm-8 pl-0">
                                <div className="tab-content h-100" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                                        aria-labelledby="v-pills-home-tab">
                                        <h6 className="mb-3 mt-0 mb-3">Add new card</h6>
                                        <p>WE ACCEPT <span className="osahan-card">
                                                <i className="icofont-visa-alt"></i> <i className="icofont-mastercard-alt"></i>
                                                <i className="icofont-american-express-alt"></i> <i
                                                    className="icofont-payoneer-alt"></i> <i
                                                    className="icofont-apple-pay-alt"></i> <i
                                                    className="icofont-bank-transfer-alt"></i> <i
                                                    className="icofont-discover-alt"></i> <i className="icofont-jcb-alt"></i>
                                            </span>
                                        </p>
                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                    <label for="inputPassword4">Card number</label>
                                                    <div className="input-group">
                                                        <input type="number" className="form-control"
                                                            placeholder="Card number" />
                                                        <div className="input-group-append">
                                                            <button className="btn btn-outline-secondary" type="button"
                                                                id="button-addon2"><i className="icofont-card"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-8">
                                                    <label>Valid through(MM/YY)
                                                    </label>
                                                    <input type="number" className="form-control"
                                                        placeholder="Enter Valid through(MM/YY)" />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label>CVV
                                                    </label>
                                                    <input type="number" className="form-control"
                                                        placeholder="Enter CVV Number" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Name on card
                                                    </label>
                                                    <input type="text" className="form-control"
                                                        placeholder="Enter Card number" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                            id="customCheck1" />
                                                        <label className="custom-control-label" for="customCheck1">Securely
                                                            save this card
                                                            for a faster checkout next time.</label>
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-12 mb-0">
                                                    <a href="thanks.html" className="btn btn-primary btn-block btn-lg">PAY
                                                        $1329
                                                        <i className="icofont-long-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                        aria-labelledby="v-pills-profile-tab">
                                        <h6 className="mb-3 mt-0 mb-3">Add new shop Card</h6>
                                        <p>WE ACCEPT <span className="osahan-card">
                                                <i className="icofont-sage-alt"></i> <i className="icofont-stripe-alt"></i> <i
                                                    className="icofont-google-wallet-alt-1"></i>
                                            </span>
                                        </p>
                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                    <label for="inputPassword4">Card number</label>
                                                    <div className="input-group">
                                                        <input type="number" className="form-control"
                                                            placeholder="Card number" />
                                                        <div className="input-group-append">
                                                            <button className="btn btn-outline-secondary" type="button"
                                                                id="button-addon2"><i className="icofont-card"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-8">
                                                    <label>Valid through(MM/YY)
                                                    </label>
                                                    <input type="number" className="form-control"
                                                        placeholder="Enter Valid through(MM/YY)" />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label>CVV
                                                    </label>
                                                    <input type="number" className="form-control"
                                                        placeholder="Enter CVV Number" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Name on card
                                                    </label>
                                                    <input type="text" className="form-control"
                                                        placeholder="Enter Card number" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                            id="customCheck1" />
                                                        <label className="custom-control-label" for="customCheck1">Securely
                                                            save this card
                                                            for a faster checkout next time.</label>
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-12 mb-0">
                                                    <a href="thanks.html" className="btn btn-primary btn-block btn-lg">PAY
                                                        $1329
                                                        <i className="icofont-long-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel"
                                        aria-labelledby="v-pills-messages-tab">
                                        <div className="border shadow-sm-sm p-4 d-flex align-items-center bg-white mb-3">
                                            <i className="icofont-apple-pay-alt mr-3 icofont-3x"></i>
                                            <div className="d-flex flex-column">
                                                <h5 className="card-title">Apple Pay</h5>
                                                <p className="card-text">Apple Pay lets you order now & pay
                                                    later at no extra cost.</p>
                                                <a href="#" className="card-link font-weight-bold">LINK
                                                    ACCOUNT <i className="icofont-link-alt"></i></a>
                                            </div>
                                        </div>
                                        <div className="border shadow-sm-sm p-4 d-flex bg-white align-items-center mb-3">
                                            <i className="icofont-paypal-alt mr-3 icofont-3x"></i>
                                            <div className="d-flex flex-column">
                                                <h5 className="card-title">Paypal</h5>
                                                <p className="card-text">Paypal lets you order now & pay
                                                    later at no extra cost.</p>
                                                <a href="#" className="card-link font-weight-bold">LINK
                                                    ACCOUNT <i className="icofont-link-alt"></i></a>
                                            </div>
                                        </div>
                                        <div className="border shadow-sm-sm p-4 d-flex bg-white align-items-center">
                                            <i className="icofont-diners-club mr-3 icofont-3x"></i>
                                            <div className="d-flex flex-column">
                                                <h5 className="card-title">Diners Club</h5>
                                                <p className="card-text">Diners Club lets you order now &
                                                    pay later at no extra cost.</p>
                                                <a href="#" className="card-link font-weight-bold">LINK
                                                    ACCOUNT <i className="icofont-link-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel"
                                        aria-labelledby="v-pills-settings-tab">
                                        <h6 className="mb-3 mt-0 mb-3">Netbanking</h6>
                                        <form>
                                            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                                <label className="btn btn-outline-primary active">
                                                    <input type="radio" name="options" id="option1" autocomplete="off"
                                                        checked /> HDFC <i className="icofont-check-circled"></i>
                                                </label>
                                                <label className="btn btn-outline-primary">
                                                    <input type="radio" name="options" id="option2" autocomplete="off" />
                                                    ICICI <i className="icofont-check-circled"></i>
                                                </label>
                                                <label className="btn btn-outline-primary">
                                                    <input type="radio" name="options" id="option3" autocomplete="off" />
                                                    AXIS <i className="icofont-check-circled"></i>
                                                </label>
                                            </div>
                                            <hr />
                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                    <label>Select Bank
                                                    </label>
                                                    <br/>
                                                    <select className="custom-select form-control">
                                                        <option selected>Bank</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-md-12 mb-0">
                                                    <a href="thanks.html" className="btn btn-primary btn-block btn-lg">PAY
                                                        $1329
                                                        <i className="icofont-long-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-cash" role="tabpanel"
                                        aria-labelledby="v-pills-cash-tab">
                                        <h6 className="mb-3 mt-0 mb-3">Cash</h6>
                                        <p>Please keep exact change handy to help us serve you better
                                        </p>
                                        <hr />
                                        <form>
                                            <a href="thanks.html" className="btn btn-primary btn-block btn-lg">PAY $1329
                                                <i className="icofont-long-arrow-right"></i></a>
                                         </form>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>   
        </>
    )
}
