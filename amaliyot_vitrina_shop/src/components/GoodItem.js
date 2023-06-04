import React, {} from "react"
export default function GoodItem(props){
    const {mainId, displayName, displayDescription, displayAssets, price, addToBasket} = props
    
    return(
        <>
            {displayAssets.map(item => (  
                 <div className="card goods">
                    <div className="card-image" id={mainId}>
                        <img src={item.full_background}  alt={displayName}/>
                    </div>
                    <div className="card-content">
                        <p>{displayDescription}</p>
                        <span className="card-title">{displayName}</span>
                    </div>
                    <div className="card-action">
                        <button className="btn" onClick={() => addToBasket({mainId, displayName, price})}>Buy</button>
                        <span className="right" style={{fontSize: "1.8rem"}}>{price.regularPrice}$</span>
                    </div>
                </div>
            ))}
        </>
            
    )
}