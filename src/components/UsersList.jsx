import UserCard from "./UserCard"

const UsersList = ({ users, updateList }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {users.map(elm => (
                <div key={elm._id}>
                    <UserCard {...elm} updateList={updateList} />
                </div>
            ))}
        </div>
    )
}

export default UsersList
