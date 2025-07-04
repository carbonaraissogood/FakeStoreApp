import { useState } from "react";
import axios from "axios";

const SignUp = ({ users }) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = { 
                    id: (users.length + 1),
                    username: username,
                    email: email,
                    password: password
                  };     

    axios
          .post('https://fakestoreapi.com/users', user)
          .then(response => console.log(response.data));
          
    setUsers(prevUsers => [...prevUsers, user]);   

    console.log(users);

    alert("You created an account succesfully!");
  }

  return (
    <main>
      <p>Company Name</p>

      <h2>Create your account</h2>
      <p>Get Started for free</p>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={handleEmailChange}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />

        <p>Remember me</p>

        <p><a href="">Forgot Password</a></p>

        {/* Paano ko ililink to sa  Login na hindi nawawala yung data? */}
        <button type="submit">Sign Up</button>
        
      </form>

    </main>
  );
};

export default SignUp;