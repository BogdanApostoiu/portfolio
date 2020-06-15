import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const Text = styled.div`
  text-align: center;
  p {
    margin-bottom: 20px;
  }
`;

export default Wrapper;
