import styled from "styled-components";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

 export const HeaderWrapper = styled.header`
   display:flex;
   justify-content: space-between;
   height:15vh;

   .logo {
    height: 3rem;
    fill: ${(props) => props.theme.colors.text};
    cursor:pointer;
  }

  padding: 10px;
`;

export const LightModeIcon = styled(MdOutlineLightMode)`
color:${(props) => props.theme.colors.text};
font-size:2rem;
cursor:pointer;
`;

export const DarkModeIcon = styled(MdOutlineDarkMode)`
color:${(props) => props.theme.colors.text};
font-size:2rem;
cursor:pointer;
`;

