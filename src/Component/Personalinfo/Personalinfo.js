import React from 'react';
import './Personalinfo.css'

const Personalinfo = (props) => {
    const { name, email, gender, avatar_url, annual_income } = props.person
    return (
            <div className="cart">
                <h1>Name : {name}</h1>
                <img src={avatar_url} alt="" />
                <p><small>Gender : {gender}</small></p>
                <p>Email: {email}</p>
                <p>Annual Income : ${annual_income}</p>
                <button onClick = { () => props.HandelAddPerson(props.person)} className='add-btn'>Add Person</button>
            </div>
    );
};

export default Personalinfo;