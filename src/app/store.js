import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from '../app/expenseSlice'

const store  = configureStore({
    reducer:{
        expense:expenseReducer

    }
}) 

export default store ;