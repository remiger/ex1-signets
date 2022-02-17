import './Header.scss';
import Avatar from '@mui/material/Avatar';

export default function Header(){
    return (
        <header className="Header">
            <div>Signets</div>
            <div>
                <p>Nicolas Cage</p>
                <Avatar
                    alt="Nicolas Cage"
                    src="images-avatars/nicolascage.jpeg"
                    sx={{ width: 40, height: 40 }}
                />
            </div>
            
            
        </header>
    );
}