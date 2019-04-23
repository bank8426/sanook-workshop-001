import React, {Component,useState} from 'react';
import logo from './logo.svg';
import './App.css';




const handleChange = (e: React.FormEvent<HTMLInputElement> 
  | React.FormEvent<HTMLTextAreaElement>) => {
    const {name, value} = e.target as any;
}

const App: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")

  
  const submitForm = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    alert(`
    Hi ${name}
    Email: ${email}
    Message: ${message}
    `
    )
  }
  const submitForm2 = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const sum= parseInt(num1) + parseInt(num2);
    alert(`
    v1 ${num1}
    v2: ${num2}
    Message: ${sum}
    `
    )
  }
  return (
    <div className="container">
      <div>
        <div>Hellllloooooooooo</div>
        <form onSubmit={submitForm}>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={name} 
            onChange={e => setName(e.target.value)}
            className="form-field"
          />
          <br/><br/>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            className="form-field"
          />
          <br/><br/>
          <textarea 
            rows={4} 
            placeholder="Message" 
            value={message} 
            onChange={e => setMessage(e.target.value)}
            className="form-field"
          >
          </textarea>
          <br/><br/>
          <button type="submit" >Send message</button>
        </form>
<p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        <form onSubmit={submitForm2}>
          <input 
            type="number" 
            name="num1" 
            placeholder="num1" 
            value={num1} 
            onChange={e => setNum1(e.target.value)}
            className="form-field"
          />
          <br/><br/>
          <input 
            type="number" 
            name="num2" 
            placeholder="num2" 
            value={num2} 
            onChange={e => setNum2(e.target.value)}
            className="form-field"
          />
          <br/><br/>
          <button type="submit" >Sum</button>
        </form>
      </div>
    </div>
  );
}

export default App;
