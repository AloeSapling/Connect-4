import { Link } from 'react-router-dom';
import ButtonMenuContainer from '../Components/ButtonMenuContainer';

function SettingsPage() {
    return (
        <>
            <ButtonMenuContainer
            buttons = {
                <>
                    <Link to="/">
                        <button>
                            Home
                        </button>
                    </Link>
                </>
            }
            display
            />
        </>
    );
}

export default SettingsPage;