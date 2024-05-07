import { useEffect, useState } from 'react'
import './App.css'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import dayjs from 'dayjs';


function App() {

  const [alarmTime , setAlarmTime] = useState(dayjs('2022-04-17T07:45'));
  const [alarmList, setAlarmList] = useState([]);


  useEffect(() => {

    fetch('/getAlarms', {
      method: 'GET',
      headers: {"Content-Type": "application/json"},
    }).then((response) => {
      return response.json();
    }).then((data => {
      setAlarmList(data);
      console.log(data);
    }));

  }, []);
  


  function handleSubmitAlarm(e)  {
    e.preventDefault();
    const time = {
      hours: alarmTime.hour(),
      minutes: alarmTime.minute()
    }
    fetch('/setAlarm', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(time)
    }).then(console.log(JSON.stringify(time)));
     
  }

  return (

    <div className='cont'>
    

    <h1 className='title'>Smart Rise</h1>
    <h4>v1.0</h4>
    <form onSubmit={handleSubmitAlarm}>

      <div>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
    
          <MobileTimePicker label="Set Alarm Time" onChange={setAlarmTime} value={dayjs('2022-04-17T07:45')}/>
  
        </LocalizationProvider>
      
    </div>

    <button className='button' type='submit'>Set Alarm</button>

    </form>

    <div>
    <h1>Data</h1>
    <ul>
      {alarmList.map(alarm => (
        <li key={alarm.hours + alarm.minutes}>{alarm.hours} : {alarm.minutes}</li> 
      ))}
    </ul>
  </div>



    </div>
    
    
);
}
    


export default App
