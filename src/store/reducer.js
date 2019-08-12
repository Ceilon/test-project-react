/**
 *@Author:chailong
 *@Description:
 *@Date:Created in  2019/8/7
 *@Modified By:
 */
import {HANDLE_INPUT_CHANGE, ADD_NEW_LIST, EDIT_LIST, INITIALIZE_LIST} from './actionTypes'

const defaultState = {
    inputValue: '',
    list: []
};

//reducer可以接受state，但是不能修改state
//reducer必须是一个纯函数，纯函数是指，给定固定的输入，就会产生固定的输出，输出的值不能因为条件不同而发生不同的变化，而且不会有任何副作用，副作用是指，不能直接改变state的值
export default (state = defaultState, action) => {
    if (action.type === HANDLE_INPUT_CHANGE) {
        const newStore = JSON.parse(JSON.stringify(state));//深度克隆state
        newStore.inputValue = action.value;
        return newStore  //这个数据返回给了store,store拿到新数据进行更新数据
    }

    if (action.type === ADD_NEW_LIST && state.inputValue) {
        const newStore = JSON.parse(JSON.stringify(state));
        newStore.list.push(newStore.inputValue);
        newStore.inputValue = '';
        return newStore
    }

    if (action.type === EDIT_LIST) {
        const newStore = JSON.parse(JSON.stringify(state));
        newStore.list.splice(action.editKey, 1);
        return newStore
    }

    if (action.type === INITIALIZE_LIST) {
        let newStore = action.data;
        return newStore
    }
    return state
}