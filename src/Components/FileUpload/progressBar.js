import { Progress } from 'antd';

const ProgressBar = () => {
    return (
        <div>
            <Progress percent={70} size="large" strokeWidth={14} />
        </div>
    )
}
export default ProgressBar