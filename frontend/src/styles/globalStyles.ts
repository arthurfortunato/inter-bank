import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-family: 'Roboto', sans-serif;
}
body{
    background:${({ theme }) => theme.colors.background_white} ;
    -webkit-font-smoothing: antialiased;
}
body, input, textarea, button { 
        font-family: 'Roboto', sans-serif;
    }
html {
        @media (max-width: 1080px){
            font-size: 93.75%; 
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }
    
h1,h2,h3,h4,h5,h6,strong {
        font-weight: 500;
}
button {
        cursor: pointer;
    }
textarea:focus, input:focus, select:focus{
    outline: none;
}
a {
    text-decoration: none;
    
}
.wallet{
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.orange};
    font-weight: 700;
}
.h2{
    font-weight: 600;
}
.orange-color{
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.orange};
    font-weight: 600;
    padding-top: 5px;
    line-height: 1.25;
}
`

export { GlobalStyle }