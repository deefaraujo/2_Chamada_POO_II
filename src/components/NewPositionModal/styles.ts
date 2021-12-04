import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  h3 {
    color: var(--text-title);
    font-size: 1.0rem;
    margin: 2rem;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;
    &::placeholder {
      color: var(--text-body);
    }
    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    margin-top: 1.5rem;
    background: var(--green);
    border: 0;
    border-radius: 0.25rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TypeLabor = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;


`
interface IAnswer{
  isActive: boolean;
}

export const ButtonColor = styled.button<IAnswer>`
    width: 100%;
    padding: 0 1.5rem;
    height: 2rem;
    margin-top: 0.5rem;
    background: var(--green);
    background: ${(props) => props.isActive ? '#33cc95' : '#388569'};
    border: 0;
    border-radius: 1.25rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
 
`

