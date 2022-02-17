import './Appli.scss';
import Header from './Header';
import ListeSignets from './ListeSignets';
import FloatingActionButton from './FloatingActionButton';

export default function Appli() {
  return (
    <div className="Appli">
        <Header />
        <ListeSignets />
        <FloatingActionButton />
    </div>
  );
}
