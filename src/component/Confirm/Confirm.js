import './Confirm.css'
const Confirm = () => {
    return (
        <div className='confirmContainer'>
            <div className='confirmText'>
                <h1>您爱你的朋友吗！</h1>
                <p>在耐心中体验幸福</p>
            </div>
            <div className='confirmBtn'>
                <button>确定</button>
                <button>取消</button>
            </div>
        </div>
    );
};

export default Confirm;
