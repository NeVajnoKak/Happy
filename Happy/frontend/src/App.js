import { Route, Routes, Navigate, useNavigate } from "react-router";
import Header from "./component/Header/Header";
import '../src/assets/css/styles.css';
import Home from "./pages/Home/Home";
import ProductList from "./pages/Product/ProductList/ProductList";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Auth/Login/Login";
import NoRenderOnPath from "./routes/NoRenderOnPath";
import Register from "./pages/Auth/Register/Register";
import Cart from "./pages/Cart/Cart";
import Admin from "./pages/Admin/Admin";
import { useEffect, useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [token, setToken] = useState(localStorage.getItem('authToken'));
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
    localStorage.setItem('username', username);
    localStorage.setItem('authToken', token);
  }, [isAuthenticated, username, token]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    localStorage.removeItem('authToken');

    setIsAuthenticated(false);
    setUsername(null);
    setToken(null);

    navigate('/login');
    window.location.reload();
  };

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <NoRenderOnPath noRenderPaths={['/login', '/register', '/profile/order', '/profile/history', '/admin/clients']}>
        <Header isProfile={false} onLogout={handleLogout} />
      </NoRenderOnPath>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />

        {/* Cart */}
        <Route path="/cart" element={<Cart />} />

        {/* Profile */}
        <Route path="/profile/order" element={
          <ProtectedRoute>
            <Profile isHistory={true} />
          </ProtectedRoute>
        } />
        <Route path="/profile/history" element={
          <ProtectedRoute>
            <Profile isHistory={false} />
          </ProtectedRoute>
        } />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin */}
        <Route path="/admin/clients" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
}

export default App;
