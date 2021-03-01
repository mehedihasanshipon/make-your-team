import React from 'react';
import './Team.css'

const Team = (props) => {
    console.log(props)      
    const singlePlayer = props.singlePlayer;
    const {name,salary,image} = singlePlayer;
    
    return (
        <div className="d-flex team-player">
            <img src={image} alt=""/>
            <div className ="team-player-info">
                <h5> {name} </h5> 
                <p>Salary: {salary} </p> 
            </div>
        </div>
    );
};

export default Team;