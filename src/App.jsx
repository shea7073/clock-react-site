import { useEffect, useState } from 'react'
import './App.css'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import dayjs from 'dayjs';
import AlarmDisplay from './components/AlarmDisplay';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    }));

  }, []);

  function updateAlarmState(hours, minutes) {
    const newAlarmList = alarmList.filter(alarm => !(alarm.hours == hours && alarm.minutes == minutes));
    console.log(newAlarmList);
    setAlarmList(newAlarmList);
  }
  


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
    })
      .then((response) => {
        if (response.status !== 404) {
          console.log(response.status);
          time.isActive = 1;
          setAlarmList([...alarmList, time]);
          toast("Alarm Set!")
        }
        else {
          toast("Could not set alarm!");
        }
        
      });
     
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

    <button className='submit-btn' type='submit'>Set Alarm</button>

    </form>

    <div>
    
  </div>

  <AlarmDisplay alarmList={alarmList} updateAlarm={updateAlarmState}></AlarmDisplay>

  <ToastContainer/>


    </div>
    
    
);
}
    


export default App
