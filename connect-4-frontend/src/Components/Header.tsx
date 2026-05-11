import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div id='websiteLogo'>
            </div>
            <nav className='flex items-center'>
                <Link to="/" className='ml-3'>
                    Home
                </Link>
                <Link to="/settings" className='ml-3'>
                    Settings
                </Link>
                <a href='#' className='ml-3'>
                    This Page
                </a>
            </nav>
        </header>
    );
    
}

export default Header;