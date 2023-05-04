import UserItem from "./user"
import styles from './listUser.module.scss'

const ListUser = ( props ) => {
    const users = props.users

    return ( 
        <>
            <h4 className={styles.users}>USERS</h4>
            <div className={styles.list__users}>
                {
                    users.map((user) => {
                        return (
                            < UserItem data={user} key={user.id} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default ListUser