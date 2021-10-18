import axios from 'axios'

const getBase64 = file => {
    return new Promise(resolve => {
        let baseURL = "";
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            baseURL = reader.result.toString().replace(/^data:(.*,)?/, '');
            resolve(baseURL);
        };
    });
};

export const submitFile = async (value) => {
    console.log(value)
    let upload = {
        File: '',
        Filename: value.name
    }
    try {
        const result = await getBase64(value)
        console.log("result", result)
        upload.File = result;
        console.log(upload)
        const body = JSON.stringify(upload)
        const res = await axios.post("https://jsonplaceholder.typicode.com/posts", body)
        console.log(res.data)
    }
    catch (error) {
        console.log(error.response)
    }
}