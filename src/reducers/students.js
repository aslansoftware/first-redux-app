
import { ADD_STUDENT, REMOVE_STUDENT } from '../constants';

let countStudents = 0;

const addStudent = (action) => {
  console.log("action in studnets reducers " , action);
  // es6 way doing it
  let {name,age,average} = action;
  return {
      name,
      age,
      average,
      id: countStudents++
  }
}


const students = (state = [], action) => {
  let students = null;
  switch (action.type) {
    case ADD_STUDENT:
      students = [...state, addStudent(action)];
      console.log("students DB : ", students);
      return students
    default:
      return state
  }
}

export default students;