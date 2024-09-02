import "./styles.scss";

export default function Card(Props){

    return(
        <div className="card">
            <div className="conteudo">

                <div className="cores" style={{background: Props.cores || '0000'}}>
                    &nbsp;
                </div>

                <div className="titulo">
                    {Props.titulo}
                </div>

                <div className="subtitulo">
                    {Props.subtitulo}
                </div>
            </div>
        </div>
    )
}