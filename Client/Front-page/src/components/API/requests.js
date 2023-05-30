import {BASE_URL } from './base_url'
import axios from 'axios'

export const getAll=async()=>{
let AllSecurtys
await axios.get(`${BASE_URL}/securtys`)
    .then((res)=>{
        AllSecurtys =res.data
    })
    return AllSecurtys
}

export const getOne=async(id)=>{
    let SingleSecurty
    await axios.get(`${BASE_URL}/securtys/${id}`)
        .then((res)=>{
            AllSecurtys =res.data
        })
        return SingleSecurty
    }


    export const DeletedSecurtys=(id)=>{
        axios.delete(`${BASE_URL}/securtys/${id}`)
    }

