import { connect } from 'react-redux'
import { setValueSelecter,setValueSelecterProvince,dispatchUsersData } from '../actions'
import SelecterFirstTab from '../components/SelecterFirstTab'
// import axios from 'axios'

const mapStateToProps = (state) => {
  return {
    value: state.valueSelecter,
    valueProvince:state.valueSelecterProvince,
    usersData:state.usersData
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onChange: event => {
        dispatch(setValueSelecter(event.target.value))
      },
      onChangeProvince: event => {
        dispatch(setValueSelecterProvince(event.target.value))
      },
      onClick: () => {
        // async function fetchData() {
        //   try {
        //     const users   =  await axios.get('https://jsonplaceholder.typicode.com/users')
        //     return users
        //   } catch(error) {
        //     return error.message
        //   }
        // }
        // fetchData().then(function (response) {  
        //   dispatch(getUsersData(response.data))
        // })

        // dispatch(getUsersData())
        dispatch(dispatchUsersData())
    }
  }
}

const FirstTab = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelecterFirstTab)

export default FirstTab