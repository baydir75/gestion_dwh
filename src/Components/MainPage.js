import ListUser from "./ListUser";
import Header from "./Header";
import { useState, createContext } from "react";
import Filter from "./Filter";
import Users from "../Assets/Users";

export const UserListContext = createContext()

const MainPage = () => {

    const filterByProfile = (profil) => {
        setUsers(users.filter(user => user.usertype === profil))
    }

    const [users, setUsers] = useState(Users)
    const [name, setName] = useState("Baydir Aboudou")
    return (
        <>
            <UserListContext.Provider value={{users, setUsers}}>
                <Header name={name}></Header>
                <ListUser></ListUser>
                <Filter filterProfile={filterByProfile} users={users}></Filter>
            </UserListContext.Provider>
        </>
    )
}

export default MainPage;