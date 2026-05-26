import { Link } from 'react-router-dom';
import { langContext } from '@/lib/contexts';
import { useContext } from 'react';

function Home() {

    const langCtx = useContext(langContext);
    
    if (!langCtx) return <p>Missing language context!</p>;
    
    const texts = langCtx.texts.home;

    return (
        <>
            <Link to="/username">
                <button>{texts.play}</button>
            </Link>

            <Link to="/settings">
                <button>Settings</button>
            </Link>

            <Link to="/game">
                <button>Game</button>
            </Link>

            <Link to="/sigma">
                <button>Invalid Path</button>
            </Link>
        </>
    );
}

export default Home;
