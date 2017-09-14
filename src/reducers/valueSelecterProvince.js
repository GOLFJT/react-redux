const valueSelecterProvince = (state = '', action) => {
    switch (action.type) {
      case 'SET_VALUE_SELECTERProvince' :
        return action.value
      default:
        return state
    }
  }
  
export default valueSelecterProvince