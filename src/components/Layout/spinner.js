import { Spin, Skeleton } from 'antd'

const Spinner = () => {
    return (
        <Spin tip={<h2>Page Loading...</h2>}>
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
        </Spin>
    )

}
export default Spinner