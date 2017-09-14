import { combineReducers } from 'redux'
import valueSelecter from './valueSelecter'
import valueSelecterProvince from './valueSelecterProvince'
import usersData from './usersData';

const rootReducers = combineReducers({
  valueSelecter,
  valueSelecterProvince,
  usersData
})

export default rootReducers