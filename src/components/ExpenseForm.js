
import {addExpense} from "../app/expenseSlice" ;

import { useDispatch , useSelector } from "react-redux";
import {useState}  from 'react' ;

import { v4 as uuidv4 } from 'uuid';

const ExpenseForm = (()=>{
    const [expenseItem, setExpenseItem] = useState('');
    const [budgetType, setBudgetType] = useState('');
    const [amount, setAmount] = useState('');

    const dispatch = useDispatch() ;

    const handleaddExpense =  (()=>{

        let expense = {
            id:uuidv4() ,
            description:expenseItem ,
            amount:amount,
            budgetType:budgetType

        }

        console.log(expense)
        dispatch(addExpense(expense))


    })


    return (
        <div>

        <input type="text" placeholder="Enter item "  onChange={(e)=> setExpenseItem(e.target.value)}/>
        <input type="number" placeholder="Enter amount "  onChange={(e)=> setAmount(e.target.value)}/>
        <select onChange={(e)=> setBudgetType(e.target.value)}>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
        </select>

        <button onClick={handleaddExpense}>Add </button>

        </div>
    )
})

export default ExpenseForm ;