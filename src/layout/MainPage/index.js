import FileUpload from '../../components/FileUpload'
import PageHeader from '../../components/PageHeader'
import PageFooter from '../../components/PageFooter'
import { Layout } from 'antd';
import '../../assets/styles/layout.css';

const { Content } = Layout;

export const MainPage = () => {
    return (
        <Layout>
            <PageHeader />
            <Content >
                <div className="site-layout-content">
                    <FileUpload />
                </div>
            </Content>
            <PageFooter />
        </Layout>
    )
}
