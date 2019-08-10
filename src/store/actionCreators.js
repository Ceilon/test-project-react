/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2019/8/8
 *@Modified By:
 */
import {HANDLE_INPUT_CHANGE, ADD_NEW_LIST, EDIT_LIST, INITIALIZE_LIST, TEST_SAGA_QUERY_LIST} from '../store/actionTypes'
import axios from 'axios';


export const getInitializeListData = (data) => ({
    type: INITIALIZE_LIST,
    data
});

export const getInputChangeAction = (value) => ({
    type: HANDLE_INPUT_CHANGE,
    value
});

export const getAddListAction = () => ({
    type: ADD_NEW_LIST,
});

export const getDeleteListAction = (index) => ({
    type: EDIT_LIST,
    editKey: index
});

export const testSagaQueryList = () => ({
    type: TEST_SAGA_QUERY_LIST
});

// export const getRequestListData=()=>{
//     //当使用redux-thunk后，dispatch可以传递方法，并且方法中能带返回的方法中自带一个dispatch
//   return (dispatch)=>{
//       axios.get('http://localhost:3000/topicList').then((res) => {
//           if (res.status === 200) {
//               const action = getInitializeListData(res.data);
//               dispatch(action);
//
//           }
//       })
//   }
// };