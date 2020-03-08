import * as types from '../action-types';
import { getAllData, getProvinceData } from '../../api/api';

export default {
    getAllDataAction() {
        return {
            type: types.GET_ALL_DATA,
            payload: getAllData()
        }
    },
    getProvinceData() {
        return {
            type: types.GET_PROVINCE_DATA,
            payload: getProvinceData()
        }
    }
}