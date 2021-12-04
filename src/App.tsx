import { useState } from "react";
import { Dashboard }  from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewPositionModal } from "./components/NewPositionModal";
import GlobalStyle from './styles/global';

export function App() {

  const [isNewPositionModalOpen, setIsNewEventModalOpen] =
  useState(false);

  function handleOpenNewPositionModal() {
    setIsNewEventModalOpen(true);
  }

  function handleCloseNewPositionModal() {
    setIsNewEventModalOpen(false);
  }

  return (
    <div className="App">
      <Header onOpenNewPositionModal={handleOpenNewPositionModal} />
      <Dashboard />

      <NewPositionModal
        isOpen={isNewPositionModalOpen}
        onRequestClose={handleCloseNewPositionModal}
      />

    <GlobalStyle />
    </div>
  )
}




