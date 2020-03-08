import request from './index';

export function getAllData<T>(){
    return request.get<T,T>(`/api/overall`);
}
export function getProvinceData<T>() {
    return request.get<T,T>(`/api/area?latest=1&province=四川省`);
}