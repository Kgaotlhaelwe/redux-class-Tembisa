import logo from './logo.svg';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from  "./components/expenseList"

function App() {
  return (
    <div className="App">
      <ExpenseForm/>
      <ExpenseList/>
      
    </div>
  );
}

export default App;
