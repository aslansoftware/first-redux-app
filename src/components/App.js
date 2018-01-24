import React, { Component } from 'react';

import ReminderPro from './ReminderPro';
import Student from './Student';

class App extends Component {
    render() {
        return (
            <div>
                {/* <ReminderPro /> */}
                <Student/>
            </div>
        )
    }
}


// ******************************************************************************************************** //
//
//      DO NOT FORGET TO ADD THE NEW REDUCER ACTION TO THE CONNECTOR PROPS
//
// ******************************************************************************************************** //

export default App;