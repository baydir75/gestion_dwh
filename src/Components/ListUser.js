import { useState, useContext } from "react";
import UserItem from "./UserItem";
import Users from '../Assets/Users'

const ListUser = () => {
    
const [users, setUsers] = useState(Users);

const deleteUsers = (id) => {
    setUsers(users.filter(user => {
        return user.id !== id
    }
    ))}

    return (
        <table>
            <thead>
                <tr>
                    <th>Utilisateur</th>
                    <th>Profils</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {users.map(user => {
               return <tr key={user.id}><UserItem username={user.username} usertype={user.usertype} userId={user.id} delete={deleteUsers}/></tr>
            })}
            </tbody>
        </table>
    )
}

export default ListUser;