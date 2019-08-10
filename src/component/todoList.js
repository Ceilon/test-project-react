import React from 'react';
import {Button, Input, List} from 'antd'
import './todoList.less'
import store from '../store'
import axios from 'axios'
import {
    getInputChangeAction,
    getAddListAction,
    getDeleteListAction,
    getInitializeListData,
    testSagaQueryList
} from '../store/actionCreators'
import '../mock/api' //必需引用


export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.changeInput);
    }

    componentDidMount() {
        const {dispatch} = store;
        const action=testSagaQueryList();
        // const action = getRequestListData();//发送请求初始化List,通过thunk升级了dispatch，使得dispatch可以传递函数
        dispatch(action);
        console.log("===>")
      //         axios.get('http://localhost:3000/topicList').then((res) => {
      //     if (res.status === 200) {
      //         const action = getInitializeListData(res.data);
      //         dispatch(action);
      //
      //     }
      // })

    }

    changeInput = () => {
        this.setState(store.getState())
    };

    todoListChange = (e) => {
        const {dispatch} = store;
        const action = getInputChangeAction(e.target.value);
        dispatch(action)
    };

    handleNewList = () => {
        const {dispatch} = store;
        const action = getAddListAction();
        dispatch(action)
    };

    editTodoList = (index) => {
        const {dispatch} = store;
        const action = getDeleteListAction(index);
        dispatch(action)
    };

    render() {
        // const data = [
        //     'Racing car sprays burning fuel into crowd.',
        //     'Japanese princess to wed commoner.',
        //     'Australian walks 100km after outback crash.',
        //     'Man charged over missing wedding girl.',
        //     'Los Angeles battles huge wildfires.',
        // ];
        return (
            <div id='todoList'>
                <div className='answer'>
                    <Input onChange={(e) => {
                        this.todoListChange(e)
                    }} value={this.state.inputValue} placeholder="请输入添加项"/>
                    <Button type='primary' onClick={this.handleNewList}>
                        添加
                    </Button>
                </div>
                <div className='todoListDiv2'>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (
                            <List.Item actions={[<a onClick={() => this.editTodoList(index)}>删除</a>]}>
                                {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        )
    }
}