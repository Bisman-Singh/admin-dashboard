import DataTable from '../components/DataTable'
import { users } from '../data/mockData'

const columns = [
  { key: 'id', label: 'ID' },
  {
    key: 'name',
    label: 'Name',
    render: (val, row) => (
      <div className="user-cell">
        <img src={row.avatar} alt="" className="cell-avatar" />
        <span>{val}</span>
      </div>
    )
  },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role', render: (val) => <span className="role-badge">{val}</span> },
  {
    key: 'status',
    label: 'Status',
    render: (val) => <span className={`status-badge ${val}`}>{val}</span>
  },
  { key: 'city', label: 'City' },
  {
    key: 'joinDate',
    label: 'Joined',
    render: (val) => new Date(val).toLocaleDateString()
  },
  {
    key: 'spent',
    label: 'Spent',
    render: (val) => `$${val.toLocaleString()}`
  },
]

function Users() {
  return (
    <div className="page">
      <h1 className="page-title">Users</h1>
      <DataTable columns={columns} data={users} pageSize={10} />
    </div>
  )
}

export default Users
