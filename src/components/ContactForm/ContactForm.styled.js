import styled from "styled-components";
import Box from '@mui/material/Box';

export const Buttons = styled.div`
display: flex;
gap: 15px;
margin-top: 10px;
`;

export default styled(Box)`
background-color: whitesmoke;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px;
border: 1px solid gray;
border-radius: 5px;
/* box-shadow: 1px 2px 9px 0px rgba(0,0,0,0.7); */
`;


export const Button = styled.button`
cursor: pointer;
font-size: 24px;
min-width: 400px;
padding: 10px 30px;
border-radius: 3px;
border: 1px solid grey;
background-color: rgba(197, 182, 235, 0.8);
:hover{
    background-color: green;
    color: white;
    transition: background-color color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
`