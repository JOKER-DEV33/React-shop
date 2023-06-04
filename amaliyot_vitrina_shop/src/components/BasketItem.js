import {useContext} from 'react'
import { ShopContext } from '../context'

export default function BasketITem (props){
    const {example} = useContext(ShopContext)
    console.log(example)
    const{mainId, displayName, price, quantity, removeFormBasket, incrementQuantity, decrementQuantity} = props
    return(
        <li className="collection-item">
            {displayName} x{quantity} = {price.regularPrice * quantity} <b>$</b>
            <span className="secondary-content">
                <a 
                    className="waves-effect waves-light btn btnq" 
                    onClick={() => incrementQuantity(mainId)}>
                    <i className="material-icons left">exposure_plus_1</i>
                    add
                </a>
                <a 
                    className="waves-effect waves-light btn btnq" 
                    style={{marginLeft: 10}} 
                    onClick={() => decrementQuantity(mainId)}>
                    <i className="material-icons left">exposure_minus_1</i>
                    remove
                </a>
                <a 
                    className="waves-effect waves-light btn btnq"
                    style={{marginLeft: 10}}
                    onClick={()=> removeFormBasket(mainId)}> 
                    <i className="material-icons left">delete_forever</i> delete
                </a>
            </span>
        </li>
    )
}