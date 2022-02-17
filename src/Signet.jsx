import './Signet.scss';
import SortIcon from '@mui/icons-material/Sort';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Signet(props){
    return (
        <div className="Signet">
            <div>
                <SortIcon />
            </div>
            <div className="images">
                <img src={"images-signets/" + props.identifiant + ".jpeg"} alt="" />
            </div>
            <div className="texte" style={{backgroundColor: props.couleur}}>
                <h2>{props.titre}</h2>
                <p>Modifié : {props.date}</p>
                <button onClick={()=>console.log('Ce bouton offre plus d\'actions!')}><MoreVertIcon /></button>
            </div>
        </div>
    );
}