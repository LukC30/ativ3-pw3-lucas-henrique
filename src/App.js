import './App.css';
import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CreateUser from './pages/create';
import GetUser from './pages/get';
import DeleteUser from './pages/delete';
import UpdateUser from './pages/update';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<CreateUser />} />
            <Route path='/read' element={<GetUser />} />
            <Route path="/delete" element={<DeleteUser />} />
            <Route path="/update" element={<UpdateUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
