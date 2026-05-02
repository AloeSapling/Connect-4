import { Outlet } from 'react-router-dom';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

function BasePage() {
    return (
        <>
            <Header />

            {/* Renders content of pages on child routes */}
            <Outlet />

            <Footer />
        </>
    );
}

export default BasePage;