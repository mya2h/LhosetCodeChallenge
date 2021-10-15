import React,{useCallback} from 'react';
import {useDropzone} from 'react-dropzone'
import '../../Assets/styles/fileUpload.css'

const FileUpload = () => {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
      return (
        <div {...getRootProps()} className="fileUpload">
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag 'n' drop some files here, or click to select files</p>
          }
        </div>
      )
}
export default FileUpload