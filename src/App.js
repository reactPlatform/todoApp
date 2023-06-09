import React,{ useState } from 'react';
import './App.css';

function App() {
  const [newName,setName] = useState('');
  const [newAge,setAge] = useState('');
  const [clgName,setClgName] = useState('');
  const [items,setItems] = useState([]);
  const displayName = (event) => {
    setName(event.target.value);
  }
  const displayAge = (event) => {
    
    setAge(event.target.value);
  }
  const displayClgName = (event) => {
    setClgName(event.target.value);
  }
  const displayValue = () => {
    
    const item = {
      id: Math.floor(Math.random()),
      name: newName,
      age: newAge,
      clgname: clgName
    }
    if(newName.trim().length === 0 || newAge.trim().length === 0 || clgName.trim().length === 0){
      alert('Please enter the details before submitting');
      return;
    }
    if(+newAge < 1){
      alert('Entered age is invalid');
      return;
    }
    setItems(oldList => [...oldList,item]);
    setName('');
    setAge('');
    setClgName('');
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
      <input type='text' placeholder='Enter your College name..' onChange={displayClgName} value={clgName}></input>
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
                <li id={ele.id}>{ele.name} ({ele.age} years old) {ele.clgname}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
