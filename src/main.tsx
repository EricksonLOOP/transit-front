
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './content/pages/index'
createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route path='/' element={<Index />} />

    </Routes>
  </Router>,
)
