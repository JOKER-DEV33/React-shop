import React, {useState, useEffect} from 'react'
// import { api_key, api_url } from '../config'
import Loader from './Loader'
import GoodList from './GoodList'
import Cart from './Cart'
import BasketList from './BasketList'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
export default function Shop(props){
    const {lan, loading, setLoading} = props
    const [goods, setGoods] = useState([])
    const [order, setOrder] = useState([])
    const [isBasketShow, setBasketShow] = useState(false)

    const handleBasketShow = () =>{
        setBasketShow(!isBasketShow)
    }

    const removeFormBasket = (itemId) =>{
        const newOrder = order.filter(item => item.mainId !== itemId)
        setOrder(newOrder)
        toast.error("Goods deleted from basket successfully!")
    }

    const addToBasket = (item) =>{
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.mainId === item.mainId
            
        )
        if(itemIndex < 0){
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        }else{
            const newOrder = order.map((orderItem, index) =>{
                if(index === itemIndex){
                    return{
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                }else{
                    return orderItem
                }
            })
            setOrder(newOrder)
        }
        toast.success("Goods added to basket successfully!")
        
    }

    useEffect(() => {
        fetch(`https://fortniteapi.io/v2/shop?lang=${lan}`, {
            headers: {
                Authorization: 'eeaae512-46f5a9b4-86cf56ac-2b37cfa9'
            },
        }).then(response => response.json())
        .then(data => {
            data.shop && setGoods(data.shop)
            setLoading(false)
        })
    }, [lan, setLoading])

    const incrementQuantity = (itemId) =>{
        const newOrder = order.map(item => {
            if(item.mainId === itemId){
                const newQuantity = item.quantity + 1
                return{
                    ...item,
                    quantity: newQuantity
                }
            }else{
                return item
            }
        })
        setOrder(newOrder)
    }

    const decrementQuantity = (itemId) =>{
        const newOrder = order.map(item => {
            if(item.mainId === itemId){
                const newQuantity = item.quantity - 1
                return{
                    ...item,
                    quantity: newQuantity >= 0 ? newQuantity : 0
                }
            }else{
                return item
            }
        })
        setOrder(newOrder)
    }

    return(
        <div className="container shop content">
            <ToastContainer/>
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            {loading ? (
                <Loader/>
            ):(
                <GoodList goods={goods} addToBasket={addToBasket}/>
            )}
            {isBasketShow && <BasketList 
                order={order} 
                handleBasketShow={handleBasketShow} 
                removeFormBasket={removeFormBasket}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                />}
        </div>
    )
}