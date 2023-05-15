import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Missions from './routes/Missions';
import Profile from './routes/Profile';
import NotMatch from './routes/NotMatch';
import Rockets from './routes/Rockets';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
