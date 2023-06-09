import GoodItem from "./GoodItem"

export default function GoodList(props){
    const {goods = [], addToBasket} = props

    if(!goods.length){
        return <h3>Nothing found</h3>
    }
    return <div className="goods">
        {goods.map(item => (
            <GoodItem key={item.mainId} {...item} addToBasket={addToBasket}/>
        ))}
    </div>
}