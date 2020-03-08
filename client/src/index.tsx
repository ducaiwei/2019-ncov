import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
// antd全局化配置
import { ConfigProvider } from 'antd';
// 国际化配置
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import Home from '@/pages/Home';
import './assets/style.less';

ReactDOM.render(<Provider store={store}>
<ConfigProvider locale={zh_CN}>
    <Home />
</ConfigProvider>
</Provider>, document.getElementById('root'));