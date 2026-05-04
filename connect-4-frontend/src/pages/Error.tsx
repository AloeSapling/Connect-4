import { Link } from 'react-router-dom';

function Error() {
    return (
        <>
            <div>
                Error 404: Page Not Found
            </div>
            <Link to="/">
                <button>
                    Home
                </button>
            </Link>
        </>
    );
}

export default Error;