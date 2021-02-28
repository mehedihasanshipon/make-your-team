import React from 'react';

const Team = (props) => {
    console.log(props)      
    const singlePlayer = props.singlePlayer;
    const {name,salary,image} = singlePlayer;
    
    return (
        <div >
            <img src={image} alt=""/>
            <h5>Name: {name} </h5> 
            <p>Salary: {salary} </p> 
            {/* <p>Total Salary : {totalPopulation}</p> */}
        </div>
    );
};

export default Team;