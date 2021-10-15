import { useEffect, useState } from 'react';
import { Layout, Select } from 'antd';
import TopNav from './topNav'
import FileUpload from '../FileUpload'
import Spinner from './spinner'
import '../../Assets/styles/layout.css'

const { Header, Content, Footer } = Layout;
const { Option } = Select;

const LandingPage = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [loading])
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  return (
    <div>
      {loading ? <Spinner /> : <Layout className="layout">
        <Header className="header">
          <div className="logo"></div>
          <TopNav theme="dark" className="menu" />
          <div className="theme">
            <Select size="small" defaultValue="light" style={{ width: 120 }} onChange={handleChange}>
              <Option value="light">Light Theme</Option>
              <Option value="dark">Dark Theme</Option>
            </Select>
          </div>
        </Header>
        <Content >
          <div className="site-layout-content">
            <FileUpload />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Lhoste Coding Challenge ©2021</Footer>
      </Layout>}

    </div>

  )
}
export default LandingPage