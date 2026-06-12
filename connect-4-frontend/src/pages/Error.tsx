import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { langContext } from '@/lib/contexts';

function Error() {
    const langCtx = useContext(langContext);
    const texts = langCtx?.texts.error;

    return (
        <>
            <div>{texts?.notFound}</div>
            <Link to="/">
                <button>{texts?.home}</button>
            </Link>
        </>
    );
}

export default Error;
