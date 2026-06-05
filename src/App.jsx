import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NikariLanding from './components/NikariLanding';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NikariLanding />} />
      </Routes>
    </Router>
  );
}
