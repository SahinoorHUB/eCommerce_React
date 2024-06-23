// File: ../components/AppFooter.js
import React from 'react'; 
import './appFooter.css'; // Import your CSS for styling

const AppFooter = () => {
    return (
        <footer className="app-footer bg-dark text-white">
            <div className="text-center">
                <p className="mb-0">© 2024 E-Cart. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default AppFooter;