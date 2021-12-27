import styled from 'styled-components';

export const Container = styled.head`
    width: 100%;
    height: 90px;
    background:${({ theme }) => theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: center;
    `;

export const HeaderContainer = styled.div`
    width: 80%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 172px;
        height: 61px;
    }
    
    @media (max-width: 500px) {
        transition: all 1.7s;
        width: 100%;
        margin-left: 20px;
        margin-right: 20px;
        img {
            width: 120px;
            height: 40px;
        }
    }
`;

export const UserInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => theme.colors.background};
        font-weight: 600;
        border: 0;
        cursor: pointer;
        font-size: 15px;
    }
    span {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 600;
    }
`;