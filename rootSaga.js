import {fork, all} from 'redux-saga/effects';
import { watchLoginToDo } from '../sagas/Sagas';

export default function* rootSaga(){
    yield all([
        fork(watchLoginToDo),
    ]);
}