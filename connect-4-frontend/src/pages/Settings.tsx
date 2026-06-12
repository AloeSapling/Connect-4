import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { langContext } from '@/lib/contexts';

function Settings() {
    const langCtx = useContext(langContext);
    const texts = langCtx?.texts.header;

    return (
        <Link to="/">
            <button>{texts?.home}</button>
        </Link>
    );
}

export default Settings;
