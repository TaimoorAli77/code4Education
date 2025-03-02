import './App.css';
import Button from './Button';
import User2 from './User2';
import User3 from './User3';
import User4 from './User4';
import Users, { NUsers, NewCustomer } from './Users';

function App() {
  return (
    <>
      <h1>Hello Taimoor!</h1>
      <Users />
      <NUsers />
      <NUsers></NUsers>
      <NewCustomer />
      <User2 />
      <User3 />
      <User4 />
      <Button />
    </>
  );
}

export default App;
