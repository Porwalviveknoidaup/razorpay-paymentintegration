import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import Summary from './Summary'
import dummyData from '../dummyData';
import Payment from './Payment';
import { KeyId } from '../PaymentKey';


function Shop() {
    const [counts, setCounts] = useState(dummyData.map(() => 0));
    const [orderDetail, setOrderDetail] = useState(dummyData)
    const [order, setOrder] = useState(true)
    const [amount, setAmount] = useState(0)
    const [paymentActive, setPaymentActive] = useState(false)

    useEffect(() => {
        const total = orderDetail.reduce((acc, item, index) => {
            if (item.isChecked) {
                return acc + item.price * counts[index];
            }
            return acc;
        }, 0);
        setAmount(total);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [orderDetail])

    const handleChangeCounter = (action, index) => {
        let newCounts = [...counts];
        let makeOrderSummary = orderDetail
        let orderSummary;
        switch (action) {
            case 'decrement':
                if (counts[index] > 0) {
                    --newCounts[index];
                    orderSummary = makeOrderSummary?.map((elem, elemIndex) => {
                        if (index === elemIndex) {
                            return { ...elem, isChecked: true };
                        }
                        return elem
                    })
                    setOrderDetail(orderSummary)
                    setOrder(true)
                }
                else {
                    // setOrder(false)
                }
                setCounts(newCounts);
                break;
            case 'increment':
                ++newCounts[index];
                orderSummary = makeOrderSummary?.map((elem, elemIndex) => {
                    if (index === elemIndex) {
                        return { ...elem, isChecked: true };
                    }
                    return elem
                })
                setOrderDetail(orderSummary)
                setOrder(true)
                setCounts(newCounts);
                break;
            default:
                break;
        }
    };
    const handlePayment = () => {
        console.log("payment start")
        setPaymentActive(true)
    }
    const closePayment = () =>{
        setPaymentActive(false)
    }
    return (
        <>
            <div className='shop-container'>
                <div className='shop-name'>
                    <h2>Trendy Men's Shop</h2>
                </div>
                <div className='shop-section'>
                    <div className='shop-product-section'>
                        <Cart dummyData={dummyData} handleChangeCounter={handleChangeCounter} counts={counts} />
                    </div>
                    <div className='product-summary-section'>
                        <Summary counts={counts} dummyData={orderDetail} order={order} handlePayment={handlePayment} amount={amount} />
                    </div>

                </div>
                {paymentActive ? 
<div className='payment'>
    <Payment KeyId = {KeyId} closePayment = {closePayment} amount = {amount}/>
</div>:""}
            </div>
        </>
    )
}

export default Shop