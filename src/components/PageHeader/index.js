import { useThemeContext } from "../../context/ThemeProvider"
import { Switch } from "antd"
import { Header } from "antd/lib/layout/layout"

const PageHeader = () => {
    const { isDark, setIsDark } = useThemeContext()
    return (
        <Header className="header">
            <div className="logo">Lhotse</div>
            <div className="theme">
                <Switch
                    checked={isDark}
                    checkedChildren='Dark' unCheckedChildren='Light' onChange={setIsDark} />
            </div>
        </Header>
    )
}
export default PageHeader