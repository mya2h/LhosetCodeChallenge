import { Layout } from 'antd';
import FileUpload from '../../components/FileUpload'
import '../../assets/styles/layout.css'
import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter'

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
