import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout/Layout';
import Home from './Pages/Home';
import News from './Pages/News';
import UnitPendidikan from './Pages/UnitPendidikan';
import Kerjasama from './Pages/Kerjasama';
import Pendaftaran from './Pages/Pendaftaran';
import HomeAdmin from './Admin/Pages/HomeAdmin';
import AddNews from './Admin/Pages/AddNews';
import AddEvents from './Admin/Pages/AddEvents';
import AddItem from './Admin/Pages/AddItem';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/News" element={<News />}></Route>
          <Route path="/Unit-Pendidikan" element={<UnitPendidikan />}></Route>
          <Route path="/Kerjasama" element={<Kerjasama />}></Route>
          <Route path="/Pendaftaran" element={<Pendaftaran />}></Route>


          {/* ADMIN ROUTES */}
          <Route path='/Admin' element={<HomeAdmin />}></Route>
          <Route path='/Admin/add-news' element={<AddNews />}></Route>
          <Route path='/Admin/add-event' element={<AddEvents />}></Route>
          <Route path='/Admin/add-item' element={<AddItem />}></Route>

        </Routes>
      </Layout>
    </div>
  );
}

export default App;
