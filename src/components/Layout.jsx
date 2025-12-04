import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';

const Layout = ({ children, title = "Shri Siddheshwar Senior College" }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Helmet>
                <title>{title} | UGC Compliant</title>
            </Helmet>
            <Header />
            <main className="flex-grow bg-gray-50">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
