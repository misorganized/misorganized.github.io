import styled from 'styled-components';

export const Box = styled.div`
  background: var(--gruvbox-fg);
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 2px;
  text-align: center;
  padding: 2px;
  width: auto;
  height: auto;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;