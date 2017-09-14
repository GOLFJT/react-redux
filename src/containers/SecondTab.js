import { connect } from 'react-redux'
import { setValueSelecter,setValueSelecterProvince } from '../actions'
import SelecterSecondTab from '../components/SelecterSecondTab'

const mapStateToProps = (state) => {
  return {
    value: state.valueSelecter,
    valueProvince:state.valueSelecterProvince
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: event => {
      dispatch(setValueSelecter(event.target.value))
    },
    onChangeProvince: event => {
      dispatch(setValueSelecterProvince(event.target.value))
    }
  }
}

const SecondTab = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelecterSecondTab)

export default SecondTab