import React, { useEffect, useState } from 'react';
import { usePersonStore } from './store';
import { Header, PersonCard, PersonFormModal, Sidebar } from './components';
import useIsMobile from './hooks/useIsMobile';
import { FaPlus, FaRegFrown } from 'react-icons/fa';

const App: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const people = usePersonStore((state) => state.people);
  const isMobile = useIsMobile();


  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (isMobile) setSidebarVisible(false)
  }, [isMobile])

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />
      <main className="flex">
        <Sidebar isVisible={isSidebarVisible} openModal={openModal} isMobile={isMobile} toggleSidebar={toggleSidebar} />
        <div className="flex-1 m-3">
          <div className="flex justify-between">
            <button
              className="bg-primary-light text-gray-700 py-2 px-4 rounded flex items-center gap-2"
            >
              Botão Exemplo
            </button>
            <button
              className="bg-primary-light text-gray-700 py-2 px-4 rounded flex items-center gap-2"
              onClick={openModal}
            >
              Cadastrar Atleta
            </button>
          </div>
          <h1 className="p-4 my-4 bg-primary-dark text-white rounded-t-lg">Lista dos atletas cadastrados</h1>
          <div className={`${people.length === 0 ? 'flex' : 'grid'} gap-4 md:grid-cols-2 sm:grid-cols-1`}>
            {people.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full mt-10 w-full">
                <FaRegFrown className="text-6xl text-gray-700 mb-4" />
                <p className="text-lg text-gray-700 mb-4">Nenhum atleta cadastrado</p>
                <button
                  className="bg-accent-blue text-white py-2 px-4 rounded flex items-center gap-2"
                  onClick={openModal}
                >
                  <FaPlus />
                  Cadastrar Atleta
                </button>
              </div>
            ) : (
              <>
                {people.map((person, index) => (
                  <PersonCard key={index} person={person} />
                ))}
              </>
            )}
          </div>
        </div>
      </main>
      {isModalOpen && <PersonFormModal closeModal={closeModal} isMobile={isMobile} />}
    </div>
  );
};

export default App;
