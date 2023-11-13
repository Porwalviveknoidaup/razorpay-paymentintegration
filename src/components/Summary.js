import React from 'react'

function Summary({ counts, dummyData, order, handlePayment, amount }) {

    return (
        <>
            <div className='product-summary-container'>
                {amount === 0 ? "" :
                    <div className='summary'>
                        <h3>Order Summary</h3>
                    </div>}
                {dummyData && order && dummyData?.map((item, index) => {
                    return (
                        <>
                            {item?.isChecked ?
                                <>
                                    {counts[index] > 0 ?
                                        <div className='number-of-items' key={index}>
                                            <span>{item?.name}*{counts[index]}</span>
                                            <span>Rs: {item?.price * counts[index] === 0 ? item?.price : item?.price * counts[index]}</span>
                                        </div> : ""}

                                </> : ""}
                        </>
                    )
                })}
                {order && amount !== 0 ?
                    <>
                        <div className='total-price'>
                            <span>Total Price: </span>
                            <span>RS: {amount}</span>
                        </div>
                        {amount === 0 ? "" :
                            <div className='place-order'>
                                <button onClick={() => { handlePayment() }}>Place Order</button>
                            </div>}
                    </>
                    : ""}

            </div>
        </>
    )
}

export default Summary