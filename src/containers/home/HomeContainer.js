import React from 'react'

import data from '../../data';
import ProductList from '../../components/productlist/ProductList';

export default function HomeContainer() {
    const {products,adlists}=data;
   
    return (
        <>
    <section className="product-list pbc-5 pb-4 pt-5 bg-light">
        <div className="container">
            <h6 className="mt-1 mb-0 float-right"><a href="#">View All Items</a></h6>
            <h4 className="mt-0 mb-3 text-dark font-weight-normel">Best Selling Items</h4>
            <div className="row">
{products.map((product)=>{  
              return (<div className="col-6 col-md-3" key={product._id}><ProductList key={product._id} {...product}/></div>);
                })}
              
            </div>
        </div>
</section>
    
      
    <section className="offer-product py-5">
        <div className="container">
            <div className="row">
{adlists.map((ads)=>{  
              return( <div className="col-6">
                    <div className="offers-block"><a href="#"><img className="img-fluid" src={ads.image} alt="" /></a></div>
                </div> );
                 })}
            </div>
        </div>
    </section>  
        </>
    )
}
