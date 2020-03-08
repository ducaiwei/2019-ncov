import React, { PropsWithChildren, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { HomeState, CombineState, CityData } from '@/typings/state';
import './index.less';
import Head from '../../components/Head';
import ContentBox from '../../components/ContentBox';
import mapDispatchToProps from '../../store/actions/home';
import ReactEcharts from 'echarts-for-react';
import 'echarts/map/js/province/sichuan.js';

type Props = PropsWithChildren<
  ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps
>;
interface ChartOption {
  [key: string]: any;
}
const chartOption: ChartOption = {
  textStyle: {
    fontSize: 10
  },
  tooltip: {
    trigger: 'item'
  },
  visualMap: {
    type: 'piecewise',
    realtime: false,
    // splitNumber:6,
    calculable: true,
    itemWidth: 8,
    itemHeight: 8,
    textGap: 2,
    padding: 0,
    inRange: {
      color: ['#ffffff','#fdaa88', '#fd7c6d','#ca2b2f', '#8a1014', '#65040c']
    },
    pieces: [
      {min: 0, max: 0},
      {min: 1, max: 9},
      {min: 10, max: 99},
      {min: 100, max: 999},
      {min: 1000, max: 9999},
      {min: 10000}
    ],
    top: 'top',
    bottom: 'auto',
    left: 'center',
    orient: 'horizontal'
  },
  series: [
    {
      name: '四川省疫情分布图',
      type: 'map',
      mapType: '四川',
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: true
        }
      },
      data: []
    }
  ],
  nameMap: {
    凉山彝族自治州: '凉山州',
    甘孜藏族自治州: '甘孜州',
    阿坝藏族羌族自治州: '阿坝州',
    成都市: '成都',
    南充市: '南充',
    达州市: '达州',
    巴中市: '巴中',
    泸州市: '泸州',
    内江市: '内江',
    德阳市: '德阳',
    广安市: '广安',
    遂宁市: '遂宁',
    攀枝花市: '攀枝花',
    宜宾市: '宜宾',
    自贡市: '自贡',
    眉山市: '眉山',
    雅安市: '雅安',
    广元市: '广元',
    乐山市: '乐山',
    资阳市: '资阳',
    绵阳市: '绵阳'
  }
};
const convertData = (cities: Array<CityData>) => {
  const data = cities.map(c => {
    if (c.currentConfirmedCount >= 0) {
      return { name: c.cityName, value: c.currentConfirmedCount };
    }
  });
  return data;
};

const Home = (props: Props) => {
  useEffect(() => {
    // Argument of type '() => Promise<void>' is not assignable to parameter of type 'EffectCallback'
    (async () => {
      await props.getAllDataAction();
      await props.getProvinceData();
    })();
  }, []);
  if (props.provinceData) {
    chartOption.series[0].data = convertData(props.provinceData.cities);
  }
  return (
    <>
      <Head />
      <ContentBox data={props.allData} type="all" />
      <ContentBox
        data={props.provinceData}
        type="province"
        className="ncov-pro-content"
      />
      {chartOption.series[0].data.length > 0 && (
        <div className="chart-box">
          <ReactEcharts option={chartOption} />
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state: CombineState): HomeState => state.home;
export default connect(mapStateToProps, mapDispatchToProps)(Home);
