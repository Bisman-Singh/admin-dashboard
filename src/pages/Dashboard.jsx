import KpiCard from '../components/KpiCard'
import { users, orders, monthlyRevenue, ordersByCategory } from '../data/mockData'
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from 'recharts'

function Dashboard() {
  const totalRevenue = orders.reduce((s, o) => s + o.total, 0)
  const totalOrders = orders.length
  const totalUsers = users.length
  const conversionRate = ((totalOrders / (totalUsers * 5)) * 100).toFixed(1)

  const recentOrders = [...orders].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5)
  const recentUsers = [...users].sort((a, b) => new Date(b.joinDate) - new Date(a.joinDate)).slice(0, 5)

  return (
    <div className="page">
      <h1 className="page-title">Dashboard</h1>

      <div className="kpi-grid">
        <KpiCard title="Total Users" value={totalUsers} change="12.5%" icon="👥" positive />
        <KpiCard title="Revenue" value={`$${(totalRevenue / 1000).toFixed(1)}k`} change="8.2%" icon="💰" positive />
        <KpiCard title="Orders" value={totalOrders} change="5.3%" icon="🛒" positive />
        <KpiCard title="Conversion" value={`${conversionRate}%`} change="1.2%" icon="📈" positive={false} />
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>Revenue Over 12 Months</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3e" />
              <XAxis dataKey="month" stroke="#8888aa" />
              <YAxis stroke="#8888aa" />
              <Tooltip contentStyle={{ background: '#1a1a2e', border: '1px solid #2d2d50', borderRadius: 8 }} />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#06b6d4" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-card">
          <h3>Orders by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ordersByCategory}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3e" />
              <XAxis dataKey="category" stroke="#8888aa" />
              <YAxis stroke="#8888aa" />
              <Tooltip contentStyle={{ background: '#1a1a2e', border: '1px solid #2d2d50', borderRadius: 8 }} />
              <Bar dataKey="orders" fill="#06b6d4" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="tables-grid">
        <div className="mini-table-card">
          <h3>Recent Orders</h3>
          <table className="mini-table">
            <thead>
              <tr><th>Order</th><th>Customer</th><th>Total</th><th>Status</th></tr>
            </thead>
            <tbody>
              {recentOrders.map(o => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.customerName}</td>
                  <td>${o.total.toFixed(2)}</td>
                  <td><span className={`status-badge ${o.status}`}>{o.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mini-table-card">
          <h3>Recent Users</h3>
          <table className="mini-table">
            <thead>
              <tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th></tr>
            </thead>
            <tbody>
              {recentUsers.map(u => (
                <tr key={u.id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td><span className={`status-badge ${u.status}`}>{u.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
