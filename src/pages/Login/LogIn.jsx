import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Login.module.css';

const LogIn = ({ users, setHasAccount }) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const isUserExisting = users.find((user) =>
      (user.username === usernameOrEmail || user.email === usernameOrEmail) &&
      user.password === password
    );

    if (!isUserExisting) {
      alert('Oops! It seems your username/email or password is incorrect.');
    } else {
      setHasAccount(true);
      alert("Login successful!");
      navigate("/");
    }
  };

  return (
    <div className={styles.container}>

      <div className={styles.flexContainer}>

        <div className={styles.leftContainer}>
          <img
            src="src\pages\Sign up\Sign Up.png" 
            alt="chair"
          />
        </div>

        <div className={styles.rightContainer}>

          <div className={styles.title}>
            <h2>Sign In</h2>
            <p className={styles.footerText}>
              Don’t have an account?
              <a className={styles.link} href="/signup"> Sign up</a>
            </p>
          </div>

          <div className={styles.form}>
            <form onSubmit={handleSubmit}>

              <div className={styles.inputFields}>
                
                <div className={styles.fieldItem}>
                  <input
                    type="text"
                    placeholder="Username or Email"
                    value={usernameOrEmail}
                    onChange={(e) => setUsernameOrEmail(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.fieldItem}>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.tickBox}>

                  <div className={styles.checkboxRow}>
                    <input type="checkbox" id="terms" required />
                    <label htmlFor="terms">
                      Remember me
                    </label>
                  </div>

                  <div className={styles.forgotPassword}>
                    <a href="#">Forgot Password?</a>
                  </div>
                  
                </div>

              </div>

              <button type="submit">Login</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;