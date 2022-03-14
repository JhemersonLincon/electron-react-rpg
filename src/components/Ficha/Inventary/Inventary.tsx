import React from 'react';
import * as C from './styles';
import {dataInventary} from '../../../data/invetary';
import { InventaryItems } from '../../../Types/invetaryTypes';
const Inventary = () => {

  const [items, setItems] = React.useState<InventaryItems[]>(dataInventary)
  return (
    <C.OpenArea>
      <table>
        <tr>
          <th>Item</th>
          <th>Description</th>
          <th>Space</th>
          <th>Pestrigio</th>
        </tr>
      {items.map(item => (
        <tr>
          <th>{item.item}</th>
          <th>{item.description}</th>
          <th>{item.space}</th>
          <th>{item.prestigio}</th>
        </tr>
      ))}
      </table>
      <div>
        Adicionar
      </div>
    </C.OpenArea>
  )
}

export default Inventary