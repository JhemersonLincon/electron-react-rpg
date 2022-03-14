import React from 'react'
import * as C from './styles'
import Atributtes from './atributtes/Atributtes'
import Protection from './protection/Protection'
import Stats from './stats/Stats'
import Inventary from './Inventary/Inventary'
const Ficha = () => {

  const [activeStats, setActiveStats] = React.useState(false);
  const [activeAtributes, setActiveAtribbutes] = React.useState(false);
  const [activePericias, setActivePericias] = React.useState(false);
  const [activeInventary, setActioveInvetary] = React.useState(false)
  const [activeProtection, setActioveProtection] = React.useState(false)

  return (
    <C.Container> 
        <C.NavBar>
          <C.NavBarArea>
            <C.Li>
              {activeStats && <Stats /> }
              <C.BtnOpen 
                  onClick={() => setActiveStats(!activeStats)}>
                  Status</C.BtnOpen>
            </C.Li>
            <C.Li>
              {activeAtributes && <Atributtes />}
              <C.BtnOpen
                onClick={() => setActiveAtribbutes(!activeAtributes)}>
                Atributos
              </C.BtnOpen>
            </C.Li>
            <C.Li><C.BtnOpen>Pericias</C.BtnOpen></C.Li>

            <C.Li>
              {activeProtection && <Protection/>}
              <C.BtnOpen 
                onClick={() => setActioveProtection(!activeProtection)}>
                Defesas
              </C.BtnOpen>
            </C.Li>
            <C.Li>
              {activeInventary && <Inventary/>}
              <C.BtnOpen 
                onClick={() => setActioveInvetary(!activeInventary)}>
                Inventario
                </C.BtnOpen>
              </C.Li>
          </C.NavBarArea>
        </C.NavBar>
    </C.Container>
  )
}

export default Ficha