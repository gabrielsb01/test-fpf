import React, { useState } from 'react';

interface SidebarProps {
    isVisible: boolean;
    openModal: () => void;
    isMobile: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isVisible, openModal, isMobile, toggleSidebar }) => {
    const [activeLink, setActiveLink] = useState<number>();
    function handleOnclick() {
        toggleSidebar();
        openModal();
    }

    const handleLink = (index: number) => {
        setActiveLink(index);
    };

    return (
        <>
            <nav className={`${isMobile ? 'absolute z-50' : 'relative'} transition-width duration-300 bg-primary-dark ${isVisible ? 'w-52' : 'w-0 overflow-hidden'} min-h-[calc(100vh-60px)] text-primary-white`}>
                <ul className="list-none p-0 m-0">
                    <li className={`flex items-center w-full h-12 ${activeLink === 0 ? 'bg-gray-600' : 'hover:bg-gray-600'}`}>
                        <a href="#" className="w-full no-underline p-2 text-primary-white block hover:text-primary-light" onClick={() => handleLink(0)}>Link 1</a>
                    </li>
                    <li className={`flex items-center w-full h-12 ${activeLink === 1 ? 'bg-gray-600' : 'hover:bg-gray-600'}`}>
                        <a href="#" className="w-full no-underline p-2 text-primary-white block hover:text-primary-light" onClick={() => handleLink(1)}>Link 2</a>
                    </li>
                    <li className={`flex items-center w-full h-12 ${activeLink === 2 ? 'bg-gray-600' : 'hover:bg-gray-600'}`} onClick={() =>handleOnclick()}>
                        <a href="#" className="w-full no-underline p-2 text-primary-white block hover:text-primary-light">Cadastrar Atleta</a>
                    </li>
                </ul>
            </nav >
            {isMobile && isVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar}></div>
            )
            }
        </>
    );
};

export default Sidebar;
