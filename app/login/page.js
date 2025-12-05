import React from "react";

export default function Login() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input type="email" placeholder="Enter your email" style={styles.input} />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input type="password" placeholder="Enter your password" style={styles.input} />
        </div>

        <button style={styles.button}>Login</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5"
  },
  card: {
    width: "350px",
    padding: "30px",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px"
  },
  inputGroup: {
    marginBottom: "15px"
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold"
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "purple",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    marginTop: "10px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};
