import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/user";
import styles from "./home.module.scss";

type Props = {
  fetchUsers: () => Promise<User[]>;
};

export default function Home({ fetchUsers }: Props) {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);

  const handleSignOut = () => {
    navigate("/sign-in");
  };

  useEffect(() => {
    (async () => {
      const users = await fetchUsers();
      setUsers(users);
    })();
  }, [fetchUsers]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Home</h1>

        <button onClick={handleSignOut}>Sign Out</button>
      </div>

      <div className={styles.users}>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Username: {user.username}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
