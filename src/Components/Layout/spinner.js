import {Spin,Skeleton} from 'antd'

const Spinner = ()=>{
    return(
        <Spin tip="Loading..." width={400}>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
        </Spin>
    )

}
export default Spinner