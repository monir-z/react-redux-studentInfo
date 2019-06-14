import {
  NAME_CHANGE,
  EMAIL_CHANGE,
  ADD_ITEM,
  DELETE_ITEM,
  GET_INIT_DATA

} from './actionTypes'


const defaultState = {
  name: '',
  email: '',
  list: []
}

export default (state = defaultState, action) => {
  if (action.type === NAME_CHANGE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.name = action.value
    return newState
  } else if (action.type === EMAIL_CHANGE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.email = action.value
    return newState
  } else if (action.type === ADD_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    console.log("in reducer, the value of state.list", state.list)
    newState.list = [...state.list, [state.name, state.email]]
    newState.name = ''
    newState.email = ''
    return newState
  } else if (action.type === DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  } else if (action.type === GET_INIT_DATA) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.value
    return newState
  }


  return state
}