import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/form'
import Info from './components/Info'
function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };
  return (
    <div className="body">
      <div className="container">
        <h2>Form in React</h2>
        <Form onSubmit={handleFormSubmit} />
        <Info data={submittedData} />
      </div>
    </div>
  )
}

export default App
