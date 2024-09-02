import "./styles.scss";
import Cabecalho from "../../components/cabecalho";
import { Link } from "react-router-dom";
import Card from "../../components/card";


export default function Inicio() {
    return(
        <div className="inicio">
            <Cabecalho/>

            <div className="tituloPrimeiro">
                <h3>Escolha um treino...</h3>
            </div>

            <div className="treinos">
                <div className="texto">
                    <Link to={"/Exercicio-1"}>
                    <Card  cores = 'laranja' titulo="Cupom de desconto" subtitulo="Exercicio 01"/>
                    </Link>
                </div>


            </div>


        </div>


        
    )
}
