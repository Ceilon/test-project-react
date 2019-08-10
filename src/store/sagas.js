/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2019/8/9
 *@Modified By:
 */
import {put, takeEvery} from 'redux-saga/effects'
import {TEST_SAGA_QUERY_LIST} from './actionTypes'
import {getInitializeListData} from './actionCreators'
import axios from 'axios';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* queryList() {
    try {
        let listData = yield axios.get('web/v1/topicList');
        const action = getInitializeListData(listData.data);
        console.log(listData);
        yield put(action)
    } catch (e) {
        console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeor', e)
    }
}

function* mySaga() {
    yield takeEvery(TEST_SAGA_QUERY_LIST, queryList);
}


export default mySaga;