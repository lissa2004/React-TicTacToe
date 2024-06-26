import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) => props.isWinningCell ? props.theme.colors.yellow : props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 5rem;
  border: none;
  width: 10rem;
  height: 9rem;
  border-radius: 2.5rem;
  box-shadow: 3px 6px ${(props) => props.theme.colors.cream};
  cursor: pointer;
  padding:2rem;
  padding-bottom:5rem;
  
  

  .markedItem {
      path {
        fill: ${(props) => props.theme.colors.primary};
      }
  }
  .outlineIcon {
    path {
      stroke: ${(props) => props.theme.colors.primary};
      stroke-width: 0;
    }
  }

  &:hover {
    .outlineIcon {
      path {
        stroke-width: 1;
      }
    }
  }
`;