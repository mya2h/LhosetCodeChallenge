import { Layout, Menu, Breadcrumb } from 'antd';
import TopNav from './topNav'
import FileUpload from '../FileUpload'
import '../../Assets/styles/layout.css'
const { Header, Content, Footer } = Layout;

const LandingPage = ()=>{
    return(
      <Layout className="layout">
    <Header>
      <div className="logo" />
      <TopNav theme="dark"/>
    </Header>
    <Content className="site-layout-content">
      <FileUpload/>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
    )
}
export default LandingPage