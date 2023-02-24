import * as React from 'react';
import Calendar from 'react-calendar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css'
import '../styles/schedule.css';

export default function Schedule() {
    const navigate = useNavigate();
    const [value, onChange] = React.useState(new Date());

    /*
        TODO: 
        1. Get all clients from DB with appointments using "value"
        2. Generate clients on list with DB information
        3. Create widget preview for home screen showing clientList appts for today
    */

    React.useEffect(() => {
        console.log(value);
    }, [value]);

    return (
        <div className='page-container'>
            <h1>Schedule</h1>
            <Calendar onChange={onChange} value={value}/>
            {}
        </div>
    )
}

function clientList(){
    return (
        <div>
            
        </div>
    )
}
