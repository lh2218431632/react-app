import React, {useState} from 'react';
import DataForm from "./component/DataForm/DataForm";
import Card from "./component/Card/Card";
import Cardlender from "./component/cardlender/Cardlender";
import BackDrop from "./component/BackDrop/BackDrop";
import Confirm from "./component/Confirm/Confirm";

const App = () => {
    const [data, setData] = useState([{
        id:'001',
        month: '三月',
        day: '22',
        object: '学习React',
        time: '40分钟'
    },{
        id:'002',
        month: '三月',
        day: '23',
        object: '学习Vue',
        time: '80分钟'
    },{
        id:'003',
        month: '三月',
        day: '25',
        object: '学习Webpack',
        time: '20分钟'
    },{
        id:'004',
        month: '三月',
        day: '28',
        object: '学习JavaScript',
        time: '40分钟'
    }])
    /*
    不管是子传父，还是父传子都要利用闭包，但是子传父时，要定义形参，来接收子组件的数据或者状态。
     */
    const onSaveDataForm = (dataItem) => {
        setData([...data, dataItem]);
    }

    const onDeleteDataFormItem = (index) => {
        alert(index);
    }
    return (
        <div>
            <DataForm  onSaveDataForm={onSaveDataForm}  width={'800px'}/>
            <Card className="container">
                {data.map( (item,index) => <Cardlender  itemIndex={index} onDeleteDataFormItem={onDeleteDataFormItem}  key={item.id} time={item.time} day={item.day} month={item.month} object={item.object}/>)}
            </Card>
        </div>
    );
};

export default App;
