import React from 'react';
import './AnnualIncome.css'

const AnnualIncome = (props) => {
    const annualSelary = props.annualSelary;

    let total = 0;
    for (let i = 0; i < annualSelary.length; i++) {
        const person = annualSelary[i];
        total = total + person.annual_income;   
    }
    let singleIncome = 0;
    for (let i = 0; i < annualSelary.length; i++) {
        const singlePerson = annualSelary[i];
        singleIncome =  singlePerson.annual_income;   
    }
    return (
        <div className="budget-calculate-cart">
            <h1>Selected Person: {annualSelary.length}</h1>
            <h2>Selected person's Income: {singleIncome}</h2>
            <h2>Total : {total.toFixed(2)}</h2>
        </div>
    );
};

export default AnnualIncome;