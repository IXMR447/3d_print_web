import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Tutorial from './pages/Tutorial'
import RemotePrint from './pages/RemotePrint'
import Files from './pages/Files'
import Community from './pages/Community'
import Promotion from './pages/Promotion'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tutorial" element={<Tutorial />} />
        <Route path="remote-print" element={<RemotePrint />} />
        <Route path="files" element={<Files />} />
        <Route path="community" element={<Community />} />
        <Route path="promotion" element={<Promotion />} />
      </Route>
    </Routes>
  )
}

export default App
