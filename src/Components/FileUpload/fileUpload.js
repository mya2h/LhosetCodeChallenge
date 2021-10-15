import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import uploadIcon from '../../Assets/images/upload2.png'
import {UploadFile} from '../../Api/uploadFile'
const FileUpload = () => {

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }
  const dropZoneLayout = () =>(
    <div className="dropzone">
      <img src={uploadIcon} width={100} height={70}/>
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
    <Dropzone
      onSubmit={handleSubmit}
      inputContent={dropZoneLayout}
      maxFiles={1}
      multiple={false}
      styles={{
        dropzone: { width: 450, height: 250 ,overflow: 'hidden'},
        dropzoneActive: { borderColor: 'green' },
      }}
    />
  )
}
export default FileUpload