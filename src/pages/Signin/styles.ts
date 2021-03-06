import styled from 'styled-components';
import SignInBackground from '../../assets/login.png';
import { shade } from 'polished';


export const Container  = styled.div`
        height: 100vh;

        display: flex;
        align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;

    width: 100%;
    max-width: 700px;
    
    form {
        margin: 80px;
        width: 340px;
        text-align: center;
    
        h1 {
            margin-bottom: 24px;
            color: rgba(255, 144, 0, 1);
        }
    
         a {
            color: rgba(255, 144, 0, 1);
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;
            
            &:hover {
                color: ${shade(0.1, 'rgba(255, 144, 0, 1)')}
            }
            
        }

    }

    > a {
        color: #ff9000;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;

        display: flex;
        align-items: center;

        svg {
            margin-right: 16px;
        }

        &:hover {
            color: ${shade(0.1, 'rgba(255, 144, 0, 1)')}
        }
    }   
    
`;

export const Background = styled.div`
     flex: 1;
     background: url(${SignInBackground}) no-repeat center;
     background-size: cover;

     `;