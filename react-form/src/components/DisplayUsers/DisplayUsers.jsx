import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import styles from "./DisplayUsers.module.css"

const DisplayUsers = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      axios.get("http://localhost:3001/users").then((res) => res.data),
  });

  if (isLoading) return <p>Data is loading!</p>;
  if (error) {
    console.log(error.message);
    
    return <p>Error fetching user details</p>;
  }
  return (
    <div>
      {data.map((user) => {
        return (
          <div className={styles.userDiv} key={user.id}>
            <p>
              Name - {user.name} Email - {user.email}
            </p>
            <p>
              Age - {user.age} Gender - {user.gender}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayUsers;
