import Delete from "./Delete";

const UserItem = (props) => {

    return (
        <>
            <th>{props.username}</th><th>{props.usertype}</th><th><Delete id={props.userId} delete={props.delete}/></th>
        </>
    )
}

export default UserItem;