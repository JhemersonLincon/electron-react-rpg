import styled from "styled-components";


export const OpenArea = styled.div`
  background-color: rgb(19,20,18);
  border: solid 1px rgb(255,190,10);
  transform: translateX(50px);
  padding: 6px;
  color: white;
  animation: Right .1s linear forwards;
  @keyframes Right {
    100% {
      transform: initial;
    }
  }
  ul {
    list-style: none;
  } 
  ul li {
    display: flex;
    justify-content:space-between ;
  }
`;