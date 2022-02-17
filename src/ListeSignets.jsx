import './ListeSignets.scss';
import Signet from './Signet';
import lesSignets from './data/signets.json';

export default function ListeSignets(){
    return (
        <div className="ListeSignets">
            {lesSignets.map(signet => <Signet key={signet.identifiant} identifiant={signet.identifiant} titre={signet.titre} date={signet.date} couleur={signet.couleur}  />)}
        </div>
    );
}