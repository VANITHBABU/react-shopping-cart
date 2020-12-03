import React from 'react'
import data from '../../data';
import ProductList from '../../components/productlist/ProductList';
import CategoryFilter from '../../components/categoryfilter/CategoryFilter';
export default function ProductContainer() {
    const {products,adlists}=data;
    return (
        <>
    <section class="py-5 products-listing bg-light">
        <div class="container">
            <div class="row">
               <CategoryFilter />
                <div class="col-md-9">
                    <div class="shop-head mb-3">
                        <div class="btn-group float-right mt-2 d-none d-sm-none d-md-block">
                            <button type="button" class="btn btn-dark btn-sm dropdown-toggle" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <span class="icofont icofont-filter"></span> Sort by Products &nbsp;&nbsp;
                            </button>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#">Relevance</a>
                                <a class="dropdown-item" href="#">Price (Low to High)</a>
                                <a class="dropdown-item" href="#">Price (High to Low)</a>
                                <a class="dropdown-item" href="#">Discount (High to Low)</a>
                                <a class="dropdown-item" href="#">Name (A to Z)</a>
                            </div>
                        </div>
                        <h5 class="mb-1 text-dark">Topwear</h5>
                        <a href="#"><span class="icofont icofont-ui-home"></span> Home</a> <span
                            class="icofont icofont-thin-right"></span> <a href="#">Topwear</a> <span
                            class="icofont icofont-thin-right"></span> <span>Sweatshirts</span>
                    </div>
                    <div class="row">

                    {products.map((product)=>{  
              return   (<div className="col-6 col-md-4" key={product._id}><ProductList  {...product}/> </div>);
                })}
              

                        <div class="col-md-12 text-center load-more">
                            <button class="btn btn-primary btn-sm" type="button" disabled>
                                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                Loading...
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </section>   
        </>
    )
}
