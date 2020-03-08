import React from 'react';
import './head.less';
import { Tag } from 'antd';

interface Menu {
    url: string;
    name: string;
}
const utilMenus: Array<Menu> = [
    {name: '附近疫情', url: 'https://ncov.html5.qq.com/community?channelid=17'},
    {name: '同行程查询', url: 'http://2019ncov.nosugartech.com/ifeng.html'},
    {name: '病患轨迹', url: 'https://xw.qq.com/act/fytrace'}
]
const enum Texts {
    TITLE='新型冠状病毒肺炎',
    SUB_TITLE='四川省疫情实时数据'
}
export default () => {
    const forward = (m:Menu) => {
        location.href = m.url;
    }
    return (
        <header className="ncov-head">
            <h3>{Texts.TITLE}</h3>
            <h1>{Texts.SUB_TITLE}</h1>
            <div className="ncov-utils">
                <span className="ncov-utils-desc">疫情工具</span>
                {
                    utilMenus.map((m, index) => (
                        <Tag color="cyan" key={index} className="ncov-utils-tag" onClick={() => { forward(m) }}>{m.name}</Tag>
                    ))
                }
            </div>
        </header>
    )
}