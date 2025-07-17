

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout/Layout';
import Pendaftaran from './Pages/Pendaftaran';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/Pendaftaran' element={<Pendaftaran />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
