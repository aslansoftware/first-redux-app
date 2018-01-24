import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddReminder, DeleteReminder,ClearReminders} from '../actions';

import moment from 'moment';


class ReminderPro extends Component {

     // setting the initial state of out reminder ( text = '')
     constructor(props) {
        super(props);

        this.state = {
            text: '',
            dueDate: '',
        };
    }


     // function to add new reminder , we have AddReminder action in our props
    // so we are sending the this.state.text to the action
    // the redux will know what to do
    addReminder() {
        this.props.AddReminder(this.state.text, this.state.dueDate);
    }

    deleteReminder(id) {
        this.props.DeleteReminder(id);
    }
    // We will user renderReminders to display all the reminders
    renderReminders() {
        const { reminders } = this.props;
        return (
            <ul className="list-group col-lg-5 list-group-height">
                {
                        reminders.map(reminder => {
                            return (
                                <li key={reminder.id} className="list-group-item">
                                    <div className="list-item">
                                        <div>
                                            {reminder.text}
                                        </div>
                                        <div>
                                            <em>{moment(new Date(reminder.dueDate)).fromNow()}</em>
                                        </div>
                                    </div>
                                    <div className="list-item delete-button" onClick={() => this.deleteReminder(reminder.id)}>
                                        &#x2715;
                                        </div>
                                </li>
                            )
                        })
                    }
            </ul>
        )
    }

    render() {
        return (
            <div className="App">
                <div className="title">
                    Reminer Pro
                </div>
                <div className="form-inline reminder-form">
                    <div className="form-group">
                        <input
                            onChange={event => this.setState({ text: event.target.value })}
                            className="form-control"
                            placeholder="I have to ..." />

                        <input
                            onChange={event => this.setState({ dueDate: event.target.value })}
                            className="form-control"
                            type="datetime-local"
                        />

                    </div>

                    <button
                        type="button"
                        onClick={() => this.addReminder()}
                        className="btn btn-success btn-add-reminder">
                        Add Reminder</button>

                        <button
                        type="button"
                        onClick={() => this.props.ClearReminders()}
                        className="btn btn-danger">
                        Clear All Reminders</button>
                      
                </div>
                {this.renderReminders()}
            </div>
        )
    }


}

function mapStateToProps(state) {
    return {
        reminders: state.reminders
    }
}

// ******************************************************************************************************** //
//
//      DO NOT FORGET TO ADD THE NEW REDUCER ACTION TO THE CONNECTOR PROPS
//
// ******************************************************************************************************** //

export default connect(mapStateToProps, { AddReminder, DeleteReminder ,ClearReminders})(ReminderPro);