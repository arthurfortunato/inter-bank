import styled from 'styled-components';

export const Container = styled.div`
    width: 74px;
    height: 74px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.orange};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    color: ${({ theme }) => theme.colors.orange};
    font-weight: 300;
    font-size: 2rem;

    @media (max-width:610px) {
        display: none;
    }
`;