import axios from 'axios'

const getBase64 = file => {
    return new Promise(resolve => {
        let baseURL = "";
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            baseURL = reader.result;
            resolve(baseURL);
        };
    });
};

export const submitFile = async (value) => {
    let upload = {
        File: '',
        Filename: value.name
    }
    getBase64(value)
        .then(result => {
            upload.File = result;
            console.log("File Is", upload.file);
        })
        .catch(err => {
            console.log(err);
        });
    const body = JSON.stringify(upload)
    try {
        const res = await axios.post("https://jsonplaceholder.typicode.com/posts", body)
        console.log(res.data)
    }
    catch (error) {
        console.log(error.response)
    }
}