import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const addUser = props.addUser;
    const income = addUser.map(income => income.income);
    let total = 0;
    for (let i = 0; i < income.length; i++) {
        const element = income[i];
        total = total + element;
    }

    return (
        <div className='cart'>
            <h5>Total added user  - {addUser.length}</h5>
            <h6>Yearly income - {total}</h6>
            <h6 className='border-bottom'>Added user list</h6>
            <ol>
                {
                    addUser.map(user => <li>{user.name}</li>)
                }
            </ol>
        </div>
    );
};

export default Cart;