import logoImg from "../../assets/dee.png"
import { Container, Content } from "./styles";

// //criar props para receber a função que está no App
interface HeaderProps {
  onOpenNewPositionModal: () => void;
}

export function Header({ onOpenNewPositionModal }: HeaderProps) {
// export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="prova_2_chamada" />
        <button type="button" onClick={onOpenNewPositionModal}>
          Incluir
        </button>
      </Content>
    </Container>
  );
}
