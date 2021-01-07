import styled from 'styled-components';

export const NavContainer = styled.div`
    background: #2e2e2e;
    display: flex;
    justify-content: center;
    nav {
        width: 75%;
        padding: 1rem;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        ul {
            width: 50%;
            display: flex;
            justify-content: space-evenly;
            li {
                padding: 0px 5px;
                /* transition: all 500ms ease-out;

                &:hover{
                    box-shadow: 5px 10px 30px rgba(255,215,0,1);
                } */
            }
        }
    }
`;