const valueSelecter = (state = '', action) => {
    switch (action.type) {
      case 'SET_VALUE_SELECTER':
        return action.value
      default:
        return state
    }
  }
  
  export default valueSelecter