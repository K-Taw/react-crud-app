import React, { Component } from 'react'
import { MdEdit } from 'react-icons/md';
import './ExpenseItem.css'

export default class ExpenseItem extends Component {
  render() {
    return (
      <li className="item">
        <div className="info">
            <span className="expense"></span>
            <span className="amount"> 원 </span>
        </div>
        <div>
            <button className="edit-btn">
                <MdEdit/>
            </button>
            <button className="clear-btn">
                <MdEdit/>
            </button>
        </div>
      </li>
    );
  };
};