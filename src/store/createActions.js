import {
  NAME_CHANGE,
  EMAIL_CHANGE,
  ADD_ITEM,
  DELETE_ITEM,
  GET_INIT_DATA,
  GET_INIT_LIST
} from '../store/actionTypes'

const getNameChangeAction = (value) => ({
  type: NAME_CHANGE,
  value
})

const getEmailChangeAction = (value) => ({
  type: EMAIL_CHANGE,
  value
})

const getAddItemAction = () => ({
  type: ADD_ITEM
})

const getDeleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

const getInitDataAction = (value) => ({
  type: GET_INIT_DATA,
  value
})

const getInitListAction = () => ({
  type: GET_INIT_LIST
})

export {
  getNameChangeAction,
  getEmailChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getInitDataAction,
  getInitListAction
}