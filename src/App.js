import React,{ useState } from 'react';
import './App.css';

function App() {
  const [newName,setName] = useState('');
  const [newAge,setAge] = useState('');
  const [items,setItems] = useState([]);
  const displayName = (event) => {
    setName(event.target.value);
  }
  const displayAge = (event) => {
    if(event.target.value <= 0){
      alert('Please enter the proper age of a person!!');
    }
    setAge(event.target.value);
  }
  const displayValue = () => {
    if(!newName && !newAge){
      alert('Please enter the details!!');
    }
    const item = {
      id: Math.floor(Math.random()),
      name: newName,
      age: newAge
    }
    setItems(oldList => [...oldList,item]);
    setName('');
    setAge('');
  }

  return (
    <div className="App">
      <h1>Welcome to Todo App</h1>
      <div className='todoContainer'>
      <div>
      <input type='text' placeholder='Enter your name..' onChange={displayName} value={newName}></input>
      </div>
      <div>
      <input type='number' placeholder='Enter your age..' onChange={displayAge} value={newAge}></input>
      </div>
      <div>
        <button onClick={displayValue}>Add user</button>
      </div>
      </div>
      <div className='ulList'>
        <ul>
          {
            items.map((ele) => {
              return(
                <li id={ele.id}>{ele.name} ({ele.age} years old)</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
