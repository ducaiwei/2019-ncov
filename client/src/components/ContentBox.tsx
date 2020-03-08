import React from 'react';
import './contentBox.less';
import { Card, Row, Col } from 'antd';
import { Date } from '../utils';

const { Meta } = Card;

interface Dimension {
  key: string;
  color: string;
  desc: string;
  type?: Array<any>;
}
const GlobalDimensions: Array<Dimension> = [
  {
    key: 'currentConfirmedCount',
    color: 'rgb(252, 72, 74)',
    desc: '现存确诊',
    type: ['all', 'province']
  },
  {
    key: 'suspectedCount',
    color: 'rgb(255, 145, 20)',
    desc: '疑似人数',
    type: ['all', 'province']
  },
  {
    key: 'curedCount',
    color: 'rgb(21, 166, 163)',
    desc: '治愈人数',
    type: ['all', 'province']
  },
  {
    key: 'seriousCount',
    color: 'rgb(21, 166, 163)',
    desc: '危重人数',
    type: ['all']
  },
  {
    key: 'deadCount',
    color: 'rgb(150, 151, 153)',
    desc: '死亡人数',
    type: ['all', 'province']
  }
];
interface Props {
  [key: string]: any;
}

const ContentBox = (props: Props) => {
  const loading = props.data === null;
  let title = '';
  if (props.data && props.data.updateTime) {
    title = `截至 ${Date.format(props.data.updateTime, 'yyyy-MM-dd hh:mm')} ${
      props.type === 'all' ? '全国' : '四川'
    }数据统计：`;
  }
  const className = props.className
    ? `${props.className} ncov-content`
    : 'ncov-content';
  return (
    <div className={className}>
      <Card loading={loading}>
        <Meta title={title} />
        <Row>
          {GlobalDimensions.map(
            (gd, index) =>
              gd.type.includes(props.type) && (
                <Col key={index} className="ncov-content-col">
                  <strong style={{ color: gd.color }}>
                    {props.data && props.data[gd.key]}
                  </strong>
                  <p>{gd.desc}</p>
                </Col>
              )
          )}
        </Row>
      </Card>
    </div>
  );
};
export default ContentBox;
