import home from './home';
import { combineReducers, ReducersMapObject, AnyAction, Reducer } from 'redux';
import { CombineState } from '../../typings/state';

let reducers: ReducersMapObject<CombineState, AnyAction> = {
  home
};
const rootReducers: Reducer<CombineState, AnyAction> = combineReducers<
  CombineState
>(reducers);

export default rootReducers;
