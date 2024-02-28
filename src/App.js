// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  //making state for get value from user
  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [bmi,setBmi] = useState('');
  const [message,setMessage] = useState(''); 

//Logic

let calcBmi=(e)=>{
   e.preventDefault();      //form not submit in server
  if(weight==0 || height==0){
    alert('please enter a valid weight and height')
  }
   
  else{
    let bmi=(weight/(height*height)*703)
    setBmi(bmi.toFixed(1))

    //message
    if(bmi<25){
      setMessage('you are underweight')
    }
    else if(bmi>=25 && bmi<30){
      setMessage('you are a healthy weight')
    }
    else{
      setMessage('you are overweighted');
    }
  }
}
let reload =()=>{
  window.location.reload()
}




  return (
    <div className="container">
      <h1>Calculator</h1>
      <form onSubmit={calcBmi}>
        <div>
          <label>Weight(ibs)</label>
          <input type='text' placeholder='enter weight value' value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div>
          <label>Height(in)</label>
          <input type='text' placeholder='enter height value' value={height} onChange={(e)=> setHeight(e.target.value)}/>
        </div>

        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>

        <div className='center'>
          <h3>Your bmi is:{bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
