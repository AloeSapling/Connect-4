import { Link } from 'react-router-dom';
import { langContext } from '@/lib/contexts';
import { useContext } from 'react';
import LangSwitch from './LangSwitch';

function Header() {
    const langCtx = useContext(langContext)!;
    
    if (!langCtx) return <p>Missing language context!</p>;
    
    const texts = langCtx.texts.header;

    return (
        <header className='flex items-center justify-between bg-olive-600 text-white h-10 mb-5 px-5 text-lg'>
            <a href='#' className='flex items-center font-bold'>
            </a>
            <nav className='flex items-center'>
                <Link to="/" className='ml-3'>
                    {texts.home}
                </Link>
                <Link to="/settings" className='ml-3'>
                    {texts.settings}
                </Link>
                <a href='#' className='ml-3 mr-3'>
                    {texts.thisPage}
                </a>
                <LangSwitch />
            </nav>
        </header>
    );

}

export default Header;
