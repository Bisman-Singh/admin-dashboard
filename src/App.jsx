import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'

const PAGES = {
  dashboard: Dashboard,
  users: Users,
  products: Products,
  orders: Orders,
  analytics: Analytics,
  settings: Settings,
}

function App() {
  const [activePage, setActivePage] = useState('dashboard')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('admin-theme') || 'dark')

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('admin-theme', next)
  }

  const PageComponent = PAGES[activePage] || Dashboard

  return (
    <div className={`app ${theme}`}>
      <Sidebar
        activePage={activePage}
        onNavigate={setActivePage}
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <main className={`main-content ${sidebarCollapsed ? 'expanded' : ''}`}>
        <PageComponent theme={theme} onToggleTheme={toggleTheme} />
      </main>
    </div>
  )
}

export default App
