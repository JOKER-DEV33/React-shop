import BasketITem from "./BasketItem"

export default function BasketList(props){
    const {order, handleBasketShow, removeFormBasket, incrementQuantity, decrementQuantity} = props
    
    const totalPrice = order.reduce((sum, el)=>{
        return sum + el.price.regularPrice * el.quantity
    }, 0)

    return(
        <div className="bsk">
            <ul className="collection basket-list">
                <li className="collection-item active">
                    Basket
                </li>
                {order.length ? order.map(item =>{
                    return(
                        <BasketITem 
                            key={item.mainId} {...item} 
                            removeFormBasket={removeFormBasket} 
                            incrementQuantity={incrementQuantity}
                            decrementQuantity={decrementQuantity}
                        />
                    )
                }): <li className="collection-item">Basket is empty</li>}
                <li className="collection-item active">
                    Total Price: {totalPrice} <b>$</b>
                </li>
                <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
            </ul>
        </div>
    )
}