import React, { useState } from 'react';
import Switch from '@mui/material/Switch';

function ToggleAlarm(props) {

    const [isActive, setIsActive] = useState(Boolean(props.alarm.isActive));

    function handleChange(e) {
        setIsActive(e.target.checked);
    }
        
    return (
        <div>
            <Switch checked={isActive} onChange={handleChange}></Switch>
        </div>
        
    );
}

export default ToggleAlarm;