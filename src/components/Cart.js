import React from 'react';

function Cart({ dummyData, handleChangeCounter, counts }) {

    return (
        <>
            <div className="product-container">
                {dummyData &&
                    dummyData?.map((item, index) => {
                        return (
                            <div className="products-wrapper" key={index}>
                                <div className="product-image">
                                    <img src={item.image} alt="iphone" />
                                </div>
                                <div className="product-detail">
                                    <span>{item.name}</span>
                                    <span>{item.desc}</span>
                                </div>
                                <div className="product-counter">
                                    <button onClick={() => handleChangeCounter('decrement', index)}>
                                        -
                                    </button>
                                    <span className="countValue">{counts[index]}</span>
                                    <button onClick={() => handleChangeCounter('increment', index)}>
                                        +
                                    </button>
                                </div>
                                <div className="product-price">
                                    <span>Rs:{item?.price}</span>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
}

export default Cart;
