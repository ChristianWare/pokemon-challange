import React, { useState } from "react";
import styles from "../styles/Login.module.css";

function LoginPage({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const sumbitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={sumbitHandler} action='' className={styles.form}>
        <div className={styles.formContent}>
          <div className={styles.formGroup}>
            <input
              className={styles.inputArea}
              type='email'
              name='email'
              id='email'
              placeholder='user@email.com'
              required
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              className={styles.inputArea}
              type='password'
              name='password'
              id='password'
              placeholder='*********'
              required
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
          <button className={styles.btn}>
            login
          </button>
        </div>
          {error != "" ? <div className={styles.error}>{error}</div> : ""}
      </form>
    </div>
  );
}

export default LoginPage;
