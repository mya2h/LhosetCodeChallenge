import { useEffect, useState } from 'react';
import { MainPage } from './layout/MainPage';
import { LoaderPage } from './layout/LoaderPage'
import { useThemeContext } from './context/ThemeProvider';

const App = () => {
  const [loading, setLoading] = useState(true)
  const { isDark } = useThemeContext()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [loading])


  const className = isDark ? 'dark' : ''

  return (
    <div className={className}>
      {loading ? <LoaderPage /> : <MainPage />}
    </div>
  )
}

export default App