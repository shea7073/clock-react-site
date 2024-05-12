import React from 'react';
import Switch from '@mui/material/Switch';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import './AlarmDisplay.css'
import DeleteAlarm from './DeleteAlarm';

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
                <td><Switch checked={Boolean(alarm.isActive)}></Switch></td>
                <td><DeleteAlarm deleteUI={updateAlarmList} minutes={alarm.minutes} hours={alarm.hours}/></td>

            </tr> 
        ))}
        </tbody>
                    
        </table>

    </div>

    </div>;

}

export default AlarmDisplay;
