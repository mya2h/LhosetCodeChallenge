import axios from 'axios'

const getBase64 = file => {
    return new Promise(resolve => {
        let base64 = "";
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            base64 = reader.result.split(',')[1].toString();
            resolve(base64);
        };
    });
};

export const submitFile = async (value, getResponseMessage) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let upload = {
        File: '',
        Filename: value.name
    }
    try {
        const result = await getBase64(value)
        upload.File = result;
        const body = JSON.stringify(upload)
        await axios.post("https://jsonplaceholder.typicode.com/posts", body, config)
        getResponseMessage("success", "File Uploaded successfully")
    }
    catch (error) {
        getResponseMessage("error", "Unable to upload File")
    }
}