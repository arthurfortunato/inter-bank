import styled from 'styled-components';

export const ButtonContainer = styled.button`
    width: 100%;
    height: 46px;
    color:${({ theme }) => theme.colors.background_white} ;
    background:${({ theme }) => theme.colors.orange} ;
    border: 1px solid ${({ theme }) => theme.colors.orange};
    border-radius: 10px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5000;
    transition: 0.4s;
    
    &:hover{
        filter: opacity(0.8);
    }
    &:disabled{
        filter: opacity(0.4);
    }
`;