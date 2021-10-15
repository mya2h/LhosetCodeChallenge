import React from 'react'
import Spinner from './spinner'
import FileUpload from './fileUpload'
import '../../Assets/styles/fileUpload.css'
const UploadFile = ()=>{
    return(
        <div className="main">
            <FileUpload/>
        </div>
    )

}
export default UploadFile