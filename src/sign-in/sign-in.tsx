import styles from "./sign-in.module.scss";

export default function SignIn() {
  return (
    <div className={styles.container}>
      <h1>Sign In</h1>

      <form>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
