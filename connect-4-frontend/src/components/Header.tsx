import { Link } from 'react-router-dom';
import LangSwitch from './LangSwitch';

function Header() {
    return (
        <header className='flex items-center justify-between bg-olive-600 text-white h-10 mb-5 px-5 text-lg'>
            <a href='#' className='flex items-center font-bold'>
            </a>
            <nav className='flex items-center'>
                <LangSwitch />
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
