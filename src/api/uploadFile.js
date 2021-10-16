import axios from 'axios'

export const submitFile = async (value)=>{
    const body = JSON.stringify(value)
    try{
        const res = await axios.post("https://jsonplaceholder.typicode.com/posts",body)
        console.log(res.data)
    }
    catch(error){
        console.log(error.response)
    }
}