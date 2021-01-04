import styled from 'styled-components';

export const AuthContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const FormContainer = styled.div`

    form {
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;
        align-items: center;
        font-size: 1.1rem;

        .input-container {
            padding: 5px;
        }
    }

`;