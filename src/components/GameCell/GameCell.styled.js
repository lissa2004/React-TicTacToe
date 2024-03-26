import styled from "styled-components";

export const CellStyle = styled.button`
 background-color:${(props) => props.theme.colors.secondary};
 color: ${(props) => props.theme.colors.primary};
 border:none;
 font-size:3rem;
 width:9rem;
 height:9rem;
 border-radius:2.5rem;
 box-shadow: 5px 10px ${(props) => props.theme.colors.cream}
 cursor:pointer;
 padding: 3rem;

 .markedItem {
    path{
      fill: ${(props) => props.theme.colors.primary}; 
    }
 }

 .outlineIcon{
    path{
        stroke: ${(props) => props.theme.colors.primary};
        stroke-width: 0;
    }
 }
 &:hover{
    .outlineIcon{
        path{
        stroke-width: 2;
        }
    }
 }
 `;