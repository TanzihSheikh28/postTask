import axios from "axios";

export function GetAllUser(){
    return axios.get(' https://jsonplaceholder.typicode.com/users')
}
export function GetPosts(){
    return axios.get(' https://jsonplaceholder.typicode.com/posts')
}