import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

export default function All({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 pt-20">

            <Navbar />

            <main>{children}</main>

            <Footer />
            
        </div>
    );
}