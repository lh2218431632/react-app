import React, {useState} from 'react';
import Card from "../Card/Card";
import './DataForm.css'

const DataForm = ({width, onSaveDataForm}) => {
    const formHandler = (e) => {
        e.preventDefault();
        setDataForm({
            desc: '',
            date: '',
            time: ''
        })
        onSaveDataForm(dataForm);
    }
    let [dataForm, setDataForm] = useState({
        desc: '',
        date: '',
        time: ''
    })
    const createInputChange = (e) => {
        function  inputChangeCallBack (e) {
            setDataForm({...dataForm,[e.target.id]: e.target.value});
        }
        inputChangeCallBack(e);
    }
    return(
      <Card width={width} className={'DataForm'}>
          <form onSubmit={formHandler}>
              <div className={'form-item'}>
                  <label htmlFor={'date'}>日期</label>
                  <input  value={dataForm.date} onChange={createInputChange} id={'date'} type={'date'} />
              </div>
              <div className={'form-item'}>
                  <label htmlFor={'desc'}>描述</label>
                  <input value={dataForm.desc}  onChange={createInputChange} id={'desc'}  type={'text'}/>
              </div>
              <div className={'form-item'}>
                  <label htmlFor={'time'}>时间</label>
                  <input value={dataForm.time} onChange={createInputChange} id={'time'}  type={'number'}/>
              </div>
              <div className={'btn'}>
                  <button>添加</button>
              </div>
          </form>
      </Card>
    );
};

export default DataForm;
