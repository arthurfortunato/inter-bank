import styled from 'styled-components'

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CardContainer = styled.div`
    width: 403px;
    @media (max-width: 500px) {
        transition: all 1.7s;
        width: 370px;
    }
    @media (max-width: 410px) {
        width: 340px;
    }
`; 

export const BackgroundImage = styled.div<{ image: any }>`
    position:absolute;
    width: 100%;
    top:0;
    left: 0;
    height: 50vh;
    background-image: url(${({ image }) => image});
    background-size: cover;
    z-index: -1;
`;

export const InputContainer = styled.div`
    margin-top: 4.18rem;
    width: 90%;
    flex: 1;
`;

export const ButtonContainer = styled.div`
    margin-top: 1.25rem;
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    p{
        font-size: 0.75rem;
        font-weight: 400;
        color:${({ theme }) => theme.colors.secondary};
        a {
            font-size: 1.1rem;
            font-weight: 700;
            color:${({ theme }) => theme.colors.primary};
        }
    }
`;