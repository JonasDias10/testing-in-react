import { useNavigate } from "react-router-dom";
import styles from "./sign-in.module.scss";

export default function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    navigate("/");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>

        <input type="email" id="email" name="email" placeholder="Email" />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
