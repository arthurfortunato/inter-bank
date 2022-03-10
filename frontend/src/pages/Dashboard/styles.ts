import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background:${({ theme }) => theme.colors.background_gray};
`;

export const BodyContainer = styled.main`
    width: 80%;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    > div {
        flex: 1;
        & > div {
            margin-bottom: 20px;
        }
        &:nth-child(2){
            display: flex;
            justify-content: flex-end;
        }
    }

    @media(max-width: 800px) {
        transition: all 1.7s;
        width: 100%;
        margin-left: 50px;
        flex-direction: column;
        

        > div {
        &:nth-child(2){
            display: flex;
            justify-content: flex-start;
        }
    }
`;

export const InlineTitle = styled.div`
    display: flex;
    width: 100%;
`;

export const InlineContainer = styled.div`
    display: flex;
    margin-top: 20px;
    width: 100%;
    div {
        flex: 4;
        margin-right: 20px;
    }
    button {
        flex: 1;
    }
`;