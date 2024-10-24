import { createSlice } from "@reduxjs/toolkit";

const expenseSlice =createSlice({
    name:"expense" ,
    initialState :{
        expenses: [],
        totalExpense: 0 ,
        totalIncome: 0 

    } ,
    reducers:{

        addExpense: (state , action)=>{
            state.expenses.push(action.payload);

        } ,
        deleteExpense: (state, action)=>{
            //state.expenses.filter((item)=>item.id ==!action.payload)

            state.expenses.filter(expense => expense.id !== action.payload.id)

        }

    }
})

    export const {addExpense, deleteExpense} = expenseSlice.actions;
    export default expenseSlice.reducer ;