import React, { Component } from 'react'
import { MdDelete } from 'react-icons/md';
import './ExpenseList.css'

export default class ExpenseList extends Component {
  render() {
    return (
      <>
        <ul className="list">
            {/* Expense Item*/}
        </ul>
        <button className="btn">
            목록 지우기
            <MdDelete className="btn-icon" />
        </button>
      </>
    );
  };
};
