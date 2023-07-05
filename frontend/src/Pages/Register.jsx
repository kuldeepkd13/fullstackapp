import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // Add the submit form handler function here
    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch("https://long-tan-crab-vest.cyclic.app/users/register", {
          method: "POST",
          body: JSON.stringify({ username, email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message === "Registration successful") {
              alert(data.message);
              setUsername('');
              setEmail('');
              setPassword('');
            } else{
              alert(data.message)
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
      
    
    return (
      <div>
        <form onSubmit={handleSubmit}>
          
          <h1>Create an account</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Sign up" />
        </form>
      </div>
    );
  };
  
  export default RegistrationForm;
  