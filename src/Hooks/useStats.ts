import React from 'react'

function controllerStates(state:number, action:string){
  switch(action){
    case'+': 
      return state + 1
    case"-":
      return state - 1
    default:
      return NaN
  }
}
const useStats = (number:number) => {

  const [state, dispatch] = React.useReducer(controllerStates, number);

  return {
    state,
    Aumentar: () => dispatch("+"),
    Diminuir: () => dispatch("-"),
  }
}

export default useStats