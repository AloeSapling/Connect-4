import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div id='websiteLogo'>
                ZSEL KidZ
            </div>
            <nav>
                <Link to="/">
                    Home
                </Link>
                <a href='#'>cooler</a>
                <a href='#'>coolest</a>
            </nav>
        </header>
    );
    
}

export default Header;