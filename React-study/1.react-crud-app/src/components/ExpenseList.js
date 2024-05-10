import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
import { MdDelete } from 'react-icons/md';

const ExpenseList = ({
  initialExpenses,
  handleDelete,
  handleEdit,
  clearItem,
  expenses,
}) => {
  return (
    <>
      <ul className="list">
        {initialExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            ></ExpenseItem>
          );
        })}
      </ul>
      {expenses.length > 0 ? (
        <button className="btn" onClick={clearItem}>
          목록지우기
          <MdDelete className="btn-icon" />
        </button>
      ) : null}
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
