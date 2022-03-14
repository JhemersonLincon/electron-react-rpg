import React from 'react'
import useStats from '../../../Hooks/useStats';
import * as C from './styles'
const Stats = () => {

  const Life = useStats(17);
  const San = useStats(12);
  const Pe = useStats(5);
  return (
    <C.OpenArea>
    <div>
      <button onClick={Life.Diminuir}>-</button>
      Vida: {String(Life.state).padStart(2,'0')}
      <button onClick={Life.Aumentar}>+</button>
    </div>
    <div>
      <button onClick={San.Diminuir}>-</button>
      Sanidade: {String(San.state).padStart(2,'0')}
      <button onClick={San.Aumentar}>+</button>
    </div>
    <div>
      <button onClick={Pe.Diminuir}>-</button>
      PE: {String(Pe.state).padStart(2,'0')}
      <button onClick={Pe.Aumentar}>+</button>
    </div>

  </C.OpenArea>
  )
}

export default Stats