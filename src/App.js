import './App.css';
import Users, { NUsers, NewCustomer } from './Users';

function App() {
  return (
    <div className="App">
      <h1>Hello Taimoor!</h1>
      <Users></Users>
      <NUsers />
      <NUsers></NUsers>
      <NewCustomer />
    </div>
  );
}

export default App;
