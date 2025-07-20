import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout/Layout';
import Home from './Pages/Home';
import News from './Pages/News';
import UnitPendidikan from './Pages/UnitPendidikan';
import Kerjasama from './Pages/Kerjasama';
import Pendaftaran from './Pages/Pendaftaran';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes><Route path="/" element={<Home />}></Route>
          <Route path="/News" element={<News />}></Route>
          <Route path="/Unit-Pendidikan" element={<UnitPendidikan />}></Route>
          <Route path="/Kerjasama" element={<Kerjasama />}></Route>
          <Route path="/Pendaftaran" element={<Pendaftaran />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
