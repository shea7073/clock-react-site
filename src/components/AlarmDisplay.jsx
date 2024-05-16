import React from 'react';
import './AlarmDisplay.css'
import DeleteAlarm from './DeleteAlarm';
import ToggleAlarm from './ToggleAlarm'


function AlarmDisplay(props) {
    
    function updateAlarmList(hours, minutes){
        props.updateAlarm(hours, minutes);

    }

    return <div>

    <h2>My Alarms</h2>

    <div className='alarms-display'>

        <table>
            <thead>
            <tr>
                <th>Time</th>
                <th>On/Off</th>
                <th>Delete</th>
            </tr>
            </thead>
            
        <tbody>
            {props.alarmList.map(alarm => (
            <tr key={alarm.hours + alarm.minutes}>
                <td>{alarm.hours} : {alarm.minutes} </td>
                <td><ToggleAlarm alarm={alarm}/></td>
                <td><DeleteAlarm deleteUI={updateAlarmList} minutes={alarm.minutes} hours={alarm.hours}/></td>

            </tr> 
        ))}
        </tbody>
                    
        </table>

    </div>

    </div>;

}

export default AlarmDisplay;
