import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts'
import { monthlyRevenue, ordersByCategory, trafficSources, dailyVisitors } from '../data/mockData'

const PIE_COLORS = ['#06b6d4', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444']

function Analytics() {
  return (
    <div className="page">
      <h1 className="page-title">Analytics</h1>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3e" />
              <XAxis dataKey="month" stroke="#8888aa" />
              <YAxis stroke="#8888aa" />
              <Tooltip contentStyle={{ background: '#1a1a2e', border: '1px solid #2d2d50', borderRadius: 8 }} />
              <Area type="monotone" dataKey="revenue" stroke="#06b6d4" fill="rgba(6,182,212,0.2)" strokeWidth={2} />
            </AreaChart>
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

        <div className="chart-card">
          <h3>Traffic Sources</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={trafficSources}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={110}
                paddingAngle={3}
                dataKey="value"
              >
                {trafficSources.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: '#1a1a2e', border: '1px solid #2d2d50', borderRadius: 8 }} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Daily Visitors & Page Views</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyVisitors}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3e" />
              <XAxis dataKey="day" stroke="#8888aa" />
              <YAxis stroke="#8888aa" />
              <Tooltip contentStyle={{ background: '#1a1a2e', border: '1px solid #2d2d50', borderRadius: 8 }} />
              <Legend />
              <Line type="monotone" dataKey="visitors" stroke="#06b6d4" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="pageViews" stroke="#8b5cf6" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card full-width">
          <h3>Monthly Orders Volume</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3e" />
              <XAxis dataKey="month" stroke="#8888aa" />
              <YAxis stroke="#8888aa" />
              <Tooltip contentStyle={{ background: '#1a1a2e', border: '1px solid #2d2d50', borderRadius: 8 }} />
              <Bar dataKey="orders" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Analytics
