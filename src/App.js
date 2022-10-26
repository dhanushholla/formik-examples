import logo from './logo.svg';
import './App.css';
import ExpenseForm from './component/basics/ExpensesForm';
import { FormExample } from './component/regex-validation-example/FormExample';
import { ValidationSchemaExample } from './component/validation-by-yup/ValidationSchemaExample';
import { Formeg } from './component/Manually trigger/Formeg';

function App() {
  return (
    <div className="App">
      {/* <ExpenseForm></ExpenseForm> */}
      {/* <FormExample></FormExample> */}
      {/* <ValidationSchemaExample></ValidationSchemaExample> */}
      <Formeg></Formeg>
    </div>
  );
}

export default App;
