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
import AdminRoute from "./routes/AdminRoute";
import UserRoute from "./routes/UserRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [token, setToken] = useState(localStorage.getItem('authToken'));
  const [usertype, setUsertype] = useState(localStorage.getItem('usertype'));

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
    localStorage.setItem('username', username);
    localStorage.setItem('authToken', token);
    localStorage.setItem('usertype', usertype);
    // console.log(usertype)
  }, [isAuthenticated, username, token, usertype]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    localStorage.removeItem('authToken');
    localStorage.removeItem('usertype')

    setIsAuthenticated(false);
    setUsername(null);
    setToken(null);
    setUsertype(null);

    navigate('/login');
    window.location.reload();
  };

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  const isAdmin = usertype === 'admin';
  // console.log(isAuthenticated , ' usertype : ', usertype)

  return (
    <>
      <NoRenderOnPath noRenderPaths={['/login', '/register', '/profile/order', '/profile/history', '/admin/clients']}>
        <Header isAdmin={isAdmin} isProfile={false} onLogout={handleLogout} />
      </NoRenderOnPath>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />

        {/* Cart */}
        <Route path="/cart" element={
          <UserRoute usertype={usertype}>
            <Cart />
          </UserRoute>
        } />

        {/* Profile */}
        <Route path="/profile/order" element={
          // <ProtectedRoute>
          <UserRoute usertype={usertype}>
            <Profile isHistory={true} />
          </UserRoute>
          // </ProtectedRoute>
        } />
        <Route path="/profile/history" element={
          // <ProtectedRoute>
          <UserRoute usertype={usertype}>
            <Profile isHistory={false} />
          </UserRoute>
          // </ProtectedRoute>
        } />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin */}
        <Route path="/admin/clients" element={

          <AdminRoute usertype={usertype}>
            <Admin isClient={true}/>
          </AdminRoute>
        } />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
