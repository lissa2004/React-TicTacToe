import styled from "styled-components";

export const Title = styled.h1`
   color:${(props) => props.theme.colors.primary};
   font-size: 3rem;
   background-color: transparent;
   font-family: "Pacifico", cursive;
`;

export const Subtitle = styled.h1`

   color: ${(props) => props.theme.colors.primary};
   font-size: 1.5rem;
   font-family: 'poppias', sans-serif
   font-weight: 200;
   background-color: transparent;
   padding:10px
`;

export const ModalHeader = styled.div`
   display:flex;
   justify-content:center;
`;