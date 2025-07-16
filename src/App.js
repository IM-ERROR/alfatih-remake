
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout/Layout';
import UnitPendidikan from './Pages/UnitPendidikan';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/unitpendidikan" element={<UnitPendidikan />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
