import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    heart_rate: '',
    oxygen: '',
    bp: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:5000/api/vitals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>AI Health Risk Checker</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Heart Rate: </label>
          <input type="number" name="heart_rate" value={formData.heart_rate} onChange={handleChange} required />
        </div>
        <div>
          <label>Blood Pressure: </label>
          <input type="number" name="bp" value={formData.bp} onChange={handleChange} required />
        </div>
        <div>
          <label>Oxygen Level: </label>
          <input type="number" name="oxygen" value={formData.oxygen} onChange={handleChange} required />
        </div>
        <br />
        <button type="submit">Check Risk</button>
      </form>

      {result && (
        <div style={{ marginTop: '20px' }}>
          <h3>Result:</h3>
          <p><strong>Risk Level:</strong> {result.risk_level}</p>
          <p><strong>Message:</strong> {result.message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
