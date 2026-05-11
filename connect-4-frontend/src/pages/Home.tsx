import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <Link to="/username">
                <button>Play</button>
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
