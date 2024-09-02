import "./styles.scss";
import{ Link } from "react-router-dom";

export default function Cabecalho(){

    return(
        <div className="cabecalho">
            <div className="logo">
                <img url="./logo.png" />
                <h3>React FreiS</h3>
            </div>

            <div className="link">
                <Link className="ponto" to= "/">Inicio</Link>
                <Link className="ponto" to= "/sobre">Sobre</Link>
            </div>
        </div>
    )
}