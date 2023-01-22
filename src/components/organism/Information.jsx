import Caption from "../atoms/Caption";
import '../../assets/styles/Container-Info.css'
import '../../assets/styles/InfoPersonal.css'
import '../../assets/styles/FirstImagen.css'
import '../../assets/styles/AboutMe.css'
import '../../assets/styles/Skills.css'
import Imagen1 from '../../assets/imgs/imagen-1.png'
import Imagen2 from '../../assets/imgs/imagen-2.png'


function Information() {
    return ( 
        <>
        <div className="Container-Info">
            <div className="Info--Personal">
                <div className="about--me">
                    <Caption msn="ACERCA DE MI"/>
                    <div className="Image-1"> 
                        <p>Soy estudiante de Ingenieria en Desarrollo de Software,<br/> 
                            actualmente cuento con muchas habilidades dentro de<br/> 
                            campos relacionados a la programacion y a las<br/> 
                            Herramientas CASE.<br/>
                            <ul>
                                <li>Herramientas CASE.</li>
                                <li>Requerimientos.</li>
                                <li>Programación WEB.</li>
                                <li>Programación Orientada a Objetos.</li>
                                <li>Base de datos.</li>
                            </ul>
                        </p>
                        <img className="Image-1" src={Imagen1} alt="CANVA DE FIGMA"/> 
                    </div>
                </div>
                <div className="programming--skills">
                    <div className="Skills">
                        <Caption msn="HABILIDADES EN PROGRAMACION"/>
                    </div>
                    <div>
                        <img src={Imagen2} alt="CANVA DE FIGMA" />
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Information;