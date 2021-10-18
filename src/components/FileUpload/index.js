import React, { useState } from 'react'
import { Spin } from 'antd';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import uploadIcon from '../../assets/images/upload2.png'
import { submitFile } from '../../api/uploadFile'
import '../../assets/styles/fileUpload.css'
import { ShowAlert } from '../Alert'

const FileUpload = () => {
    const [loading, setLoading] = useState(false)
    const getResponseMessage = (type, message) => {
        ShowAlert(type, message)
        if (message) {
            setLoading(false)
        }
    }
    const onSubmit = (files) => {
        submitFile(files[0].file, getResponseMessage)
        files.forEach(f => f.remove())
        setLoading(true)
    }
    const dropZoneLayout = () => (
        <div className="dropzone">
            <img src={uploadIcon} width={100} height={70} alt="upload item" />
            <div className="drag">
                <h2>Drag&Drop files here</h2>
            </div>
            <div>or</div>
            <div className="browse">
                Browse Files
            </div>
        </div>
    )
    return (
        <div>
            <Dropzone
                getUploadParams={() => ({ url: 'https://httpbin.org/post' })}
                onSubmit={onSubmit}
                inputContent={dropZoneLayout}
                maxFiles={1}
                multiple={false}
            />
            {loading ? <Spin size="large" tip="File Uploading..." className="dropzone spinner" /> : null}
        </div>
    )
}
export default FileUpload