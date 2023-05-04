import styles from './user.module.scss'


const UserItem = (props) => {
    const { id, name, age } = props.data
    return (
        <>
            <div className={styles.user__card__item}>
                <p className={styles.user__id}>{id}</p>
                <p>{name}</p>
                <p>{age}</p>
            </div> 
        </>
    )
}

export default UserItem
