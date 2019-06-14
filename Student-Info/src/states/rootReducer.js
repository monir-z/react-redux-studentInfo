const Initial = {
    items: []
  };
const rootReducer = (state = Initial, action) => {
    if(action.type === 'ADD') {
        return { ...state, items: [...state.items, action.payload.value] };
    }
    else if(action.type === 'EDIT') {
        return Initial
    }
    else if(action.type === 'DELETE') {
        return Initial
    }
    else return state;
}
export default rootReducer