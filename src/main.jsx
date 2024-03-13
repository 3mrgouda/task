import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css';
import HomeAiPage from './components/AitoolsPage/HomeAiPage.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route index path='/' element={<App/>}/>
    <Route path='ai-tools/*' element={<HomeAiPage/>}/>
  </Routes>
  </BrowserRouter>,
)
