import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // This is products Array of objects
  /*  const products = [
     { name: 'laptop', price: 75000 },
     { name: 'charger', price: 200 },
     { name: 'headphone', price: 63000 },
     { name: 'Iphone', price: 9000 },
     { name: 'bike', price: 55000 },
     { name: 'car', price: 736000 },
     { name: 'car', price: 736000 }
   ] */
  return (
    <div className="App">

      {/* This part is about products loop */}
      {/*  {
       {
        products.map(thing => <Products name={thing.name} price={thing.price}></Products>)
      }} */}


      {/* counter part */}
      {/* <Counter></Counter> */}

      <ExternalUsers></ExternalUsers>

    </div>
  );
}


// This part is about Products 

/* function Products(props) {
  return (
    <div className="Products">
      <h2> Products : {props.name}</h2>
      <h3> Price : {props.price}</h3>
    </div>
  )
} */

// This part is About Increasing and Decreasing value

/* function Counter(props) {
  const [Count, setCount] = useState(32);
  const handleIncrease = () => setCount(Count + 1);
  const handleDecrease = () => setCount(Count - 1);

  return (
    <div className='counter'>
      <h1>Count : {Count}</h1>
      <button onClick={handleIncrease} style={{ color: 'black', marginRight: '10px', backgroundColor: 'sienna', padding: '15px', borderRadius: '10px', cursor: 'pointer' }} >Increase</button>
      <button onClick={handleDecrease} style={{ color: 'black', marginRight: '10px', backgroundColor: 'pink', padding: '15px', borderRadius: '10px', cursor: 'pointer' }}>Decrease</button>
    </div>
  )
} */

// This part is about fetching user data and showing it

function ExternalUsers(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div className='users'>
      <h3>External Users : {users.length}</h3>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div className='Products'>
      <h2>Name : {props.name}</h2>
      <p>E-mail : {props.email}</p>
    </div>
  )
}


export default App;
