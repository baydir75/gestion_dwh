const Header = (props) => {

    return (
        <header>
        <h1>Gestion des droits DWH</h1>
        <span>{props.name}</span>
        <button>Gestion des administrateurs</button>
        <button>Deconnexion</button>
    </header>
    )
}

export default Header