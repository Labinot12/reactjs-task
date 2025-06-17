import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsList from './pages/ProductList.jsx';
import ServicesPanel from './pages/ServicesPanel.jsx';
import SidewalkShedTable from './pages/SidewalkShedTable.jsx';

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/services" element={<ServicesPanel />} />
          <Route path="/sidewalk-shed" element={<SidewalkShedTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
