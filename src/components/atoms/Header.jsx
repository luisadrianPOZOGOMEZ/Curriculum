import Logo from '../../assets/imgs/Pozo.jpg'
import '../../assets/styles/header.css'
import '../../assets/styles/TittleName.css'

function Header() {
    return ( 
        <header>
            <img src={Logo} alt="Logo de la empresa"/>
            <div className="Tittle_Name">
                <h1>Luis Adrián Pozo Gómez</h1>
                <h2>Estudiante de Ingenieria en Desarrollo de Software</h2>
            </div>
        </header>
     );
}

export default Header;