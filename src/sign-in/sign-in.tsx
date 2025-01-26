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
      <h1>Sign In</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value="zdias1413@gmail.com"
          required
        />

        <input
          type="password"
          id="password"
          name="password"
          value="123456"
          placeholder="Password"
          required
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
