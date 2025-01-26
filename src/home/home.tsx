import { useNavigate } from "react-router-dom";
import styles from "./home.module.scss";

export default function Home() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/sign-in");
  };

  return (
    <div className={styles.container}>
      <h1>Home</h1>

      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
