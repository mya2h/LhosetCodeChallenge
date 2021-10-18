import { Spin } from 'antd'

export const LoaderPage = () => {
    return (
        <div className='spinner-wrapper'>
            <Spin tip={<h2>Page Loading...</h2>}>
            </Spin>
        </div>
    )
}
