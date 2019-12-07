import axios from 'axios'

const instance = axios.create({
baseURL: 'https://jsonplaceholder.typicode.com'
})

function get (url,params){
    return instance.get(url, params)

}
function post (url,params){
    return instance.post(url, params)

}
function put (url,params){
    return instance.put(url, params)

}
function del (url,params){
    return instance.del(url, params)

}


export default{
    get,
    post,
    put,
    del
}