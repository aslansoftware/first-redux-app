import { ADD_REMINDER,DELETE_REMINDER,CLEAR_REMINDERS } from '../constants';

export const AddReminder = (text,dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text, // short hand in es6 , text: text
        dueDate
    }
    console.log('action in addRemidner', action);
    return action;
}

export const DeleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    }
    console.log('deleting an reminder',action);
    return action;
}

export const ClearReminders = () => {
    const action = {
        type: CLEAR_REMINDERS,
    }

    return action;
}
