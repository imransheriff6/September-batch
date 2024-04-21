import { useState } from 'react'
import './cart.css'
function Cart() {
    const [carts, setCarts] = useState([
        {
            id: 1,
            name: 'Divine Casa 144 Thread Count Pure Cotton Soft and Smooth Bed Sheet Single Bed for Every Day Use, Peach Amber, 254 X 222 cms',
            image: 'https://m.media-amazon.com/images/I/71nOVN7Vt-L._AC_UL320_.jpg',
            actualPrice: 500,
            quantity: 1,
            totalPrice: 500
        },
        {
            id: 2,
            name: 'Kamas Fitted Bedsheet (360° Fully Elastic Band) with Pillow Cover Set 2 Softest Long Staple 100% Cotton Luxurious Comfort (Queen, Grey)',
            image: 'https://m.media-amazon.com/images/I/81+KeqWfvBL._AC_UL320_.jpg',
            actualPrice: 2500,
            quantity: 1,
            totalPrice: 2500
        }
    ]);
    const [total, setTotal] = useState(carts.reduce(function(cur, acc){return cur.totalPrice + acc.totalPrice}));
    const changeQuantity = (id, flag) => {
        let index = carts.findIndex((ele) => ele.id == id);
        let copiedArray = [...carts];
        if (flag === 'Add') {
            copiedArray[index].quantity += 1;
        } else {
            copiedArray[index].quantity -= 1;
        }
        copiedArray[index].totalPrice = copiedArray[index].quantity * copiedArray[index].actualPrice;
        setCarts(copiedArray);
        setTotal(copiedArray.reduce((cur, acc) => cur.totalPrice + acc.totalPrice))
    }
    return <div>
        <h1>Cart Page</h1>
        {
            carts.map(function(ele) {
                return <div key={ele.id} className="item">
                    <img src={ele.image} />
                    <h4>{ele.name}</h4>
                    <div>
                        <button onClick={() => changeQuantity(ele.id, 'Minus')} > - </button>
                        <span>{ele.quantity}</span>
                        <button onClick={() => changeQuantity(ele.id, 'Add')}> + </button>
                    </div>
                    <p>{ele.totalPrice}</p>
                </div>
            })
        }
        <h1 id='footer'>Total <span>{total}</span></h1>
    </div>
}
export default Cart