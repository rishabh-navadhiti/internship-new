import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import styles from "./DisplayUsers.module.css";

interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
  gender: string;
}

const DisplayUsers = () => {
  const { isLoading, error, data } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: () =>
      axios.get<User[]>("http://localhost:3001/users").then((res) => res.data),
  });

  if (isLoading) return <p>Data is loading!</p>;

  if (error) {
    console.error(error.message);
    return <p>Error fetching user details</p>;
  }

  return (
    <div>
      {data?.map((user) => (
        <div className={styles.userDiv} key={user.id}>
          <p>
            Name - {user.name} Email - {user.email}
          </p>
          <p>
            Age - {user.age} Gender - {user.gender}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DisplayUsers;
