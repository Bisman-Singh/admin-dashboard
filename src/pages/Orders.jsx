import { useState, useMemo } from 'react'
import { orders } from '../data/mockData'

function Orders() {
  const [statusFilter, setStatusFilter] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    let result = orders
    if (statusFilter !== 'all') result = result.filter(o => o.status === statusFilter)
    if (search) {
      const q = search.toLowerCase()
      result = result.filter(o =>
        o.id.toLowerCase().includes(q) ||
        o.customerName.toLowerCase().includes(q) ||
        o.email.toLowerCase().includes(q)
      )
    }
    return result.sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [statusFilter, search])

  const statusCounts = useMemo(() => {
    const counts = { all: orders.length }
    orders.forEach(o => { counts[o.status] = (counts[o.status] || 0) + 1 })
    return counts
  }, [])

  return (
    <div className="page">
      <h1 className="page-title">Orders</h1>

      <div className="filter-bar">
        {['all', 'pending', 'processing', 'shipped', 'delivered'].map(s => (
          <button
            key={s}
            className={`filter-btn ${statusFilter === s ? 'active' : ''}`}
            onClick={() => setStatusFilter(s)}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
            <span className="filter-count">{statusCounts[s] || 0}</span>
          </button>
        ))}
        <input
          type="text"
          placeholder="Search orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="table-search"
          style={{ marginLeft: 'auto' }}
        />
      </div>

      <div className="orders-list">
        {filtered.map(order => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <span className="order-id">{order.id}</span>
              <span className={`status-badge ${order.status}`}>{order.status}</span>
            </div>
            <div className="order-body">
              <div className="order-customer">
                <strong>{order.customerName}</strong>
                <span>{order.email}</span>
              </div>
              <div className="order-details">
                <span>{order.items.length} item{order.items.length > 1 ? 's' : ''}</span>
                <span>{order.paymentMethod}</span>
                <span>{order.shippingCity}</span>
              </div>
              <div className="order-total">
                <span className="order-amount">${order.total.toFixed(2)}</span>
                <span className="order-date">{new Date(order.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && <p className="no-data">No orders found</p>}
      </div>
    </div>
  )
}

export default Orders
