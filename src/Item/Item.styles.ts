import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  height: 100%;
  justify-content: space-between;
  width: 100%;
  border: 1px solid lightblue;

  img {
    object-fit: cover;
    max-height: 250px;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial;
    padding: 1rem;
    height: 100%;
  }

  button {
    border-radius: 0 0 20px 20px;
  }
`;

export default Wrapper;