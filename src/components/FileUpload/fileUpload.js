import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import uploadIcon from '../../assets/images/upload2.png'

const FileUpload = ({ handleSubmit, files, multiple }) => {
  const getUploadParams = () => {
    return { url: 'https://httpbin.org/post' }
  }
  const handleChangeStatus = ({ meta }, status, file) => {
  }
  const onSubmit = (files, allFiles) => {
    console.log(files, allFiles)
    handleSubmit(files[0].file)
    allFiles.forEach(f => f.remove())
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
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={onSubmit}
      inputContent={dropZoneLayout}
      maxFiles={files}
      multiple={multiple}
      styles={{
        dropzone: { width: '50%', height: 250, overflow: 'hidden', border: '1px dashed grey' },
      }}
    />
  )
}
export default FileUpload