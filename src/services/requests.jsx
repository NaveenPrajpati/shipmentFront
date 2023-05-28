import axios from "axios"


const baseurl='http://localhost:4000/auth'

export const login=(data)=>{ return axios.post(baseurl+"/login",data)}