import React from 'react';
import './User.css';
const User = (props) => {
    const {address,age,email,gender,name,phone,picture,income} = props.user;
    return (
        <div className='user'>
            <div className='m-3'>
                <img src={picture} alt=""/>
                <div className="user-content">
                    <h5>{name}<small>({gender}) - {age}</small></h5>
                    <p><strong>Email: </strong>{email}</p>
                    <p><strong>Phone: </strong>{phone}</p>
                    <p><strong>Address: </strong>{address}</p>
                    <p><strong>income: </strong>{income}</p>
                    <button onClick={()=>props.handlerUser(props.user)} >add user</button>
                </div>
            </div>
        </div>
    );
};

export default User;