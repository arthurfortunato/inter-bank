import styled from 'styled-components';

export const ButtonPix = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  background: #ffc09b;
  border: none; 
  border-radius: 8px;

  transition: 0.3s;

  &:hover{
        
        filter: opacity(0.8);
    }
    &:disabled{
        filter: opacity(0.4);
    }

    div {
      display: flex;
      align-items: center;
      padding: 10px;
    }
`