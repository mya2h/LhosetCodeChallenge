import React from 'react'
import FileUpload from './fileUpload'
import { submitFile } from '../../api/uploadFile'
import '../../assets/styles/fileUpload.css'

const UploadFile = () => {

    const handleSubmit = (files, allFiles)=>{
        submitFile()
    }
    return (
        <FileUpload handleSubmit={handleSubmit} files={1} multiple={false}/>
    )

}
export default UploadFile