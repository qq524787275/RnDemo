import http from 'src/http/axios';
import {
    baseUrl
} from './env';

//获取漫画列表
export const getCartoonList = (tag, count, page) => http(baseUrl + '/web/tags/' + tag, {
    count: count,
    page: page,
}, 'GET');



