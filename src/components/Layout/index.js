import { useEffect, useState } from 'react';
import { Layout,Checkbox } from 'antd';
import FileUpload from '../FileUpload'
import Spinner from './spinner'
import '../../assets/styles/layout.css'

const { Header, Content, Footer } = Layout;

const LandingPage = () => {
  const [loading, setLoading] = useState(true)
  // const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [loading])

  const handleChange = (e) => {
    // setDarkMode(true)
  }

  return (
    <div>
      {loading ? <Spinner /> : <Layout>
        <Header className="header">
          <div className="logo">Lhoste</div>
          <div className="theme">
          <Checkbox onChange={handleChange}><h4>Dark Mode?</h4></Checkbox>
          </div>
        </Header>
        <Content >
          <div className="site-layout-content">
            <FileUpload />
          </div>
        </Content>
        <Footer className="footer">Lhoste Coding Challenge ©2021</Footer>
      </Layout>}
    </div>
  )
}

export default LandingPage