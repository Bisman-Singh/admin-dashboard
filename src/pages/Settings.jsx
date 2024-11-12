import { useState } from 'react'

function Settings({ theme, onToggleTheme }) {
  const [profile, setProfile] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
    bio: 'Full-stack developer and system administrator.',
    notifications: true,
    language: 'en',
  })
  const [saved, setSaved] = useState(false)

  const handleChange = (key, value) => {
    setProfile(prev => ({ ...prev, [key]: value }))
    setSaved(false)
  }

  const handleSave = (e) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="page">
      <h1 className="page-title">Settings</h1>

      <div className="settings-grid">
        <div className="settings-card">
          <h3>Profile</h3>
          <form onSubmit={handleSave} className="settings-form">
            <label className="form-label">
              Name
              <input
                value={profile.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="form-input"
              />
            </label>
            <label className="form-label">
              Email
              <input
                type="email"
                value={profile.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="form-input"
              />
            </label>
            <label className="form-label">
              Bio
              <textarea
                value={profile.bio}
                onChange={(e) => handleChange('bio', e.target.value)}
                className="form-textarea"
                rows={3}
              />
            </label>
            <label className="form-label">
              Language
              <select
                value={profile.language}
                onChange={(e) => handleChange('language', e.target.value)}
                className="form-select"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </label>
            <button type="submit" className="btn-primary">
              {saved ? '✓ Saved!' : 'Save Changes'}
            </button>
          </form>
        </div>

        <div className="settings-card">
          <h3>Appearance</h3>
          <div className="setting-row">
            <div>
              <strong>Theme</strong>
              <p className="setting-desc">Switch between dark and light mode</p>
            </div>
            <button className="theme-toggle" onClick={onToggleTheme}>
              {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>
          <div className="setting-row">
            <div>
              <strong>Notifications</strong>
              <p className="setting-desc">Receive email notifications</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={profile.notifications}
                onChange={(e) => handleChange('notifications', e.target.checked)}
              />
              <span className="toggle-slider" />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
