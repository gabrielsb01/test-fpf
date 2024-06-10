import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

interface HeaderProps {
    toggleSidebar: () => void;
    isSidebarVisible: boolean;
}

const handleCompanyPicture = 'https://via.placeholder.com/40';

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarVisible }) => {
    return (
        <header className="flex bg-primary-dark shadow-md text-white p-3 h-15 items-center">
            <button onClick={toggleSidebar} className="mr-4">
                {isSidebarVisible ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
            <div className="flex items-center gap-2">
                <img src={handleCompanyPicture} alt="Logo" className="w-10" />
                <h4 className="text-sm text-center max-w-xs">Nome da Empresa</h4>
            </div>
            <div className="ml-auto">
                <img src="https://as2.ftcdn.net/v2/jpg/04/92/10/53/1000_F_492105322_ipyji3NMgNKtu19bTxSeIco4aYkJCX0z.jpg" alt="User" className="w-10 h-10 rounded-full object-cover" />
            </div>
        </header>
    );
};

export default Header;
