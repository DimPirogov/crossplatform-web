import styles from "./UserList.module.css";
import { useGetUsersQuery } from "../../store/api/usersApi";

export const UserList = () => {
  const { data, refetch } = useGetUsersQuery();
  // const reload = () => {
  //   forceUpdate();
  // }
  console.log(data);

  return (
    <div className={styles.container}>
      <p>User list!</p>
      <ul className={styles.ul}>
        { !data ? 'loading' : data.map((user) => {
            return <li>{user.firstName} {user.lastName }</li>
          })
        }
      </ul>
      <button
        className={styles.submitButton}
        onClick={() => refetch()}
      >Ladda om</button>
		</div>
  )
}
