import React, { Component } from 'react';

class StudentList extends Component {

    constructor(props) {
        super(props);
        console.log("Student List Props: ", props);
    }


    render() {
        return (
            <div>
                 <ul className="list-group col-lg-5 student-app-ul">
                {
                        this.props.studentsList.map(student => {
                            return (
                                <li key={student.id} className="list-group-item student-list-group-item">
                                    <div className="list-item">
                                        <div>
                                            {student.name} Age: {student.age}
                                        </div>
                                        <div>
                                            {student.average}
                                                </div>
                                    </div>
                                    <div className="list-item delete-button">
                                        &#x2715;
                                        </div>
                                </li>
                            )
                        })
                    }
            </ul>
            </div>
        )
    }
}


// ******************************************************************************************************** //
//
//      DO NOT FORGET TO ADD THE NEW REDUCER ACTION TO THE CONNECTOR PROPS
//
// ******************************************************************************************************** //

export default (StudentList);