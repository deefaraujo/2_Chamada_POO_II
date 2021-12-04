import styled from 'styled-components'

export const Container = styled.div`
  table {
    width: 100%;
    color: var(--text-title);
    font-size: 1.2rem;
    margin-left: 8%;
    margin-top: 8%;
  }

  tr {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: #b8dbbd;
    font-size: 1rem;
  }

  th{
    background: var(--green);
    font-size: 1rem;
    border-radius: 0.25rem;
    padding: 1rem 2rem;
  }

  td {
    text-align: center;
  }

  button {
    background: var(--red);
    border: 0;
    border-radius: 0.25rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;
    padding: 0.25rem;
    &:hover {
      filter: brightness(0.9);
    }
  }

`