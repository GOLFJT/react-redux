import axios from 'axios'

export const setValueSelecter = value => {
    return {
      type: 'SET_VALUE_SELECTER',
      value
    }
}

export const setValueSelecterProvince = value => {
    return {
      type: 'SET_VALUE_SELECTERProvince',
      value
    }
}

export const getUsersData = (data) => {
  console.log(data)
  return {
    type: 'GET_USERS_DATA',
    value: data 
  }
}

function fetchData() {
  return axios.get('https://jsonplaceholder.typicode.com/users')
}


export const dispatchUsersData = () => {
  return dispatch => {
    return  fetchData().then(
              response => dispatch(getUsersData(response.data))
            )
  }
}
