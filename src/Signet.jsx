import './Signet.scss';

export default function Signet(props){
    return (
        <div className="Signet">
            <div>
                <img src={"images-signets/" + props.identifiant + ".jpeg"} alt="" />
            </div>
            <div>
                <h2>{props.titre}</h2>
                <p>Modifié : {props.date}</p>
            </div>
        </div>
    );
}