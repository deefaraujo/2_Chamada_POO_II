import { useState, FormEvent, useEffect } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { Container, TypeLabor, ButtonColor } from "./styles";
import api from "../../services/api";

interface NewPositionModelProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewPositionModal({
  isOpen,
  onRequestClose,
}: NewPositionModelProps) {
  const [description, setDescription] = useState("");
  const [cbo, setCBO] = useState("");
  const [salary, setSalary] = useState("");
  const [labor, setLabor] = useState("");
  const [occupation, setOccupation] = useState("");

  async function handleCreateNewEvent(event: FormEvent) {
    event.preventDefault();
    const data = {
      description,
      cbo,
      salary,
      labor,
      occupation
    };
    await api.post("/position", data);

    setDescription("");
    setCBO("");
    setSalary("");
    setLabor("");
    setOccupation("");

    alert("Registro realizado com sucesso!");
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar" />
      </button>
      <Container onSubmit={handleCreateNewEvent}>
        <h2>Novo Registro</h2>

        <input
          type='text' 
          placeholder='Descrição' 
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <input
          placeholder="CBO"
          type="text"
          value={cbo}
          onChange={(event) => setCBO(event.target.value)}
        />

        <input
          placeholder="Salário"
          type="text"
          value={salary}
          onChange={(event) => setSalary(event.target.value)}
        />

      <h3>Mão de Obra</h3>
      <TypeLabor>
          <ButtonColor type='button' onClick={() => setLabor('Direta')} isActive={labor === 'Direta'}>
            <span>Direta</span>
          </ButtonColor>
          <ButtonColor type='button' onClick={() => setLabor('Indireta')} isActive={labor === 'Indireta'}>
            <span>Indireta</span>
          </ButtonColor>
      </TypeLabor>

      <h3>Função Lider</h3>
      <TypeLabor>
          <ButtonColor type='button' onClick={() => setOccupation('Sim')} isActive={occupation === 'Sim'}>
            <span>Sim</span>
            </ButtonColor>
          <ButtonColor type='button' onClick={() => setOccupation('Não')} isActive={occupation === 'Não'}>
            <span>Não</span>
          </ButtonColor>
      </TypeLabor>
        <button type="submit">Registrar</button>
      </Container>
    </Modal>
  );
}