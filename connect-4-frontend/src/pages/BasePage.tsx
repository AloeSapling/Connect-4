import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

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
