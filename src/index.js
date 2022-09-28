// src/index.js 是js的入口文件
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
// 创建一个JSX
//获取一个根元素
const  root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);