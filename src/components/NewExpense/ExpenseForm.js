import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

   /* const [userInput, setUserInput] = useState({
        enteredTitle:'',
        enteredDate:'',
        enteredAmount:''
    });*/

    const [enteredTitle, setEnteredTitle] = useState('');
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
        /*setUserInput((prevSrate) => {
            return{
                ...prevState,
                enteredTitled:event.target.value
            }
        })*/
    }

    const [enteredDate, setEnteredDate] = useState('');
    const dateChangeHandler = (event)=> {
        setEnteredDate(event.target.value)
    }

    const [enteredAmount, setEnteredAmount] = useState('')
    const amountChangeHandler = (event)=> {
        setEnteredAmount(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expenses__control">
                    <label>Title </label>
                    <input type='texte' value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expenses__control">
                    <label>Amount </label>
                    <input value={enteredAmount} onChange={amountChangeHandler} type="number" min="0.01" step="0.01"></input>
                </div>    
                <div className="new-expenses__control">
                    <label>Date </label>
                    <input value={enteredDate} onChange={dateChangeHandler} type="date" min="2019-01-01" max="2022-12-31"></input>
                </div>
                <div className="new-expenses__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;