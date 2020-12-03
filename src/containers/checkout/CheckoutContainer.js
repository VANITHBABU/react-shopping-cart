import React from 'react'
import OrderSummary from '../../components/ordersummary/OrderSummary'
import ShippingDetails from '../../components/shippingdetails/ShippingDetails'

export default function CheckoutContainer() {
    return (
        <>
           <section className="checkout-body py-5 bg-light">
          <div className="container">
            <div className="row">
            <ShippingDetails/>
            <OrderSummary/> 
            </div>
        </div>
    </section>
        </>
    )
}
