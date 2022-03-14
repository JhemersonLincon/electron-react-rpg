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
  div {
    display: flex;
    justify-content: space-between;
    gap:20px;
    font-size: 16px;
  }

  div button {
    background-color: rgb(255,190,10);
    padding: 4px 8px;
    border: none;
    cursor: pointer;
    transition: .3s;
    margin:2px;
    outline: none;
  }
  div button:hover {
    transform: scale(1.1);
  }
`;