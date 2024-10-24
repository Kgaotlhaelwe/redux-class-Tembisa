
import {useSelector, useDispatch} from 'react-redux' ;
import {deleteExpense} from '../app/expenseSlice' ;

const ExpenseList = (()=>{

    const {expenses, totalIncome, totalexpense} = useSelector((state)=>state.expense)
    const dispatch = useDispatch() ;
    console.log(expenses);

    const  handleDeleteExpense =  ((id)=>{

        console.log(id)
        dispatch(deleteExpense(id))

    })


    return (
        <div>

           <h1>Expense List</h1> 
           <ul>
           {expenses.map((expense)=>(
            <div>
                <li> {expense.description}</li>
                <li> {expense.amount}</li>
                <button onClick={()=>handleDeleteExpense(expense.id)}>Delete </button>
            </div>
            
            

           ))}
           </ul>


        </div>
    )
})

export default ExpenseList