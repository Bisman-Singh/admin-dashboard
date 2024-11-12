function KpiCard({ title, value, change, icon, positive }) {
  return (
    <div className="kpi-card">
      <div className="kpi-icon">{icon}</div>
      <div className="kpi-info">
        <span className="kpi-title">{title}</span>
        <span className="kpi-value">{value}</span>
        <span className={`kpi-change ${positive ? 'positive' : 'negative'}`}>
          {positive ? '↑' : '↓'} {change}
        </span>
      </div>
    </div>
  )
}

export default KpiCard
