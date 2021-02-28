import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css'

const Players = (props) => {
  // console.log(props.player)
  const { name,image,salary,shirtnumber,position,age} = props.player;
  const handleAddClick = props.handleAddClick;
  return (
    <div className="container">
        <div className="row ">
          <div className="col-md-6 ">
          <div className="card m-3">
            <img src= {image} className="card-img-top text-center" alt="" />
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Name: {name} </li>
                <li className="list-group-item">Salary: {salary}</li>
                <li className="list-group-item">Shirt-Number: {shirtnumber} </li>
                <li className="list-group-item">Shirt-Number: {position} </li>
                <li className="list-group-item">Shirt-Number: {age} </li>
              </ul>
              <button onClick = {() => handleAddClick(props.player)} className="btn btn-primary"><FontAwesomeIcon icon={faUserPlus} /> Add Now</button>
            </div>
        </div>
          </div>
        </div>
    </div>
  );
};

export default Players;
