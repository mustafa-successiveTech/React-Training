export default function SettingsPage() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Settings</h2>
      <p><strong>Notification:</strong> Enabled</p>
      <p><strong>Theme:</strong> Light</p>
      <p><strong>Language:</strong> English</p>
    </div>
  );
}
