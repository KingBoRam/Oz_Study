import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ initialExpenses, handleDelete }) => {
  return (
    <>
      <ul className="list"></ul>
      {initialExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            handleDelete={handleDelete}
          ></ExpenseItem>
        );
      })}
      <button className="btn">목록지우기</button>
    </>
  );
};

export default ExpenseList;

// export default class ExpenseList extends Component {
//   render() {
//     return (
//       <>
//         <ul className="list"></ul>
//         {this.props.initialExpenses.map((expense) => {
//           return (
//             <ExpenseItem
//               key={expense.id}
//               expense={expense}
//               handleDelete={this.props.handleDelete}
//             ></ExpenseItem>
//           );
//         })}
//         <button className="btn">목록지우기</button>
//       </>
//     );
//   }
// }
