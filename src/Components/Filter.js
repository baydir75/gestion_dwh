import { useContext, useState } from "react"
import { UserListContext } from "./MainPage"
import ListProfil from "../Assets/ListProfil"
const Filter = (props) => {

    const {users, setUsers} = useContext(UserListContext)

    return (
        <div>
            <div>
                <select>
                    {ListProfil.map(profile => <option key={profile.id} value={profile.profileName}>{profile.profileName}</option>)}
                </select>
            </div>

            <div>
                <select>
                    
                </select>
            </div>
        </div>
    )
}

export default Filter