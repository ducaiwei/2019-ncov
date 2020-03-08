export interface AllData {
    confirmedCount: number,
    suspectedCount: number,
    curedCount: number,
    deadCount: number,
    currentConfirmedCount: number,
    createTime?: number,
    modifyTime?: number,
}
export interface ProvinceData  extends AllData{
    provinceName: string,
    provinceShortName: string,
    locationId: number,
    cities: Array<CityData>
}
export interface CityData extends AllData {
    cityName: string,
    locationId: number
}

export interface HomeState {
    allData: AllData,
    provinceData: ProvinceData,
}
export interface CombineState {
    home: HomeState
}