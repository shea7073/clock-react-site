import React from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import './DeleteAlarm.css';

function DeleteAlarm(props) {


    function handleDeleteAlarm(e) {
        e.preventDefault();
    const time = {
      hours: props.hours,
      minutes: props.minutes
    }
    fetch('/deleteAlarm', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(time)
    })
      .then((response) => {
        props.delete-ui();
        console.log(response.status)
        
      });
     
    }


    return (
        <div onClick={handleDeleteAlarm} className='delete-cont'>
        <DeleteOutlinedIcon className='delete-icon'></DeleteOutlinedIcon>
        </div>
    );
        
   
   
    
   


}


export default DeleteAlarm;