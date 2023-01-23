import Caption from "../atoms/Caption";
import SubTittle from "../atoms/SubTittle";
import Paragraph from "../atoms/Paragraph"; 
import LineBreak from "../atoms/LineBreak";
import Contact from "../atoms/Contact";
import '../../assets/styles/Container-Info.css'
import '../../assets/styles/InfoPersonal.css'
import '../../assets/styles/FirstImagen.css'
import '../../assets/styles/SecondImagen.css'
import '../../assets/styles/AboutMe.css'
import '../../assets/styles/Skills.css'
import '../../assets/styles/ListSkill.css'
import '../../assets/styles/SubTittle.css'
import '../../assets/styles/EndSheet.css'
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
                        <div className="subtittle">
                            <Caption msn="HABILIDADES EN PROGRAMACION"/>
                        </div>
                        <div className="image-2">
                                <img src={Imagen2} alt="CANVA DE FIGMA" />
                            <ul className="List-skills">
                                <li>JAVA</li>
                                <li>JAVA SCRIPT</li>
                                <li>C++</li>
                                <li>C</li>
                                <li>CSS</li>
                                <li>HTML</li>
                                <li>NODE JS</li>
                                <li>MYSQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="project--experience">
                    <SubTittle sub="FAST TRACKING"/>
                    <Paragraph pg="Proyecto dedicado a seguimiento de pacientes en una clinica. En este Proyecto se utilizaron:"/>
                    <Paragraph pg="Herramientas CASE."/>
                    <Paragraph pg="Programacion Orientada a Objetos"/>
                    <SubTittle sub="MY MOOD"/>
                    <Paragraph pg="Proyecto para ayudar a las personas con sus emociones. En este proyecto se utilizaron:"/>
                    <Paragraph pg="Herramientas CASE."/>
                    <Paragraph pg="Programación WEB."/>
                    <Paragraph pg="Base de Datos."/>
                    <Paragraph pg="Despliegue en un Host"/>
                    <SubTittle sub="THE EASY FINANCY"/>
                    <Paragraph pg="Proyecto que ayuda a empresas a organizar mejor sus finanzas. En este proyecto se utilizaron:"/>
                    <Paragraph pg="VITE + REACT."/>
                    <Paragraph pg="Programación WEB."/>
                    <Paragraph pg="DISEÑO UX/UI."/>
                </div>
                <LineBreak/>
                <div className="end--of--sheet">
                    <Contact cont="Universidad Politecnica de Chiapas"/>
                    <Contact cont="luispozoengineer@gmail.com"/>
                    <Contact cont="29160, Chiapa de Corzo Chiapas."/>
                    <Contact cont="961 693 7892"/>
                </div>
            </div>
        </div>
        </>
     );
}

export default Information;