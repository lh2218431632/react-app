import './Cardlender.css'
import Time from "../Time/Time";
import Card from "../Card/Card";
const Cardlender = ({month, day, object, time,itemIndex,onDeleteDataFormItem}) => {

    return <Card className="content-box">
        <Time month={month} day={day}/>
        <div className="data-box">
            <div className="object-box">
                <p>{object}</p>
                <p>{time}</p>
            </div>
        </div>
        <div className={'delete'} onClick={()=> onDeleteDataFormItem(itemIndex)}>
            <p>X</p>
        </div>
    </Card>
}

export  default  Cardlender