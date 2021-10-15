import React from 'react'
import { Menu } from 'antd';
const TopNav = ({ theme }) => {
    return (
        <div>
            <Menu theme={theme} mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">File Upload</Menu.Item>
            </Menu>
        </div>
    )
}
export default TopNav