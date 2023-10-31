import styles from "./UserList.module.css";
import { useGetUsersQuery,
          useDeleteUserMutation } from "../../store/api/usersApi";

export const UserList = () => {
  const { data, refetch } = useGetUsersQuery();
  const [ deleteUser ] = useDeleteUserMutation();
  var nr = 0;
  //console.log(data);

  return (
    <div className={styles.container}>
      <p>User list!</p>
      <ul className={styles.ul}>
        { !data ? <li>'loading'</li> : data.map((user) => { nr++;
            return <li key={user.id}>
                    {nr}: {user.firstName} {user.lastName }
                    <button
                      className={styles.deleteButton}
                      onClick={() => deleteUser(user.id)}
                    >radera</button>
                  </li>
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
