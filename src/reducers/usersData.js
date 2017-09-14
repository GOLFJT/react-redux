
const usersData = (state = [], action) => {

    switch (action.type) {
      case 'GET_USERS_DATA': 
        return action.value
      default:
        return state
    }

}

  
  export default usersData