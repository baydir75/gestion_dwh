const Delete = (props) => {
    return (
        <>
            <button onClick={() => props.delete(props.id)}>Delete</button>
        </>
    )
}

export default Delete