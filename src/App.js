import './App.css';
import { Route, Routes, NavLink, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import UsersLayout from './UsersLayout';
import Users from './pages/users';
import User from './pages/user';

function App() {
  return (
    <div className="App">

    
      <Routes>
        <Route path="/" element={<UsersLayout />}>
          <Route path="/" element={<Home />}>
      
          </Route>

          <Route path="users/*" element={<Users />}>
            <Route path="user/:name/:id" element={<User />} />
          </Route>
        </Route>
        
      </Routes>
      
      
    </div>
  );
}

export default App;
