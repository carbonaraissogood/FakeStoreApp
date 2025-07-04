import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = ({ users }) => {

  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleUsernameOrEmailChange = (event) => {
    setUsernameOrEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const input = { 
                    usernameOrEmail: usernameOrEmail,
                    password: password
                  };

    const isUserExisting = users.find((user) => (
      (user.username === input.usernameOrEmail
        ||
        user.email === input.usernameOrEmail
      )
      &&
      (user.password === input.password)
    ))
    
    if (!isUserExisting) {
      alert('Oops! It seems your username/email or password is incorrect.');
    } else {
      alert("Login successfully!");
      navigate("/");
    }
  }

  return (
    <main>
      <p>Company Name</p>

      <h2>Welcome Back</h2>
      <p>Please enter your details</p>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Username or Email"
          value={usernameOrEmail}
          onChange={handleUsernameOrEmailChange}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />

        <p><a href="">Forgot Password</a></p>

        <button>Login</button>
        
      </form>

      <p>Don't have an account? <a href="">Sign up</a></p>
    </main>
  );
};

export default LogIn;
