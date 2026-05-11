import { Link } from 'react-router-dom';
import ButtonMenuContainer from '../Components/ButtonMenuContainer';

function Error() {
    return (
        <>
            <div>
                Error 404: Page Not Found
            </div>
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

export default Error;