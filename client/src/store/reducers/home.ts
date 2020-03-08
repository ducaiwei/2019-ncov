import { HomeState, ProvinceData } from '@/typings/state';
import { AnyAction } from 'redux';
import * as types from '../action-types';
const enum PROVINCE {
  MY_PROVINCE = '四川省'
}
const initialState: HomeState = {
  allData: null,
  provinceData: null
};
export default (state: HomeState, action: AnyAction): HomeState => {
  switch (action.type) {
    // 全国数据
    case types.GET_ALL_DATA:
      if (action.payload && action.payload.success) {
        return { ...state, allData: action.payload.results[0] };
      }
      return initialState;
    // 四川省数据
    case types.GET_PROVINCE_DATA:
      if (action.payload && action.payload.success) {
        return { ...state, provinceData: action.payload.results[0]};
      }
      return initialState;
    default:
      return initialState;
  }
};
