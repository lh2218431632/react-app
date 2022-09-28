import './Time.css'
const  Time = ({month, day}) => {
    return  <div className="time-box">
        <h1 className="month-color">{month}</h1>
        <h1 className="day-color">{day}</h1>
    </div>
}

export  default  Time;