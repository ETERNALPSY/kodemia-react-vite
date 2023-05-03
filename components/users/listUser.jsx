import UserItem from "./user"

const ListUser = ( props ) => {
    const users = props.users

    return ( 
        <>
            <h4>USERS</h4>
            <div className="list__users">
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