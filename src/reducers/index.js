import { combineReducers } from 'redux'
import reminders from './reminders'
import students from './students'

export default combineReducers({
    reminders,
    students
})