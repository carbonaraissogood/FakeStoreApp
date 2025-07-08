import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from './SignUp.module.css'; // Create this CSS file

const SignUp = ({ users, setUsers }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      id: users.length + 1,
      username,
      email,
      password
    };

    axios.post('https://fakestoreapi.com/users', user)
         .then(res => console.log(res.data));

    setUsers(prev => [...prev, user]);
    alert("You created an account successfully!");
    navigate('/login');
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {/* <p className={styles.logo}>3legant.</p> */}
        <img
          src="src\pages\Sign up\Sign Up.png" 
          alt="chair"
        />
      </div>

      <div className={styles.right}>
        <h2>Sign up</h2>
        <p className={styles.subtext}>Already have an account? <a href="/login">Sign in</a></p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <div className={styles.checkboxRow}>
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree with <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a>
            </label>
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
