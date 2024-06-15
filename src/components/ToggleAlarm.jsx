import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ToggleAlarm(props) {

    const [isActive, setIsActive] = useState(Boolean(props.alarm.isActive));

    function handleChange(e) {

        const data = {
            hours: props.alarm.hours,
            minutes: props.alarm.minutes,
            IsActive: e.target.checked
        }

        fetch('/toggleAlarm', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
          }).then((response) => {
            if (response.status !== 404) {
                setIsActive(data.IsActive);
                console.log(response.status);
                console.log(e.target.checked);
                const active_str = e.target.checked ? "ON" : "OFF";
                toast(data.hours + ":" + data.minutes + " Alarm Toggled " + active_str);
            }
    })}
        
    return (
        <div>
            <Switch checked={isActive} onChange={handleChange}></Switch>
        </div>
        
    );
}

export default ToggleAlarm;