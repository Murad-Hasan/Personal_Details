import React, { useEffect, useState } from 'react';
import AnnualIncome from '../AnnualIncome/AnnualIncome';
import Personalinfo from '../Personalinfo/Personalinfo';
import './Information.css'

const Information = () => {
    const [persons, setPerson] =  useState([])

    useEffect(()=> {
         fetch('https://api.mocki.io/v1/9ae22d6b')
          .then(res => res.json())
          .then(data => setPerson(data));
    },[])
    const [annualSelary, setAnnualSelary] = useState ([])
    const HandelAddPerson = (persons) => {
        const newAnnualSelary = [...annualSelary , persons]
        setAnnualSelary(newAnnualSelary)
    }

    return (
        <div className= 'information-section-style'>
            <div className='people-information'>
                {
                    persons.map(person => <Personalinfo HandelAddPerson = {HandelAddPerson}  person = {person} key ={person.id}></Personalinfo>)
                }
            </div>
            <div>
                <AnnualIncome annualSelary = {annualSelary}></AnnualIncome>
            </div>
        </div>
    );
};

export default Information;