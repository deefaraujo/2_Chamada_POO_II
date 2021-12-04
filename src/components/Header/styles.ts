import styled from "styled-components";

export const Container = styled.header`
  background: #303133;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 200px;
    height: 200px;
  }

  button {
    font-size: 1.25rem;
    color: #fff;
    background: var(--green);
    border: 0;
    padding: 0 4rem;
    border-radius: 1.00rem;
    height: 3rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
