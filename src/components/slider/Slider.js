import React from 'react'
import '../../assets/css/slider.css';

export default function Slider() {
    return (
        <div class="py-0">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 px-0">
                        <header>
                            <div id="owl-carousel-one" class="owl-carousel">
                                <div class="item"><img class="img-fluid mx-auto" src="../../assets/images/banner/1.png" /></div>
                                <div class="item"><img class="img-fluid mx-auto" src="../../assets/images/banner/2.png" /></div>
                                <div class="item"><img class="img-fluid mx-auto" src="../../assets/images/banner/3.png" /></div>
                                <div class="item"><img class="img-fluid mx-auto" src="../../assets/images/banner/4.png" /></div>
                            </div>
                        </header>
                    </div>
                </div>
            </div>
        </div>
    )
}
