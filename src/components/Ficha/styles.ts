import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  align-items: flex-end;
  justify-content: end;
`;

export const NavBar = styled.nav`
`;
export const NavBarArea = styled.ul`
  list-style: none;
`
export const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: end;
`;

export const BtnOpen = styled.button`
  height: 90px;
  margin-bottom: 20px;
  width: 90px;
  cursor: pointer;
  font-size: 12px;
  color: rgb(255,190,10);
  font-weight: bold;
  padding: 4px;
  border-radius: 50%;
  transition: .3s;
  border:solid 1px rgb(5,10,10);
  outline: none;
  background: rgb(19,20,18);

  &:hover,
  &:focus {
    background-color: black;
    color: rgb(255,25,10);
    border-color: rgb(255,25,10);
  }
`;