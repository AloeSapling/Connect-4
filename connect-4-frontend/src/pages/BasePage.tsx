import { Outlet } from 'react-router-dom';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Menu from '../Components/Menu';

function BasePage() {
    return (
        <>
            <Header />

            <Menu>
                {/* Renders content of pages on child routes */}
                <Outlet />
            </Menu>

            <Footer />
        </>
    );
}

export default BasePage;