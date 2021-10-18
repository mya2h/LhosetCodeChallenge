import { Switch } from "antd"
import { Header } from "antd/lib/layout/layout"
import { useThemeContext } from "../ThemeProvider"

const PageHeader = () => {
    const { isDark, setIsDark } = useThemeContext()

    return (
        <Header className="header">
            <div className="logo">Lhoste</div>
            <div className="theme">
                <Switch
                    checked={isDark}
                    checkedChildren='Dark' unCheckedChildren='Light' onChange={setIsDark} />
            </div>
        </Header>
    )
}
export default PageHeader