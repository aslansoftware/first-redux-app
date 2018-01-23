import { ADD_REMINDER, DELETE_REMINDER,CLEAR_REMINDERS} from '../constants';

import { bake_cookie,read_cookie } from 'sfcookies';

let countReminders = 0;

const reminder = (action) => {
    // One way doing this one
    // return {
    //     text: action.text,
    //     dueDate: action.dueDate,
    //     id: countReminders++
    // }

    // es6 way doing it
    let {text,dueDate} = action;
    return {
        text,
        dueDate,
        id: countReminders++
    }
}

const removeById = (state = [], id) => {
    const reminders = state.filter(reminder => reminder.id != id);
    return reminders;
}

const reminders = (state = [], action) => {
    let reminders = null;

    // we want to read the data from the cookies if we have stored ones before
    var tempReminders = read_cookie('reminders');
    if(!tempReminders) tempReminders = [];
        state = tempReminders;

    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            bake_cookie('reminders',reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = removeById(state,action.id);
             // save the new reminders after deleting one
            bake_cookie('reminders',reminders);
            return reminders;
        case CLEAR_REMINDERS: 
            reminders = [];
            // save the new reminders after deleting one
            bake_cookie('reminders',reminders);

            return reminders;
        default:
            return state;
    }
}

export default reminders;