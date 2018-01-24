import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../actions';

import moment from 'moment';

import StudentList from './StudentList'

class Student extends Component {

    // setting the initial state of out reminder ( text = '')
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            age: 0,
            average: 0,
        };
    }


    addNewStudent() {
        this.props.addStudent({'name': this.state.name,
                               'age' :  this.state.age,
                               'average': this.state.average});
    }

    renderStudents() {
        const { students } = this.props;
        return (
           <StudentList studentsList={students} />
        );
    }
    render() {
        return (
            <div className="student-app">
                <div className="student-app-title">
                    Student Component
                </div>
                <div className="student-app-customize">
                    <div className="form-inline">
                        <div className="form-group">
                            <input
                                onChange={event => this.setState({ name: event.target.value })}
                                className="form-control"
                                placeholder="name" />
                            <input
                                onChange={event => this.setState({ age: event.target.value })}
                                className="form-control"
                                placeholder="age" />

                            <input
                                onChange={event => this.setState({ average: event.target.value })}
                                className="form-control"
                                placeholder="average" />
                        </div>
                        <button type="button"
                         className="btn btn-success"
                          onClick={() => this.addNewStudent()}
                          > Add Student </button>
                    </div>
                </div>
                <div className="student-app-list">
                    {/* Display the list of the students */}
                    {this.renderStudents()}

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        students: state.students
    }
}

// ******************************************************************************************************** //
//
//      DO NOT FORGET TO ADD THE NEW REDUCER ACTION TO THE CONNECTOR PROPS
//
// ******************************************************************************************************** //

export default connect(mapStateToProps, {addStudent})(Student);