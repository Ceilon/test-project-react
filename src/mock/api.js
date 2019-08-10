/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2019/8/9
 *@Modified By:
 */

const Mock = require('mockjs');
const url = {
    requestTodoList: 'web/v1/topicList'
};
let Random = Mock.Random;
Random.csentence();
module.exports = [
    Mock.mock(url.requestTodoList,'get',{
        'inputValue': '',
        'list|5': ['@csentence(10)']
    })
];