import styled, { css } from 'styled-components';

interface IContainer {
    width: string;
    height: string;
    noShadow: boolean;
}

export const Container = styled.div<IContainer>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background: ${({ theme }) => theme.colors.background_white};
    //caso false 
    ${({ noShadow }) => !noShadow && css`
        box-shadow: 5px 4px 6px rgba(0,0,0,0.25);
    `}
    border-radius: 20px;
    padding: 20px;
    display:  flex;
    flex-direction: column;
    align-items: center;
    z-index: 5000;
    overflow: auto;

    ::-webkit-scrollbar {
    width: 10px;
    }

    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
    background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
`;