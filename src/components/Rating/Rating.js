import React from 'react'

export default function Rating({rating}) {
    return (
        <>
       { rating>=1?(<i className="icofont icofont-star active"></i>):rating>=0.5? (<i className="icofont icofont-star"></i>):(<i className="icofont icofont-star"></i>) }
       { rating>=2?(<i className="icofont icofont-star active"></i>):rating>=1.5? (<i className="icofont icofont-star"></i>):(<i className="icofont icofont-star"></i>) }
       { rating>=3?(<i className="icofont icofont-star active"></i>):rating>=2.5? (<i className="icofont icofont-star"></i>):(<i className="icofont icofont-star"></i>) }
       { rating>=4?(<i className="icofont icofont-star active"></i>):rating>=3.5? (<i className="icofont icofont-star"></i>):(<i className="icofont icofont-star"></i>) }
       { rating>=5?(<i className="icofont icofont-star active"></i>):rating>=4.5? (<i className="icofont icofont-star"></i>):(<i className="icofont icofont-star"></i>) }
    
                        
        </>
    )
}
