import { ADD_REMINDER,DELETE_REMINDER,CLEAR_REMINDERS, ADD_STUDENT } from '../constants';

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

export const addStudent = (objStudent) => {
    const action = {
        type: ADD_STUDENT,
        name: objStudent.name,
        age: objStudent.age,
        average: objStudent.average,
    }
    console.log('adding new student',action);
    return action;
}