import styles from "./UserList.module.css";
import { useGetUsersQuery } from "../../store/api/usersApi";

export const UserList = () => {
  const { data } = useGetUsersQuery();
  console.log(data);

  return (
    <div>
      <p>User list!</p>
      <ul className={styles.ul}>
        { !data ? 'loading' : data.map((user) => {
            return <li>{user.firstName} {user.lastName }</li>
          })
        }
      </ul>
    </div>
  )
}
