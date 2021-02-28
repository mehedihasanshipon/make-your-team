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
          <div className="col-md-8 ">
          <div className="card m-3">
            <img src= {image} className="card-img-top w-100" alt="" />
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Name: {name} </li>
                <li className="list-group-item">Salary: {salary}</li>
                <li className="list-group-item">Shirt-Number: {shirtnumber} </li>
                <li className="list-group-item">Shirt-Number: {position} </li>
                <li className="list-group-item">Shirt-Number: {age} </li>
              </ul>
              <div className = "text-center">
              <button  onClick = {() => handleAddClick(props.player)} className="btn btn-danger "><FontAwesomeIcon icon={faUserPlus} /><span className = "text-center"> Add Now</span></button>
              </div>
            </div>
        </div>
          </div>
        </div>
    </div>
  );
};

export default Players;
